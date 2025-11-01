// 塔罗牌数据
const tarotCards = [
    { id: 0, name: "愚人", english: "The Fool", file: "0. 愚人 (The Fool).png", meaning: "新的开始，无限可能" },
    { id: 1, name: "魔术师", english: "The Magician", file: "1. 魔术师 (The Magician) .png", meaning: "创造力和意志力" },
    { id: 2, name: "女祭司", english: "The High Priestess", file: "2. 女祭司 (The High Priestess).png", meaning: "直觉和内在智慧" },
    { id: 3, name: "皇后", english: "The Empress", file: "3. 皇后 (The Empress).png", meaning: "丰盛和创造力" },
    { id: 4, name: "皇帝", english: "The Emperor", file: "4. 皇帝 (The Emperor).png", meaning: "权威和结构" },
    { id: 5, name: "教皇", english: "The Hierophant", file: "5. 教皇 (The Hierophant).png", meaning: "传统和精神指导" },
    { id: 6, name: "恋人", english: "The Lovers", file: "6. 恋人 (The Lovers).png", meaning: "选择和和谐" },
    { id: 7, name: "战车", english: "The Chariot", file: "7. 战车 (The Chariot).png", meaning: "胜利和决心" },
    { id: 8, name: "力量", english: "Strength", file: "8. 力量 (Strength).png", meaning: "内在力量和勇气" },
    { id: 9, name: "隐士", english: "The Hermit", file: "9. 隐士 (The Hermit).png", meaning: "内省和寻求真理" },
    { id: 10, name: "命运之轮", english: "Wheel of Fortune", file: "10. 命运之轮 (Wheel of Fortune).png", meaning: "变化和循环" },
    { id: 11, name: "正义", english: "Justice", file: "11. 正义 (Justice).png", meaning: "公平和平衡" },
    { id: 12, name: "倒吊人", english: "The Hanged Man", file: "12. 倒吊人 (The Hanged Man).png", meaning: "牺牲和新视角" },
    { id: 13, name: "死神", english: "Death", file: "13. 死神 (Death).png", meaning: "转变和重生" },
    { id: 14, name: "节制", english: "Temperance", file: "14. 节制 (Temperance).png", meaning: "平衡和耐心" },
    { id: 15, name: "恶魔", english: "The Devil", file: "15. 恶魔 (The Devil).png", meaning: "束缚和诱惑" },
    { id: 16, name: "高塔", english: "The Tower", file: "16. 高塔 (The Tower).png", meaning: "突变和启示" },
    { id: 17, name: "星星", english: "The Star", file: "17. 星星 (The Star).png", meaning: "希望和灵感" },
    { id: 18, name: "月亮", english: "The Moon", file: "18. 月亮 (The Moon).png", meaning: "幻觉和直觉" },
    { id: 19, name: "太阳", english: "The Sun", file: "19. 太阳 (The Sun).png", meaning: "成功和喜悦" },
    { id: 20, name: "审判", english: "Judgement", file: "20. 审判 (Judgement).png", meaning: "重生和觉醒" },
    { id: 21, name: "世界", english: "The World", file: "21. 世界 (The World).png", meaning: "完成和圆满" }
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeTarotCards();
    addAutoRotate();
    initializeDivination();
});

// 全局变量
let displayedCards = [];
let currentRound = 1;
const CARDS_PER_ROUND = 5;
let cardSets = []; // 存储多套不同的卡牌
let currentSetIndex = 0;

// 占卜相关变量
let selectedQuestionType = '';
let selectedCards = [];
let availableCardsForDivination = [];
let isDivinationMode = false;

// 初始化塔罗牌网格
function initializeTarotCards() {
    const cardsGrid = document.getElementById('cardsGrid');

    // 清空现有卡片
    cardsGrid.innerHTML = '';

    // 生成初始的4套随机卡牌
    cardSets = [
        getRandomCardsForRound(),
        getRandomCardsForRound(),
        getRandomCardsForRound(),
        getRandomCardsForRound()
    ];

    // 显示第一套卡牌
    displayCardSet(cardSets[0]);
}

