// 塔罗牌占卜程序
class TarotReading {
    constructor() {
        this.selectedType = null;
        this.selectedCards = [];
        this.question = '';
        this.isCardReversed = [];
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // 占卜类型选择
        document.querySelectorAll('.reading-type').forEach(type => {
            type.addEventListener('click', (e) => this.selectReadingType(e));
        });

        // 开始占卜按钮
        document.getElementById('startReading').addEventListener('click', () => this.startReading());

        // 重新占卜按钮
        document.getElementById('resetReading').addEventListener('click', () => this.resetReading());

        // 问题输入框回车事件
        document.getElementById('questionInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                this.startReading();
            }
        });
    }

    selectReadingType(e) {
        // 移除其他选中状态
        document.querySelectorAll('.reading-type').forEach(type => {
            type.classList.remove('selected');
        });

        // 添加选中状态
        e.currentTarget.classList.add('selected');
        this.selectedType = e.currentTarget.dataset.type;

        // 显示问题输入区域
        document.getElementById('questionSection').style.display = 'block';

        // 根据类型调整问题输入框提示
        const questionInput = document.getElementById('questionInput');
        const prompts = {
            'three-card': '请描述你想要了解的情况或问题...\\n\\n三牌阵将为你展示：\\n- 过去的因素\\n- 现在的状况\\n- 未来的发展',
            'celtic-cross': '请详细描述你的问题或当前面临的状况...\\n\\n凯尔特十字将全面分析：\\n- 当前状况\\n- 挑战与机遇\\n- 过去的影响\\n- 未来的可能',
            'decision': '请描述你正在考虑的决定和选项...\\n\\n决策指引将帮助你：\\n- 了解各选项的情况\\n- 发现潜在的机会\\n- 做出明智的选择',
            'single': '请告诉我你想要获得指引的领域...\\n\\n单张指引将为你提供：\\n- 今日的能量焦点\\n- 简明的指引建议\\n- 需要关注的重点'
        };

        questionInput.placeholder = prompts[this.selectedType] || '请描述你的问题...';
        questionInput.focus();
    }

    startReading() {
        this.question = document.getElementById('questionInput').value.trim();

        if (!this.question) {
            this.showMessage('请先描述你的问题或情况');
            return;
        }

        // 生成卡牌选择界面
        this.generateCardSelection();
    }

    generateCardSelection() {
        const cardsContainer = document.getElementById('cardsContainer');
        const cardCount = this.getRequiredCardCount();

        // 更新计数显示
        document.getElementById('totalCards').textContent = cardCount;
        document.getElementById('cardCount').textContent = this.selectedCards.length;

        // 清空现有卡牌
        cardsContainer.innerHTML = '';

        // 生成所有22张大阿卡那牌背面
        const shuffledCards = [...tarotData].sort(() => Math.random() - 0.5);

        shuffledCards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'selectable-card';
            cardElement.dataset.cardId = card.id;
            cardElement.style.animationDelay = `${index * 0.05}s`;

            cardElement.innerHTML = `
                <div class="card-back"></div>
            `;

            cardElement.addEventListener('click', () => this.selectCard(cardElement, card));
            cardsContainer.appendChild(cardElement);
        });

        // 显示卡牌选择区域
        document.getElementById('cardSelection').style.display = 'block';
    }

    getRequiredCardCount() {
        const counts = {
            'three-card': 3,
            'celtic-cross': 10,
            'decision': 3,
            'single': 1
        };
        return counts[this.selectedType] || 3;
    }

    selectCard(cardElement, cardData) {
        if (cardElement.classList.contains('selected')) {
            // 取消选择
            cardElement.classList.remove('selected');
            const index = this.selectedCards.findIndex(c => c.id === cardData.id);
            if (index > -1) {
                this.selectedCards.splice(index, 1);
                this.isCardReversed.splice(index, 1);
            }
        } else if (this.selectedCards.length < this.getRequiredCardCount()) {
            // 选择卡牌
            cardElement.classList.add('selected');

            // 随机决定正位或逆位
            const isReversed = Math.random() < 0.3; // 30%概率逆位

            this.selectedCards.push(cardData);
            this.isCardReversed.push(isReversed);

            // 如果是单张牌，直接显示结果
            if (this.selectedType === 'single' && this.selectedCards.length === 1) {
                setTimeout(() => this.showResult(), 500);
            }
        }

        // 更新计数
        document.getElementById('cardCount').textContent = this.selectedCards.length;

        // 如果选够了牌，显示结果
        if (this.selectedCards.length === this.getRequiredCardCount() && this.selectedType !== 'single') {
            setTimeout(() => this.showResult(), 1000);
        }
    }

    showResult() {
        // 隐藏卡牌选择区域
        document.getElementById('cardSelection').style.display = 'none';

        // 生成占卜结果
        this.generateReadingResult();

        // 显示结果区域
        document.getElementById('readingResult').classList.add('show');

        // 滚动到结果区域
        document.getElementById('readingResult').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    generateReadingResult() {
        const resultSpread = document.getElementById('resultSpread');
        const overallInterpretation = document.getElementById('overallInterpretation');

        resultSpread.innerHTML = '';

        // 根据占卜类型生成不同的牌阵
        const positions = this.getCardPositions();

        positions.forEach((position, index) => {
            if (index < this.selectedCards.length) {
                const card = this.selectedCards[index];
                const isReversed = this.isCardReversed[index];
                const interpretation = this.getCardInterpretation(card, isReversed, position, index);

                const cardElement = document.createElement('div');
                cardElement.className = 'result-card';
                cardElement.innerHTML = `
                    <h4>${position.title}</h4>
                    <div class="card-name">${card.name} ${isReversed ? '(逆位)' : '(正位)'}</div>
                    <div class="card-meaning">${interpretation}</div>
                `;

                resultSpread.appendChild(cardElement);
            }
        });

        // 生成整体解读
        this.generateOverallInterpretation();
    }

    getCardPositions() {
        const positions = {
            'three-card': [
                { title: '过去', key: 'past' },
                { title: '现在', key: 'present' },
                { title: '未来', key: 'future' }
            ],
            'celtic-cross': [
                { title: '现状', key: 'present' },
                { title: '挑战', key: 'challenge' },
                { title: '过去', key: 'past' },
                { title: '未来', key: 'future' },
                { title: '意识', key: 'conscious' },
                { title: '无意识', key: 'unconscious' },
                { title: '自身态度', key: 'attitude' },
                { title: '外部影响', key: 'external' },
                { title: '希望与恐惧', key: 'hopes' },
                { title: '最终结果', key: 'outcome' }
            ],
            'decision': [
                { title: '选项A', key: 'optionA' },
                { title: '选项B', key: 'optionB' },
                { title: '建议', key: 'advice' }
            ],
            'single': [
                { title: '今日指引', key: 'guidance' }
            ]
        };

        return positions[this.selectedType] || positions['three-card'];
    }

    getCardInterpretation(card, isReversed, position, index) {
        const baseInterpretation = isReversed ? card.reversed : card.upright;

        // 根据问题类型和位置调整解读
        const contextualMeaning = this.getContextualMeaning(card, isReversed, position.key, this.question);

        return contextualMeaning || baseInterpretation;
    }

    getContextualMeaning(card, isReversed, positionKey, question) {
        // 基于问题关键词和卡牌位置生成个性化解读
        const questionLower = question.toLowerCase();
        let context = '';

        // 分析问题类型
        if (questionLower.includes('感情') || questionLower.includes('爱情') || questionLower.includes('关系')) {
            context = this.getLoveInterpretation(card, isReversed, positionKey);
        } else if (questionLower.includes('事业') || questionLower.includes('工作') || questionLower.includes('职业')) {
            context = this.getCareerInterpretation(card, isReversed, positionKey);
        } else if (questionLower.includes('健康') || questionLower.includes('身体')) {
            context = this.getHealthInterpretation(card, isReversed, positionKey);
        } else if (questionLower.includes('财运') || questionLower.includes('金钱') || questionLower.includes('财富')) {
            context = this.getFinanceInterpretation(card, isReversed, positionKey);
        } else {
            context = this.getGeneralInterpretation(card, isReversed, positionKey);
        }

        return context;
    }

    getLoveInterpretation(card, isReversed, positionKey) {
        const meanings = {
            'past': '过去的感情经历影响了现在的状态',
            'present': '当前感情状况的真实反映',
            'future': '未来感情发展的潜在趋势',
            'challenge': '关系中需要面对的挑战',
            'advice': '在感情方面的建议和指导',
            'guidance': '今日感情方面的指引'
        };

        return isReversed ?
            `逆位${card.name}在感情方面：${meanings[positionKey]}，可能存在情感阻塞或需要调整的地方。` :
            `正位${card.name}在感情方面：${meanings[positionKey]}，预示着积极的情感流动。`;
    }

    getCareerInterpretation(card, isReversed, positionKey) {
        const meanings = {
            'past': '过去的职业经历奠定了基础',
            'present': '当前工作状况的体现',
            'future': '职业发展的潜在方向',
            'challenge': '工作中需要克服的困难',
            'advice': '职业发展的建议',
            'guidance': '今日事业方面的指引'
        };

        return isReversed ?
            `逆位${card.name}在事业方面：${meanings[positionKey]}，可能需要重新评估职业方向。` :
            `正位${card.name}在事业方面：${meanings[positionKey]}，暗示着良好的发展机遇。`;
    }

    getHealthInterpretation(card, isReversed, positionKey) {
        const meanings = {
            'past': '过去的健康状况影响了现在',
            'present': '当前身心健康的状态',
            'future': '未来健康发展的趋势',
            'challenge': '健康方面需要注意的问题',
            'advice': '身心健康方面的建议',
            'guidance': '今日健康方面的指引'
        };

        return isReversed ?
            `逆位${card.name}在健康方面：${meanings[positionKey]}，提醒需要关注身体的某些信号。` :
            `正位${card.name}在健康方面：${meanings[positionKey]}，预示着积极的健康能量。`;
    }

    getFinanceInterpretation(card, isReversed, positionKey) {
        const meanings = {
            'past': '过去的财务状况影响了现在',
            'present': '当前财务状况的反映',
            'future': '未来财运的发展趋势',
            'challenge': '财务方面需要面对的挑战',
            'advice': '财务管理方面的建议',
            'guidance': '今日财运方面的指引'
        };

        return isReversed ?
            `逆位${card.name}在财运方面：${meanings[positionKey]}，建议谨慎处理财务问题。` :
            `正位${card.name}在财运方面：${meanings[positionKey]}，预示着良好的财富流动。`;
    }

    getGeneralInterpretation(card, isReversed, positionKey) {
        const meanings = {
            'past': '过去的经历为你积累了智慧',
            'present': '当前状况的真实反映',
            'future': '未来发展的潜在可能性',
            'challenge': '需要面对和克服的挑战',
            'advice': '基于当前情况的建议',
            'guidance': '今日的整体指引'
        };

        return isReversed ?
            `逆位${card.name}：${meanings[positionKey]}，提醒你需要从不同角度看待问题。` :
            `正位${card.name}：${meanings[positionKey]}，带来积极的能量和启示。`;
    }

    generateOverallInterpretation() {
        const overallInterpretation = document.getElementById('overallInterpretation');

        let interpretation = '<h3>整体解读</h3>';

        // 分析卡牌的能量流动
        const energyAnalysis = this.analyzeEnergyFlow();
        interpretation += `<p><strong>能量分析：</strong>${energyAnalysis}</p>`;

        // 提供综合建议
        const advice = this.generateAdvice();
        interpretation += `<p><strong>综合建议：</strong>${advice}</p>`;

        // 总结关键主题
        const theme = this.identifyTheme();
        interpretation += `<p><strong>关键主题：</strong>${theme}</p>`;

        overallInterpretation.innerHTML = interpretation;
    }

    analyzeEnergyFlow() {
        const reversedCount = this.isCardReversed.filter(r => r).length;
        const totalCount = this.isCardReversed.length;

        if (reversedCount > totalCount / 2) {
            return '较多的逆位牌暗示着当前存在一些阻塞或挑战，需要更多的耐心和内在工作。这是一个转化和重新审视的好时机。';
        } else if (reversedCount === 0) {
            return '所有牌都是正位，显示出强烈的积极能量流动，事情发展相对顺利，是行动和前进的好时机。';
        } else {
            return '正逆位牌的平衡显示出事物发展的复杂性，既有挑战也有机遇，需要智慧和灵活性来应对。';
        }
    }

    generateAdvice() {
        const majorArcanaCount = this.selectedCards.filter(card => card.id >= 0 && card.id <= 21).length;

        if (majorArcanaCount >= this.selectedCards.length / 2) {
            return '大牌占主导，这是一个重要的生命转折点，建议你以更宏大的视角看待当前状况，关注灵性成长和人生意义。';
        } else {
            return '当前的挑战更多与日常生活相关，建议专注于实际行动和细节，通过渐进的方式解决问题。';
        }
    }

    identifyTheme() {
        // 分析主要元素
        const elements = this.analyzeElements();
        const dominantElement = Object.keys(elements).reduce((a, b) =>
            elements[a] > elements[b] ? a : b
        );

        const elementThemes = {
            'fire': '创造力与行动力的主题，鼓励你表达自我，追求目标',
            'water': '情感与直觉的主题，提醒你关注内在感受和情感需求',
            'air': '理智与沟通的主题，强调清晰的思考和有效的表达',
            'earth': '现实与稳定的主题，关注物质基础和长期规划'
        };

        return elementThemes[dominantElement] || '多元的主题交织，需要平衡发展各个方面';
    }

    analyzeElements() {
        const elementCount = { fire: 0, water: 0, air: 0, earth: 0 };

        this.selectedCards.forEach(card => {
            const element = card.element || 'air'; // 默认风元素
            if (elementCount.hasOwnProperty(element)) {
                elementCount[element]++;
            }
        });

        return elementCount;
    }

    showMessage(message) {
        // 创建一个临时的消息提示
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(212, 175, 55, 0.9);
            color: #1e1e2e;
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: bold;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        `;
        messageDiv.textContent = message;

        document.body.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => document.body.removeChild(messageDiv), 300);
        }, 2000);
    }

    resetReading() {
        // 重置所有状态
        this.selectedType = null;
        this.selectedCards = [];
        this.question = '';
        this.isCardReversed = [];

        // 重置界面
        document.querySelectorAll('.reading-type').forEach(type => {
            type.classList.remove('selected');
        });

        document.getElementById('questionSection').style.display = 'none';
        document.getElementById('cardSelection').style.display = 'none';
        document.getElementById('readingResult').classList.remove('show');
        document.getElementById('questionInput').value = '';

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    new TarotReading();
});

// 添加淡出动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);