// 显示指定的卡牌集合
function displayCardSet(cardSet) {
    const cardsGrid = document.getElementById('cardsGrid');
    cardsGrid.innerHTML = '';

    cardSet.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.setAttribute('data-card-id', card.id);
        cardElement.style.animationDelay = `${index * 0.3}s`;
        cardElement.innerHTML = `
            <div class="card-face card-front">
                <img src="images/${card.file}" alt="${card.name}" loading="lazy">
            </div>
            <div class="card-face card-back">
                <img src="images/塔罗牌背面.png" alt="塔罗牌背面" loading="eager">
            </div>
        `;

        // 移动端调试：强制加载卡背图片
        if (window.innerWidth <= 1200) {
            const backImg = cardElement.querySelector('.card-back img');
            if (backImg) {
                // 强制重新加载图片
                const src = backImg.src;
                backImg.src = '';
                backImg.src = src + '?t=' + Date.now();

                // 添加错误处理
                backImg.onerror = function() {
                    console.error('卡背图片加载失败:', src);
                    // 如果加载失败，显示备用样式
                    this.style.display = 'none';
                    const cardBack = this.parentElement;
                    cardBack.style.background = 'linear-gradient(135deg, #2d1b3d, #1a1a2e)';
                    cardBack.innerHTML += '<div style="color: #d4af37; font-size: 2rem; text-align: center;">背面</div>';
                };

                backImg.onload = function() {
                    console.log('卡背图片加载成功:', src);
                };
            }
        }

        // 纯展示模式，移除所有交互效果
        // 不添加点击事件，卡牌仅用于展示

        cardsGrid.appendChild(cardElement);
    });
}

// 获取当前轮次的随机卡片（优化版本）
function getRandomCardsForRound() {
    const availableCards = tarotCards.filter(card => !displayedCards.includes(card.id));
    const selectedCards = [];

    // 如果可用卡片不足5张，重置记忆
    if (availableCards.length < CARDS_PER_ROUND) {
        console.log('已展示所有卡牌，重置记忆系统');
        displayedCards = [];
        currentRound = 1;
        return getRandomCardsForRound();
    }

    // Fisher-Yates洗牌算法，更好的随机性
    const shuffled = [...availableCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 选择前5张
    for (let i = 0; i < CARDS_PER_ROUND; i++) {
        selectedCards.push(shuffled[i]);
        displayedCards.push(shuffled[i].id);
    }

    console.log(`生成随机组合${currentRound}:`, selectedCards.map(card => card.name));
    currentRound++;

    return selectedCards;
}


// 添加自动旋转效果
function addAutoRotate() {
    // 4秒后（第一次到背面位置）开始更换，然后每8秒更换一次
    setTimeout(() => {
        switchToNextCardSet();
        setInterval(switchToNextCardSet, 8000);
    }, 4000);
}

// 切换到下一套卡牌（在背面位置立即更换）
function switchToNextCardSet() {
    console.log('卡牌到达背面位置，立即切换新卡牌...');

    // 切换到下一套卡牌
    currentSetIndex = (currentSetIndex + 1) % cardSets.length;

    // 立即更新图片（因为卡牌已经在背面位置）
    updateCardImages(cardSets[currentSetIndex]);
    console.log(`在背面位置切换为正面随机${currentSetIndex + 1}:`, cardSets[currentSetIndex].map(card => card.name));

    // 预生成更多卡牌组，确保有足够的随机组合
    if (cardSets.length < 10) { // 保持至少10组，避免重复
        cardSets.push(getRandomCardsForRound());
        console.log(`生成新的随机组合，当前共${cardSets.length}组`);
    }
}

// 更新卡牌图片（纯展示模式）
function updateCardImages(newCards) {
    const cardsGrid = document.getElementById('cardsGrid');
    const existingCards = cardsGrid.querySelectorAll('.card');

    // 使用requestAnimationFrame优化性能
    requestAnimationFrame(() => {
        existingCards.forEach((cardElement, index) => {
            if (newCards[index]) {
                const newCard = newCards[index];
                const frontImg = cardElement.querySelector('.card-front img');
                if (frontImg) {
                    // 使用新图片避免缓存问题
                    const newSrc = `images/${newCard.file}`;
                    if (frontImg.src !== newSrc) {
                        frontImg.src = newSrc;
                        frontImg.alt = newCard.name;
                    }
                }
            }
        });
    });
}

// 刷新卡片（保留原函数以备不时之需）
function refreshCards() {
    initializeTarotCards();
}

// 播放翻牌音效（可选功能）
function playFlipSound() {
    // 这里可以添加音效
    // const audio = new Audio('sounds/flip.mp3');
    // audio.play().catch(e => console.log('音效播放失败:', e));
}


// 添加触摸支持（移动设备）
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    // 触摸手势功能已移除
}

// 添加鼠标悬停效果
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('flipped')) {
            this.style.transform = 'scale(1.05)';
        }
    });

    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('flipped')) {
            this.style.transform = 'scale(1)';
        }
    });
});


// 添加窗口大小调整时的响应
window.addEventListener('resize', function() {
    // 重新计算布局
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // 确保卡片在窗口调整后保持正确的状态
        if (card.classList.contains('flipped')) {
            card.style.transform = 'rotateY(180deg)';
        } else {
            card.style.transform = 'rotateY(0deg)';
        }
    });
});

// ==================== 占卜功能 ====================

// 初始化占卜系统
function initializeDivination() {
    // 占卜入口按钮
    document.getElementById('startDivination').addEventListener('click', startDivination);

    // 问题类型选择
    document.querySelectorAll('.question-type').forEach(type => {
        type.addEventListener('click', selectQuestionType);
    });

    // 导航按钮
    document.getElementById('backToMain').addEventListener('click', backToMain);
    document.getElementById('backToQuestionType').addEventListener('click', backToQuestionType);
    document.getElementById('startInterpretation').addEventListener('click', startInterpretation);
    document.getElementById('newReading').addEventListener('click', newReading);
    document.getElementById('backHome').addEventListener('click', backHome);
}

// 开始占卜
function startDivination() {
    isDivinationMode = true;
    selectedCards = [];
    selectedQuestionType = '';

    // 停止主页面的卡牌动画
    stopMainPageAnimation();

    // 显示占卜界面
    document.getElementById('divinationContainer').classList.add('active');
    showScreen('questionTypeScreen');
}

// 显示指定界面
function showScreen(screenId) {
    document.querySelectorAll('.divination-screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

// 选择问题类型
function selectQuestionType(event) {
    const typeElement = event.currentTarget;
    const type = typeElement.getAttribute('data-type');

    // 移除之前的选中状态
    document.querySelectorAll('.question-type').forEach(t => {
        t.classList.remove('selected');
    });

    // 添加选中状态
    typeElement.classList.add('selected');
    selectedQuestionType = type;

    // 延迟后进入卡牌抽取界面
    setTimeout(() => {
        prepareCardDraw();
        showScreen('cardDrawScreen');
    }, 500);
}

// 准备卡牌抽取
function prepareCardDraw() {
    // 重置抽取状态
    selectedCards = [];
    updateSelectedCount();

    // 生成可抽取的卡牌（从完整牌组中随机选择7张）
    availableCardsForDivination = shuffleArray([...tarotCards]).slice(0, 7);

    // 显示扇形排列的卡牌
    createFanCards();

    // 更新问题提示
    updateQuestionPrompt();
}

// 更新问题提示
function updateQuestionPrompt() {
    const promptElement = document.getElementById('drawInstruction');
    const prompts = {
        love: '请为你的爱情问题选择三张指引卡牌',
        career: '请为你的事业发展选择三张指引卡牌',
        relationship: '请为你的人际关系选择三张指引卡牌',
        growth: '请为你的个人成长选择三张指引卡牌',
        fortune: '请为你的日常运势选择三张指引卡牌'
    };

    promptElement.textContent = prompts[selectedQuestionType] || '请选择三张指引卡牌';
}

// 创建扇形排列的卡牌
function createFanCards() {
    const container = document.getElementById('cardFanContainer');
    container.innerHTML = '';

    const cards = availableCardsForDivination;
    const totalCards = cards.length;
    const angleRange = 120; // 扇形角度范围
    const startAngle = -angleRange / 2;

    console.log(`创建扇形卡牌: ${totalCards}张, 角度范围: ${angleRange}度`);

    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'fan-card';
        cardElement.setAttribute('data-card-id', card.id);
        cardElement.setAttribute('data-index', index);

        // 计算扇形位置
        const angle = startAngle + (angleRange / (totalCards - 1)) * index;
        const radius = 180; // 增大扇形半径
        const x = Math.sin(angle * Math.PI / 180) * radius;
        const y = -Math.cos(angle * Math.PI / 180) * 80; // 调整垂直位置

        const transform = `translateX(${x}px) translateY(${y}px) rotate(${angle}deg)`;
        cardElement.style.transform = transform;

        console.log(`卡牌${index} (${card.name}): 角度=${angle.toFixed(1)}°, x=${x.toFixed(1)}px, y=${y.toFixed(1)}px`);

        // 创建卡牌内容（只显示卡背）
        cardElement.innerHTML = `
            <div class="card-face card-back">
                <img src="images/塔罗牌背面.png" alt="塔罗牌背面" loading="eager">
            </div>
        `;

        // 添加点击事件
        cardElement.addEventListener('click', () => selectCard(cardElement, card));

        container.appendChild(cardElement);

        // 保存原始transform
        const originalTransform = cardElement.style.transform;

        // 添加进入动画
        setTimeout(() => {
            cardElement.style.opacity = '1';
            cardElement.style.transform = transform + ' scale(1)';
            console.log(`卡牌${index} 显示完成`);
        }, index * 100);

        // 保存原始transform到数据属性中
        cardElement.setAttribute('data-original-transform', transform);
    });
}

// 选择卡牌
function selectCard(cardElement, cardData) {
    if (selectedCards.length >= 3) return;
    if (cardElement.classList.contains('selected')) return;

    // 添加选中效果
    cardElement.classList.add('selected');

    // 替换卡背为卡牌正面
    setTimeout(() => {
        cardElement.innerHTML = `
            <div class="card-face">
                <img src="images/${cardData.file}" alt="${cardData.name}" loading="eager">
            </div>
        `;
    }, 400);

    // 添加到已选卡牌
    selectedCards.push({
        ...cardData,
        element: cardElement
    });

    // 更新计数
    updateSelectedCount();

    // 禁用其他卡牌的hover效果
    document.querySelectorAll('.fan-card:not(.selected)').forEach(card => {
        card.style.opacity = '0.7';
    });

    // 如果选满了3张，显示解读按钮
    if (selectedCards.length === 3) {
        setTimeout(() => {
            document.getElementById('startInterpretation').classList.remove('hidden');
            document.querySelectorAll('.fan-card:not(.selected)').forEach(card => {
                card.classList.add('disabled');
            });
        }, 1200);
    }
}

// 更新已选择卡牌数量
function updateSelectedCount() {
    document.getElementById('selectedCount').textContent = selectedCards.length;
}

// 开始解读
function startInterpretation() {
    if (selectedCards.length !== 3) return;

    // 生成解读内容
    const interpretation = generateInterpretation();

    // 显示结果界面
    showResultScreen(interpretation);
}

// 生成占卜解读
function generateInterpretation() {
    const questionNames = {
        love: '爱情占卜',
        career: '事业发展',
        relationship: '人际关系',
        growth: '个人成长',
        fortune: '日常运势'
    };

    // 生成综合解读
    const cards = selectedCards.map(c => c.name).join('、');
    const baseInterpretation = `你抽取的三张牌是${cards}。`;

    // 根据不同问题类型生成解读
    const specificInterpretations = {
        love: `${baseInterpretation}这些卡牌暗示着你的感情生活将迎来重要的转折。第一张牌代表现状，第二张牌显示挑战，第三张牌指引未来。建议你保持开放的心态，真诚面对内心的感受。`,
        career: `${baseInterpretation}这些卡牌表明你的事业发展正处于关键时期。它们提示你需要发挥领导才能，同时保持谦逊学习的态度。新的机会即将出现，要勇于把握。`,
        relationship: `${baseInterpretation}这些卡牌反映着你的人际关系状况。它们建议你加强沟通，理解他人立场，同时保持自己的原则。和谐的关系建立在相互尊重的基础上。`,
        growth: `${baseInterpretation}这些卡牌指向你内在成长的路径。它们鼓励你探索内心深处，面对真正的自己，释放潜能。这个过程需要勇气和耐心。`,
        fortune: `${baseInterpretation}这些卡牌预示着你近期的运势走向。它们提醒你保持积极心态，抓住机遇，同时也要谨慎处理可能出现的变化。`
    };

    return {
        question: questionNames[selectedQuestionType],
        cards: selectedCards,
        interpretation: specificInterpretations[selectedQuestionType] || baseInterpretation,
        guidance: '相信自己的直觉，这些指引将帮助你找到前行的方向。记住，命运掌握在自己手中。'
    };
}

// 显示结果界面
function showResultScreen(interpretation) {
    // 设置问题标题
    document.getElementById('resultQuestion').textContent = interpretation.question;

    // 显示抽取的三张卡牌
    const resultCardsContainer = document.getElementById('resultCards');
    resultCardsContainer.innerHTML = '';

    interpretation.cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'result-card';
        cardElement.innerHTML = `
            <img src="images/${card.file}" alt="${card.name}">
            <h4>${card.name}</h4>
            <div class="english-name">${card.english}</div>
            <div class="meaning">${card.meaning}</div>
        `;
        resultCardsContainer.appendChild(cardElement);

        // 添加动画延迟
        setTimeout(() => {
            cardElement.style.opacity = '1';
            cardElement.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // 显示解读内容
    const interpretationContent = document.getElementById('interpretationContent');
    interpretationContent.innerHTML = `
        <h3>塔罗指引</h3>
        <div class="interpretation-text">${interpretation.interpretation}</div>
        <div class="guidance">${interpretation.guidance}</div>
    `;

    // 切换到结果界面
    showScreen('resultScreen');
}

// 新的占卜
function newReading() {
    selectedCards = [];
    selectedQuestionType = '';
    showScreen('questionTypeScreen');
}

// 返回主页
function backHome() {
    isDivinationMode = false;
    document.getElementById('divinationContainer').classList.remove('active');
    startMainPageAnimation();
}

// 返回问题类型选择
function backToQuestionType() {
    selectedCards = [];
    showScreen('questionTypeScreen');
}

// 返回主页面
function backToMain() {
    isDivinationMode = false;
    document.getElementById('divinationContainer').classList.remove('active');
    startMainPageAnimation();
}

// 停止主页面动画
function stopMainPageAnimation() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.animationPlayState = 'paused';
    });
}

// 开始主页面动画
function startMainPageAnimation() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.animationPlayState = 'running';
    });
}

// 工具函数：洗牌算法
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}