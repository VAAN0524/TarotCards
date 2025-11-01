// 塔罗牌数据 - 包含正位逆位含义
const tarotCards = [
    {
        id: 0,
        name: "愚人",
        english: "The Fool",
        file: "0. 愚人 (The Fool).png",
        upright: "新的开始，无限可能，冒险精神，天真无邪",
        reversed: "鲁莽行事，愚蠢，冒险失败，缺乏方向感"
    },
    {
        id: 1,
        name: "魔术师",
        english: "The Magician",
        file: "1. 魔术师 (The Magician) .png",
        upright: "创造力和意志力，技能娴熟，目标明确，行动力强",
        reversed: "操控欲强，欺骗，技能不足，计划失败"
    },
    {
        id: 2,
        name: "女祭司",
        english: "The High Priestess",
        file: "2. 女祭司 (The High Priestess).png",
        upright: "直觉和内在智慧，神秘，潜意识，洞察力",
        reversed: "隐藏的真相被忽略，直觉错误，秘密暴露"
    },
    {
        id: 3,
        name: "皇后",
        english: "The Empress",
        file: "3. 皇后 (The Empress).png",
        upright: "丰盛和创造力，母性，生育力，舒适和安全感",
        reversed: "依赖过度，创造力受阻，缺乏母爱，不安全感"
    },
    {
        id: 4,
        name: "皇帝",
        english: "The Emperor",
        file: "4. 皇帝 (The Emperor).png",
        upright: "权威和结构，领导力，稳定，父亲形象",
        reversed: "专制独裁，缺乏纪律，失控，权威滥用"
    },
    {
        id: 5,
        name: "教皇",
        english: "The Hierophant",
        file: "5. 教皇 (The Hierophant).png",
        upright: "传统和精神指导，信仰，制度，学习",
        reversed: "打破常规，挑战传统，自由思想，反叛"
    },
    {
        id: 6,
        name: "恋人",
        english: "The Lovers",
        file: "6. 恋人 (The Lovers).png",
        upright: "选择和和谐，爱情关系，价值观统一，伙伴关系",
        reversed: "关系不和，错误选择，价值观冲突，分离"
    },
    {
        id: 7,
        name: "战车",
        english: "The Chariot",
        file: "7. 战车 (The Chariot).png",
        upright: "胜利和决心，意志力，前进动力，自我控制",
        reversed: "失控，缺乏方向，失败，意志力薄弱"
    },
    {
        id: 8,
        name: "力量",
        english: "Strength",
        file: "8. 力量 (Strength).png",
        upright: "内在力量和勇气，耐心，同情心，自控力",
        reversed: "软弱无力，缺乏自信，冲动，失去控制"
    },
    {
        id: 9,
        name: "隐士",
        english: "The Hermit",
        file: "9. 隐士 (The Hermit).png",
        upright: "内省和寻求真理，智慧，独处，内在指引",
        reversed: "孤立无援，退缩，孤独，迷失方向"
    },
    {
        id: 10,
        name: "命运之轮",
        english: "Wheel of Fortune",
        file: "10. 命运之轮 (Wheel of Fortune).png",
        upright: "变化和循环，运气，转折点，命运",
        reversed: "厄运，抗拒变化，坏运气，停滞不前"
    },
    {
        id: 11,
        name: "正义",
        english: "Justice",
        file: "11. 正义 (Justice).png",
        upright: "公平和平衡，真理，法律，因果关系",
        reversed: "不公正，偏见，逃避责任，失衡"
    },
    {
        id: 12,
        name: "倒吊人",
        english: "The Hanged Man",
        file: "12. 倒吊人 (The Hanged Man).png",
        upright: "牺牲和新视角，顺从，放下，等待",
        reversed: "无意义的牺牲，拖延，抗拒改变，停滞"
    },
    {
        id: 13,
        name: "死神",
        english: "Death",
        file: "13. 死神 (Death).png",
        upright: "转变和重生，结束，变化，新生",
        reversed: "抗拒改变，恐惧改变，停滞，痛苦结束"
    },
    {
        id: 14,
        name: "节制",
        english: "Temperance",
        file: "14. 节制 (Temperance).png",
        upright: "平衡和耐心，调和，中庸之道，适应",
        reversed: "失衡，极端，缺乏耐心，冲突"
    },
    {
        id: 15,
        name: "恶魔",
        english: "The Devil",
        file: "15. 恶魔 (The Devil).png",
        upright: "束缚和诱惑，物质主义，欲望，沉溺",
        reversed: "挣脱束缚，解放，摆脱诱惑，自由"
    },
    {
        id: 16,
        name: "高塔",
        english: "The Tower",
        file: "16. 高塔 (The Tower).png",
        upright: "突变和启示，灾难，觉醒，真理",
        reversed: "逃避灾难，恐惧改变，延迟觉醒，小问题"
    },
    {
        id: 17,
        name: "星星",
        english: "The Star",
        file: "17. 星星 (The Star).png",
        upright: "希望和灵感，治愈，指引，乐观",
        reversed: "失去希望，失望，缺乏信心，绝望"
    },
    {
        id: 18,
        name: "月亮",
        english: "The Moon",
        file: "18. 月亮 (The Moon).png",
        upright: "幻觉和直觉，潜意识，恐惧，欺骗",
        reversed: "恐惧克服，真相显现，焦虑缓解，清晰"
    },
    {
        id: 19,
        name: "太阳",
        english: "The Sun",
        file: "19. 太阳 (The Sun).png",
        upright: "成功和喜悦，活力，清晰，乐观",
        reversed: "暂时的成功，缺乏喜悦，悲观，清晰度不足"
    },
    {
        id: 20,
        name: "审判",
        english: "Judgement",
        file: "20. 审判 (Judgement).png",
        upright: "重生和觉醒，决定，救赎，新开始",
        reversed: "自我怀疑，逃避责任，错误决定，缺乏觉醒"
    },
    {
        id: 21,
        name: "世界",
        english: "The World",
        file: "21. 世界 (The World).png",
        upright: "完成和圆满，成就，整合，旅行",
        reversed: "未完成，缺乏闭环，延迟，不满足"
    }
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面DOM加载完成，开始初始化...');

    // 基础初始化
    initializeTarotCards();
    addAutoRotate();

    // 延迟初始化占卜系统，确保所有元素都准备好
    setTimeout(() => {
        console.log('延迟初始化占卜系统...');
        initializeDivination();
        setupLazyLoading(); // 启用图片懒加载优化
    }, 200);

    // 添加全局测试函数
    window.testDivination = function() {
        console.log('测试占卜系统...');
        try {
            const startBtn = document.getElementById('startDivination');
            if (startBtn) {
                console.log('找到开始按钮，手动触发点击事件');
                startBtn.click();
            } else {
                console.error('仍然找不到开始按钮');
            }
        } catch (error) {
            console.error('测试占卜系统失败:', error);
        }
    };

    console.log('基础初始化完成，占卜系统将在200ms后初始化');
});

// 全局变量
// 全局状态管理
const AppState = {
    displayedCards: [],
    currentRound: 1,
    CARDS_PER_ROUND: 5,
    cardSets: [],
    currentSetIndex: 0,
    selectedQuestionType: '',
    selectedCards: [],
    availableCardsForDivination: [],
    isDivinationMode: false,
    scrollTimeout: null
};

// 性能优化工具函数
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// 内存管理：清理未使用的DOM事件监听器
const cleanupEventListeners = () => {
    // 清理所有卡牌事件监听器
    document.querySelectorAll('.scroll-card').forEach(card => {
        card.replaceWith(card.cloneNode(true));
    });
};

// 图片懒加载优化
const setupLazyLoading = () => {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
};

// 初始化塔罗牌网格
function initializeTarotCards() {
    try {
        console.log('初始化塔罗牌网格...');
        const cardsGrid = document.getElementById('cardsGrid');

        if (!cardsGrid) {
            console.error('找不到cardsGrid容器');
            return;
        }

        // 清空现有卡片
        cardsGrid.innerHTML = '';

        // 生成初始的4套随机卡牌 - 使用AppState管理
        AppState.cardSets = [
            getRandomCardsForRound(),
            getRandomCardsForRound(),
            getRandomCardsForRound(),
            getRandomCardsForRound()
        ];

        // 显示第一套卡牌
        displayCardSet(AppState.cardSets[0]);
        console.log('塔罗牌网格初始化完成');
    } catch (error) {
        console.error('初始化塔罗牌网格失败:', error);
    }
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
    const availableCards = tarotCards.filter(card => !AppState.displayedCards.includes(card.id));
    const selectedCards = [];

    // 如果可用卡片不足5张，重置记忆
    if (availableCards.length < AppState.CARDS_PER_ROUND) {
        console.log('已展示所有卡牌，重置记忆系统');
        AppState.displayedCards = [];
        AppState.currentRound = 1;
        return getRandomCardsForRound();
    }

    // Fisher-Yates洗牌算法，更好的随机性
    const shuffled = [...availableCards];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // 选择前5张
    for (let i = 0; i < AppState.CARDS_PER_ROUND; i++) {
        selectedCards.push(shuffled[i]);
        AppState.displayedCards.push(shuffled[i].id);
    }

    console.log(`生成随机组合${AppState.currentRound}:`, selectedCards.map(card => card.name));
    AppState.currentRound++;

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
    try {
        console.log('卡牌到达背面位置，立即切换新卡牌...');

        // 切换到下一套卡牌 - 使用AppState管理
        AppState.currentSetIndex = (AppState.currentSetIndex + 1) % AppState.cardSets.length;

        // 立即更新图片（因为卡牌已经在背面位置）
        updateCardImages(AppState.cardSets[AppState.currentSetIndex]);
        console.log(`在背面位置切换为正面随机${AppState.currentSetIndex + 1}:`, AppState.cardSets[AppState.currentSetIndex].map(card => card.name));

    // 预生成更多卡牌组，确保有足够的随机组合
    if (AppState.cardSets.length < 10) { // 保持至少10组，避免重复
        AppState.cardSets.push(getRandomCardsForRound());
        console.log(`生成新的随机组合，当前共${AppState.cardSets.length}组`);
    }
    } catch (error) {
        console.error('切换卡牌集失败:', error);
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


// 添加窗口大小调整时的响应（防抖处理）
const debouncedResize = debounce(function() {
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
}, 250);

window.addEventListener('resize', debouncedResize);

// ==================== 占卜功能 ====================

// 极简占卜系统初始化
function initializeDivination() {
    console.log('极简占卜系统初始化...');

    setTimeout(() => {
        try {
            // 简单的开始按钮绑定
            const startBtn = document.getElementById('startDivination');
            if (startBtn) {
                console.log('绑定开始按钮');
                startBtn.onclick = function() {
                    console.log('点击开始占卜');
                    showSimpleDivination();
                };
            }

            // 简单的问题类型绑定
            const types = document.querySelectorAll('.question-type');
            console.log(`找到 ${types.length} 个问题类型`);
            types.forEach((type, index) => {
                type.onclick = function() {
                    console.log(`选择问题类型: ${this.getAttribute('data-type')}`);
                    showSimpleCardDraw();
                };
            });

            // 简单的返回按钮绑定
            const backBtn = document.getElementById('backToMain');
            if (backBtn) {
                backBtn.onclick = function() {
                    console.log('返回主页');
                    hideDivination();
                };
            }

            console.log('极简占卜系统初始化完成');
        } catch (error) {
            console.error('占卜初始化失败:', error);
        }
    }, 100);
}

// 极简显示占卜界面
function showSimpleDivination() {
    try {
        console.log('显示占卜界面');
        const container = document.getElementById('divinationContainer');
        if (container) {
            container.style.display = 'block';
            container.style.visibility = 'visible';
            container.style.opacity = '1';
            container.style.zIndex = '1000';

            // 显示问题类型界面
            const questionScreen = document.getElementById('questionTypeScreen');
            if (questionScreen) {
                questionScreen.style.display = 'block';
                questionScreen.classList.remove('hidden');
            }

            console.log('占卜界面显示成功');
        }
    } catch (error) {
        console.error('显示占卜界面失败:', error);
    }
}

// 极简显示卡牌抽取界面
function showSimpleCardDraw() {
    try {
        console.log('显示卡牌抽取界面');

        // 隐藏问题类型界面
        document.getElementById('questionTypeScreen').style.display = 'none';

        // 显示卡牌抽取界面
        const drawScreen = document.getElementById('cardDrawScreen');
        if (drawScreen) {
            drawScreen.style.display = 'block';
            drawScreen.classList.remove('hidden');
        }

        // 创建简单的卡牌
        createSimpleCards();

    } catch (error) {
        console.error('显示卡牌抽取界面失败:', error);
    }
}

// 创建专业的22张塔罗牌横向滚动系统
function createSimpleCards() {
    try {
        console.log('创建22张塔罗牌横向滚动系统');
        const container = document.getElementById('cardFanContainer');
        if (!container) {
            console.error('找不到卡牌容器');
            return;
        }

        container.innerHTML = '';

        // 使用全部22张塔罗牌
        const cards = [...tarotCards];
        console.log(`准备创建${cards.length}张塔罗牌滚动系统`);

        // 创建滚动容器结构
        const scrollWrapper = document.createElement('div');
        scrollWrapper.className = 'tarot-scroll-wrapper';
        scrollWrapper.style.cssText = `
            width: 100%;
            height: 220px;
            position: relative;
            overflow: hidden;
            margin: 20px 0;
        `;

        // 创建轨道容器
        const track = document.createElement('div');
        track.className = 'tarot-scroll-track';
        track.style.cssText = `
            display: flex;
            height: 100%;
            animation: tarotScroll 25s linear infinite;
            will-change: transform;
        `;

        // 第一组卡牌（22张）
        cards.forEach((card, index) => {
            const cardElement = createTarotScrollCard(card, index);
            track.appendChild(cardElement);
        });

        // 第二组卡牌（用于无缝循环）
        cards.forEach((card, index) => {
            const cardElement = createTarotScrollCard(card, index + cards.length);
            track.appendChild(cardElement);
        });

        scrollWrapper.appendChild(track);
        container.appendChild(scrollWrapper);

        // 添加CSS动画
        addTarotScrollAnimation();

        console.log(`成功创建${cards.length * 2}张塔罗牌无缝滚动系统`);

    } catch (error) {
        console.error('创建塔罗牌滚动系统失败:', error);
    }
}

// 创建单个滚动塔罗牌
function createTarotScrollCard(card, index) {
    const cardElement = document.createElement('div');
    cardElement.className = 'tarot-scroll-card';
    cardElement.setAttribute('data-card-id', card.id);
    cardElement.setAttribute('data-index', index % 22);
    cardElement.setAttribute('data-original-index', index % 22);

    cardElement.style.cssText = `
        flex-shrink: 0;
        width: 120px;
        height: 180px;
        margin: 0 10px;
        cursor: pointer;
        position: relative;
        transition: all 0.3s ease;
        transform-style: preserve-3d;
        backface-visibility: hidden;
    `;

    // 创建卡牌内容（显示卡背）
    cardElement.innerHTML = `
        <div class="tarot-card-face" style="
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 50%, #2d1b3d 100%);
            border: 2px solid #d4af37;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
        ">
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('images/塔罗牌背面.png') center/contain no-repeat;
                border-radius: 10px;
            "></div>
            <div style="
                position: absolute;
                bottom: 8px;
                right: 8px;
                background: rgba(0, 0, 0, 0.7);
                color: #d4af37;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 10px;
                font-weight: bold;
            ">${card.name}</div>
        </div>
    `;

    // 添加点击事件
    cardElement.onclick = function() {
        handleTarotCardSelection(card, cardElement);
    };

    // 添加悬停效果
    cardElement.onmouseenter = function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
        this.style.zIndex = '10';
    };

    cardElement.onmouseleave = function() {
        if (!this.classList.contains('selected')) {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.zIndex = '1';
        }
    };

    return cardElement;
}

// 添加塔罗牌滚动动画
function addTarotScrollAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes tarotScroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-50% - 20px));
            }
        }

        .tarot-scroll-wrapper:hover .tarot-scroll-track {
            animation-play-state: paused;
        }

        .tarot-scroll-card.selected {
            transform: translateY(-12px) scale(1.1) !important;
            z-index: 100 !important;
            box-shadow: 0 16px 48px rgba(212, 175, 55, 0.4) !important;
        }

        .tarot-scroll-card.selected .tarot-card-face {
            border-color: #fff !important;
            box-shadow: 0 0 24px rgba(212, 175, 55, 0.8) !important;
        }

        /* 移动端优化 */
        @media (max-width: 768px) {
            .tarot-scroll-card {
                width: 90px !important;
                height: 135px !important;
                margin: 0 8px !important;
            }

            .tarot-scroll-wrapper {
                height: 180px !important;
            }

            @keyframes tarotScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 16px)); }
            }
        }

        @media (max-width: 480px) {
            .tarot-scroll-card {
                width: 70px !important;
                height: 105px !important;
                margin: 0 6px !important;
            }

            .tarot-scroll-wrapper {
                height: 140px !important;
            }

            @keyframes tarotScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 12px)); }
            }
        }
    `;
    document.head.appendChild(style);
}

// 处理塔罗牌选择
function handleTarotCardSelection(card, cardElement) {
    try {
        console.log(`选择塔罗牌: ${card.name}`);

        // 如果已选择3张，不允许再选择
        if (AppState.selectedCards.length >= 3) {
            console.log('已选择3张卡牌，无法继续选择');
            return;
        }

        // 如果这张卡已选择，不允许重复选择
        if (cardElement.classList.contains('selected')) {
            console.log('这张卡已经选择过了');
            return;
        }

        // 随机决定正位还是逆位（30%逆位，70%正位）
        const isReversed = Math.random() < 0.30;
        const orientation = isReversed ? 'reversed' : 'upright';

        console.log(`${card.name} - ${isReversed ? '逆位' : '正位'} (第${AppState.selectedCards.length + 1}张)`);

        // 添加选中状态
        cardElement.classList.add('selected');

        // 翻转卡牌显示正面
        flipTarotCard(cardElement, card, isReversed);

        // 添加到已选择列表
        AppState.selectedCards.push({
            ...card,
            isReversed: isReversed,
            orientation: orientation,
            element: cardElement
        });

        // 更新选择计数
        updateSelectedCountDisplay();

        // 如果选择了3张，自动开始解读
        if (AppState.selectedCards.length === 3) {
            console.log('已选择3张卡牌，3秒后自动开始解读...');
            setTimeout(() => {
                startSimpleInterpretation();
            }, 3000);
        }

    } catch (error) {
        console.error('处理塔罗牌选择失败:', error);
    }
}

// 翻转塔罗牌显示正面
function flipTarotCard(cardElement, card, isReversed) {
    try {
        console.log(`翻转卡牌: ${card.name}`);

        // 添加翻转动画
        cardElement.style.transition = 'transform 0.8s cubic-bezier(0.4, 0.1, 0.2, 1)';
        cardElement.style.transform = 'rotateY(180deg)';

        setTimeout(() => {
            cardElement.innerHTML = `
                <div class="tarot-card-face" style="
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #1a1a2e 0%, #2d1b3d 50%, #1a1a2e 100%);
                    border: 2px solid #d4af37;
                    border-radius: 12px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                    position: relative;
                    overflow: hidden;
                    transform: ${isReversed ? 'rotate(180deg)' : 'rotate(0deg)'};
                    transition: transform 0.8s ease;
                ">
                    <div style="
                        width: 80%;
                        height: 70%;
                        background: url('images/${card.file}') center/contain no-repeat;
                        border-radius: 8px;
                        margin-bottom: 8px;
                    "></div>
                    <div style="
                        background: rgba(0, 0, 0, 0.8);
                        color: #d4af37;
                        padding: 6px 12px;
                        border-radius: 6px;
                        font-size: 11px;
                        font-weight: bold;
                        text-align: center;
                        width: 90%;
                        transform: ${isReversed ? 'rotate(180deg)' : 'rotate(0deg)'};
                    ">${card.name}</div>
                </div>
            `;
        }, 400);

    } catch (error) {
        console.error('翻转塔罗牌失败:', error);
    }
}

// 更新选择计数显示
function updateSelectedCountDisplay() {
    try {
        const countElement = document.getElementById('selectedCount');
        if (countElement) {
            countElement.textContent = AppState.selectedCards.length;
        }

        // 显示或隐藏开始解读按钮
        const startBtn = document.getElementById('startInterpretation');
        if (startBtn) {
            if (AppState.selectedCards.length === 3) {
                startBtn.style.display = 'inline-block';
                startBtn.classList.remove('hidden');
            } else {
                startBtn.style.display = 'none';
            }
        }

    } catch (error) {
        console.error('更新选择计数失败:', error);
    }
}

// 开始简单解读
function startSimpleInterpretation() {
    try {
        console.log('开始塔罗牌解读...');

        // 隐藏卡牌抽取界面
        document.getElementById('cardDrawScreen').style.display = 'none';

        // 显示结果界面
        const resultScreen = document.getElementById('resultScreen');
        if (resultScreen) {
            resultScreen.style.display = 'block';
            resultScreen.classList.remove('hidden');
        }

        // 生成解读内容
        generateSimpleInterpretation();

    } catch (error) {
        console.error('开始解读失败:', error);
    }
}

// 生成简单解读
function generateSimpleInterpretation() {
    try {
        const questionNames = {
            love: '爱情占卜',
            career: '事业发展',
            relationship: '人际关系',
            growth: '个人成长',
            fortune: '日常运势'
        };

        const question = questionNames[AppState.selectedQuestionType] || '塔罗占卜';

        // 生成卡牌信息
        const cardDetails = AppState.selectedCards.map(card => {
            const orientation = card.isReversed ? '逆位' : '正位';
            const meaning = card.isReversed ? card.reversed : card.upright;
            return `${card.name}(${orientation})`;
        }).join('、');

        // 计算正逆位比例
        const reversedCount = AppState.selectedCards.filter(card => card.isReversed).length;
        const uprightCount = AppState.selectedCards.length - reversedCount;

        // 生成解读内容
        let interpretation = `
            <div style="text-align: center; padding: 20px;">
                <h2 style="color: #d4af37; margin-bottom: 20px;">${question}结果</h2>

                <div style="margin-bottom: 30px;">
                    <h3 style="color: #d4af37; margin-bottom: 15px;">你选择的卡牌：</h3>
                    <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 20px; flex-wrap: wrap;">
                        ${AppState.selectedCards.map(card => `
                            <div style="text-align: center;">
                                <div style="
                                    width: 80px;
                                    height: 120px;
                                    background: linear-gradient(135deg, #2d1b3d, #1a1a2e);
                                    border: 2px solid #d4af37;
                                    border-radius: 8px;
                                    margin: 0 auto 8px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    transform: ${card.isReversed ? 'rotate(180deg)' : 'rotate(0deg)'};
                                ">
                                    <div style="
                                        width: 60px;
                                        height: 80px;
                                        background: url('images/${card.file}') center/contain no-repeat;
                                        border-radius: 4px;
                                    "></div>
                                </div>
                                <div style="color: #d4af37; font-size: 12px; font-weight: bold;">${card.name}</div>
                                <div style="color: #999; font-size: 10px;">${card.isReversed ? '逆位' : '正位'}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div style="background: rgba(0, 0, 0, 0.3); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h3 style="color: #d4af37; margin-bottom: 15px;">占卜解读：</h3>
                    <p style="line-height: 1.6; color: #fff; margin-bottom: 15px;">
                        你抽取的卡牌是${cardDetails}。
                    </p>
                    <p style="line-height: 1.6; color: #fff; margin-bottom: 15px;">
                        ${reversedCount === 0 ? '所有卡牌都是正位，预示着事情将顺利发展，能量流动通畅。' :
                          reversedCount === AppState.selectedCards.length ? '所有卡牌都是逆位，暗示着需要特别注意内在的阻碍和挑战。' :
                          `正位(${uprightCount}张)和逆位(${reversedCount}张)的组合显示事情发展既有机遇也有挑战。`}
                    </p>
                    <p style="line-height: 1.6; color: #fff;">
                        ${generateSpecificInterpretation(question, reversedCount)}
                    </p>
                </div>

                <div style="margin-top: 30px;">
                    <button onclick="newSimpleReading()" style="
                        background: linear-gradient(135deg, #d4af37, #f4e4c1);
                        border: none;
                        border-radius: 8px;
                        padding: 12px 24px;
                        color: #1e1e2e;
                        font-weight: bold;
                        cursor: pointer;
                        margin: 0 10px;
                    ">新的占卜</button>

                    <button onclick="hideDivination()" style="
                        background: rgba(255, 255, 255, 0.1);
                        border: 1px solid #d4af37;
                        border-radius: 8px;
                        padding: 12px 24px;
                        color: #d4af37;
                        font-weight: bold;
                        cursor: pointer;
                        margin: 0 10px;
                    ">返回主页</button>
                </div>
            </div>
        `;

        const resultContainer = document.getElementById('interpretationContent');
        if (resultContainer) {
            resultContainer.innerHTML = interpretation;
        }

        // 显示问题标题
        const resultQuestion = document.getElementById('resultQuestion');
        if (resultQuestion) {
            resultQuestion.textContent = `你选择了${question}`;
        }

        console.log('解读生成完成');

    } catch (error) {
        console.error('生成解读失败:', error);
    }
}

// 生成特定解读
function generateSpecificInterpretation(question, reversedCount) {
    const interpretations = {
        love: {
            0: '这些正位卡牌显示你的感情关系充满正能量，爱情将顺利发展。建议保持开放的心态迎接美好，相信缘分的力量。',
            1: '这些逆位卡牌提醒你需要审视感情中的问题，可能存在沟通障碍。建议坦诚面对，用心倾听对方的需求。',
            2: '正位和逆位的组合显示感情既有美好机会也需要努力经营。关键在于平衡付出与接受，相信爱的力量。'
        },
        career: {
            0: '正位卡牌预示事业发展将一帆风顺，你的努力会得到认可。建议抓住机会，大胆展现自己的才能。',
            1: '逆位卡牌暗示职业道路可能遇到阻碍，需要重新规划方向。建议冷静分析，寻找新的突破口。',
            2: '事业发展既有机遇也有挑战，关键在于保持学习的态度和适应变化的能力。'
        },
        relationship: {
            0: '人际关系将进入和谐阶段，你的真诚会赢得他人的信任。建议保持开放沟通，建立更深的连接。',
            1: '需要反思人际交往中的模式，可能存在误解或冲突。建议主动沟通，化解矛盾。',
            2: '人际关系处于转型期，既需要维护现有关系，也要勇敢拓展新的社交圈。'
        },
        growth: {
            0: '个人成长迎来黄金期，你的潜能将得到充分发挥。建议保持好奇心，勇敢尝试新事物。',
            1: '需要深入内心探索，发现阻碍成长的模式。建议保持耐心，相信内在智慧的力量。',
            2: '成长之路既有突破也有挑战，关键是保持学习的热情和对未知的开放态度。'
        },
        fortune: {
            0: '运势正处于上升期，各方面都会有好消息。建议保持积极心态，把握好运。',
            1: '运势提醒你需要更加谨慎，避免冲动决定。建议放慢节奏，积蓄能量。',
            2: '运势整体平衡，既有好运也需要努力。关键在于保持平和的心态和积极行动。'
        }
    };

    const key = Math.min(reversedCount, 2);
    return interpretations[question]?.[key] || '塔罗牌指引着你的前行之路，相信内在的智慧，勇敢面对未来的挑战与机遇。';
}

// 新的占卜
function newSimpleReading() {
    try {
        console.log('开始新的占卜...');

        // 重置状态
        AppState.selectedCards = [];
        AppState.selectedQuestionType = '';

        // 返回问题类型选择界面
        document.getElementById('resultScreen').style.display = 'none';
        document.getElementById('cardDrawScreen').style.display = 'none';
        document.getElementById('questionTypeScreen').style.display = 'block';

        // 重置选择计数
        updateSelectedCountDisplay();

    } catch (error) {
        console.error('新的占卜失败:', error);
    }
}

// 隐藏占卜界面
function hideDivination() {
    try {
        console.log('隐藏占卜界面');
        const container = document.getElementById('divinationContainer');
        if (container) {
            container.style.display = 'none';
        }

        // 隐藏所有占卜界面
        document.querySelectorAll('.divination-screen').forEach(screen => {
            screen.style.display = 'none';
        });

        // 重置状态
        AppState.selectedCards = [];
        AppState.selectedQuestionType = '';

        console.log('占卜界面已隐藏');
    } catch (error) {
        console.error('隐藏占卜界面失败:', error);
    }
}

// 开始占卜
function startDivination() {
    console.log('开始占卜...');
    try {
        AppState.isDivinationMode = true;
        AppState.selectedCards = [];
        AppState.selectedQuestionType = '';

        console.log('停止主页面动画...');
        // 停止主页面的卡牌动画
        stopMainPageAnimation();

        console.log('显示占卜界面...');
        const container = document.getElementById('divinationContainer');
        if (container) {
            container.classList.add('active');
            console.log('占卜容器已激活');
        } else {
            console.error('找不到占卜容器');
            return;
        }

        console.log('切换到问题类型选择界面...');
        showScreen('questionTypeScreen');

    } catch (error) {
        console.error('开始占卜失败:', error);
    }
}

// 显示指定界面
function showScreen(screenId) {
    console.log(`切换到界面: ${screenId}`);
    try {
        const screens = document.querySelectorAll('.divination-screen');
        console.log(`找到 ${screens.length} 个占卜界面`);

        // 隐藏所有界面
        screens.forEach(screen => {
            screen.classList.add('hidden');
        });

        // 显示目标界面
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.remove('hidden');
            console.log(`成功显示界面: ${screenId}`);
        } else {
            console.error(`找不到目标界面: ${screenId}`);
        }
    } catch (error) {
        console.error(`显示界面失败 (${screenId}):`, error);
    }
}

// 选择问题类型
function selectQuestionType(event) {
    console.log('选择问题类型...');
    try {
        const typeElement = event.currentTarget;
        const type = typeElement.getAttribute('data-type');

        console.log(`选择的问题类型: ${type}`);

        // 移除之前的选中状态
        document.querySelectorAll('.question-type').forEach(t => {
            t.classList.remove('selected');
        });

        // 添加选中状态
        typeElement.classList.add('selected');
        AppState.selectedQuestionType = type;

        console.log(`已选择问题类型: ${type}，准备进入卡牌抽取界面...`);

        // 延迟后进入卡牌抽取界面
        setTimeout(() => {
            console.log('开始准备卡牌抽取...');
            prepareCardDraw();
            showScreen('cardDrawScreen');
        }, 500);

    } catch (error) {
        console.error('选择问题类型失败:', error);
    }
}

// 准备卡牌抽取
function prepareCardDraw() {
    try {
        console.log('开始准备卡牌抽取界面...');

        // 重置抽取状态
        AppState.selectedCards = [];
        updateSelectedCount();

        // 使用全部22张塔罗牌，确保不重复
        AppState.availableCardsForDivination = shuffleArray([...tarotCards]);

        console.log(`准备${AppState.availableCardsForDivination.length}张不重复的塔罗牌供抽取`, AppState.availableCardsForDivination);

        // 确保容器存在
        const container = document.getElementById('cardFanContainer');
        if (!container) {
            console.error('cardFanContainer容器不存在');
            return;
        }

        // 显示横向滚动的卡牌
        createScrollCards();

        // 更新问题提示
        updateQuestionPrompt();

        console.log('卡牌抽取界面准备完成');

    } catch (error) {
        console.error('准备卡牌抽取失败:', error);
    }
}

// 更新问题提示
function updateQuestionPrompt() {
    const promptElement = document.getElementById('drawInstruction');
    const prompts = {
        love: '请为你的爱情问题选择3张有缘的指引卡牌',
        career: '请为你的事业发展选择3张有缘的指引卡牌',
        relationship: '请为你的人际关系选择3张有缘的指引卡牌',
        growth: '请为你的个人成长选择3张有缘的指引卡牌',
        fortune: '请为你的日常运势选择3张有缘的指引卡牌'
    };

    promptElement.textContent = prompts[AppState.selectedQuestionType] || '请选择3张有缘的指引卡牌';
}

// 创建无缝循环滚动的卡牌
function createScrollCards() {
    try {
        const container = document.getElementById('cardFanContainer');
        if (!container) {
            console.error('找不到cardFanContainer容器');
            return;
        }

        container.innerHTML = '';

        const cards = AppState.availableCardsForDivination;
        console.log(`创建无缝循环滚动卡牌: ${cards.length}张`, cards);

        if (!cards || cards.length === 0) {
            console.error('没有可用的卡牌数据');
            return;
        }

        // 创建滚动容器
        const scrollWrapper = document.createElement('div');
        scrollWrapper.className = 'scroll-wrapper';

        // 创建卡牌轨道 - 复制两份实现无缝循环
        const track = document.createElement('div');
        track.className = 'card-track';

        // 第一组卡牌
        cards.forEach((card, index) => {
            console.log(`创建第一组卡牌 ${index}:`, card.name);
            const cardElement = createScrollCard(card, index);
            track.appendChild(cardElement);
        });

        // 第二组卡牌（用于无缝循环）
        cards.forEach((card, index) => {
            console.log(`创建第二组卡牌 ${index}:`, card.name);
            const cardElement = createScrollCard(card, index + cards.length);
            track.appendChild(cardElement);
        });

        scrollWrapper.appendChild(track);
        container.appendChild(scrollWrapper);

        console.log(`创建了${cards.length * 2}张无缝循环滚动卡牌`);

        // 强制触发重排以确保动画开始
        setTimeout(() => {
            const trackElement = container.querySelector('.card-track');
            if (trackElement) {
                trackElement.style.animation = 'autoScroll 30s linear infinite';
            }
        }, 100);

    } catch (error) {
        console.error('创建滚动卡牌失败:', error);
    }
}

// 创建单个滚动卡牌元素
function createScrollCard(card, index) {
    try {
        console.log(`创建滚动卡牌: ${card.name} (索引: ${index})`);

        const cardElement = document.createElement('div');
        cardElement.className = 'scroll-card';
        cardElement.setAttribute('data-card-id', card.id);

        // 使用AppState中的卡牌数组长度计算索引
        const cardsLength = AppState.availableCardsForDivination.length;
        const originalIndex = index % cardsLength;

        cardElement.setAttribute('data-index', originalIndex);
        cardElement.setAttribute('data-original-index', originalIndex);

        // 创建卡牌内容（只显示卡背）
        cardElement.innerHTML = `
            <div class="card-face card-back">
                <img src="images/塔罗牌背面.png" alt="塔罗牌背面" loading="eager">
            </div>
        `;

        // 添加点击事件
        cardElement.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log(`点击滚动卡牌: ${card.name}`);
            selectScrollCard(cardElement, card, originalIndex);
        });

        // 卡牌已默认显示，无需额外的opacity动画

        return cardElement;
    } catch (error) {
        console.error(`创建滚动卡牌失败 (${card.name}):`, error);
        return document.createElement('div'); // 返回空元素避免崩溃
    }
}

// 选择滚动卡牌
function selectScrollCard(cardElement, cardData, originalIndex) {
    if (cardElement.classList.contains('selected')) return;

    // 限制最多选择3张卡牌
    if (AppState.selectedCards.length >= 3) return;

    // 随机决定正位还是逆位（30%逆位，70%正位）
    const isReversed = Math.random() < 0.30;
    const orientation = isReversed ? 'reversed' : 'upright';

    console.log(`选择卡牌: ${cardData.name} - ${isReversed ? '逆位' : '正位'} (第${AppState.selectedCards.length + 1}张)`);

    // 从可用卡牌中移除已选择的卡牌，确保不重复
    const cardIndex = AppState.availableCardsForDivination.findIndex(card => card.id === cardData.id);
    if (cardIndex > -1) {
        AppState.availableCardsForDivination.splice(cardIndex, 1);
    }

    // 暂停滚动动画
    const track = cardElement.closest('.card-track');
    if (track) {
        track.style.animationPlayState = 'paused';
    }

    // 添加选中效果
    cardElement.classList.add('selected');
    if (isReversed) {
        cardElement.classList.add('reversed');
    }

    // 立即替换卡背为卡牌正面，不显示正位逆位标注
    const transformStyle = isReversed ? 'transform: rotate(180deg);' : '';
    cardElement.innerHTML = `
        <div class="card-face" style="${transformStyle}">
            <img src="images/${cardData.file}" alt="${cardData.name}" loading="eager">
        </div>
    `;

    // 添加到已选卡牌，包含正位逆位信息
    AppState.selectedCards.push({
        ...cardData,
        orientation: orientation,
        isReversed: isReversed,
        element: cardElement,
        originalIndex: originalIndex
    });

    // 更新计数
    updateSelectedCount();

    // 如果选择了3张卡牌，禁用其他卡牌并准备自动解读
    if (AppState.selectedCards.length === 3) {
        disableRemainingCards();

        // 2秒后自动开始解读
        setTimeout(() => {
            startInterpretation();
        }, 2000);
    } else {
        // 如果选择了1-2张卡牌，显示手动解读按钮
        document.getElementById('startInterpretation').classList.remove('hidden');

        // 部分禁用其他卡牌（但保持一些可选性）
        document.querySelectorAll('.scroll-card:not(.selected)').forEach(card => {
            card.style.opacity = '0.6';
        });
    }
}

// 禁用剩余卡牌
function disableRemainingCards() {
    document.querySelectorAll('.scroll-card:not(.selected)').forEach(card => {
        card.style.opacity = '0.4';
        card.style.pointerEvents = 'none';
    });

    // 暂停所有滚动动画
    document.querySelectorAll('.card-track').forEach(track => {
        track.style.animationPlayState = 'paused';
    });
}

// 更新已选择卡牌数量
function updateSelectedCount() {
    document.getElementById('selectedCount').textContent = AppState.selectedCards.length;
}

// 开始解读
function startInterpretation() {
    if (AppState.selectedCards.length !== 3) return;

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

    // 生成卡牌详细信息
    const cardDetails = AppState.selectedCards.map(card => {
        const orientation = card.isReversed ? '逆位' : '正位';
        const meaning = card.isReversed ? card.reversed : card.upright;
        return `${card.name}(${orientation})`;
    }).join('、');

    const baseInterpretation = `你抽取的卡牌是${cardDetails}。`;

    // 分析正位逆位组合
    const reversedCount = AppState.selectedCards.filter(card => card.isReversed).length;
    const uprightCount = AppState.selectedCards.length - reversedCount;

    let orientationAnalysis = '';
    if (reversedCount === 0) {
        orientationAnalysis = '所有卡牌都是正位，预示着事情将顺利发展，能量流动通畅。';
    } else if (reversedCount === AppState.selectedCards.length) {
        orientationAnalysis = '所有卡牌都是逆位，暗示着需要特别注意内在的阻碍和挑战，建议深入反思。';
    } else {
        orientationAnalysis = `正位(${uprightCount}张)和逆位(${reversedCount}张)的组合显示事情发展既有机遇也有挑战，需要平衡处理。`;
    }

    // 根据不同问题类型和正位逆位组合生成深度解读
    const generateSpecificInterpretation = () => {
        const interpretations = {
            love: {
                upright: '这些正位卡牌显示你的感情关系充满正能量，爱情将顺利发展，建议保持开放的心态迎接美好。' + orientationAnalysis,
                reversed: '这些逆位卡牌提醒你需要审视感情中的问题，可能存在沟通障碍或内在阻碍，需要坦诚面对。' + orientationAnalysis,
                mixed: '卡牌的正逆位组合显示你的感情生活既有美好机遇也有需要挑战的方面，关键在于平衡和沟通。' + orientationAnalysis
            },
            career: {
                upright: '正位卡牌预示事业发展前景光明，你的努力将得到回报，建议继续保持积极态度和专注。' + orientationAnalysis,
                reversed: '逆位卡牌提醒事业发展可能遇到阻碍，需要重新评估方向，保持耐心和灵活性。' + orientationAnalysis,
                mixed: '事业发展的正逆位组合显示既有成功机会也有挑战需要克服，建议既要抓住机遇也要谨慎应对。' + orientationAnalysis
            },
            relationship: {
                upright: '正位卡牌显示人际关系和谐发展，你与他人的关系将更加融洽，建议继续保持真诚和善意。' + orientationAnalysis,
                reversed: '逆位卡牌提醒人际关系中可能存在误解或冲突，需要主动沟通和化解矛盾。' + orientationAnalysis,
                mixed: '人际关系的正逆位组合显示既有和谐的时刻也有需要处理的挑战，关键在于理解和包容。' + orientationAnalysis
            },
            growth: {
                upright: '正位卡牌显示个人成长道路清晰，内在智慧正在觉醒，建议相信自己的直觉和力量。' + orientationAnalysis,
                reversed: '逆位卡牌提醒成长过程中可能遇到内在阻碍，需要勇敢面对恐惧和不确定性。' + orientationAnalysis,
                mixed: '个人成长的正逆位组合显示既有突破的机会也有需要克服的挑战，建议保持平衡和耐心。' + orientationAnalysis
            },
            fortune: {
                upright: '正位卡牌预示近期运势良好，幸运将眷顾你，建议抓住机遇积极行动。' + orientationAnalysis,
                reversed: '逆位卡牌提醒运势可能有起伏，需要保持谨慎和耐心，避免冲动决定。' + orientationAnalysis,
                mixed: '运势的正逆位组合显示机遇与挑战并存，建议既要把握好运时机也要做好应对准备。' + orientationAnalysis
            }
        };

        const key = reversedCount === 0 ? 'upright' :
                   reversedCount === AppState.selectedCards.length ? 'reversed' : 'mixed';

        return interpretations[AppState.selectedQuestionType]?.[key] || baseInterpretation + orientationAnalysis;
    };

    // 生成具体的卡牌解读
    const generateCardInterpretations = () => {
        return AppState.selectedCards.map((card, index) => {
            const position = index === 0 ? '第一张牌(现状)' :
                           index === 1 ? '第二张牌(挑战)' : '第三张牌(未来)';
            const orientation = card.isReversed ? '逆位' : '正位';
            const meaning = card.isReversed ? card.reversed : card.upright;
            return `${position}：${card.name}(${orientation}) - ${meaning}`;
        }).join('；');
    };

    // 计算爱情指数（0-100分）
    const calculateLoveIndex = () => {
        let score = 50; // 基础分数

        AppState.selectedCards.forEach((card, index) => {
            // 不同卡牌的爱情权重
            const loveWeights = {
                0: 65,  // 愚人
                1: 70,  // 魔术师
                2: 75,  // 女祭司
                3: 90,  // 皇后
                4: 60,  // 皇帝
                5: 55,  // 教皇
                6: 95,  // 恋人
                7: 70,  // 战车
                8: 80,  // 力量
                9: 45,  // 隐士
                10: 60, // 命运之轮
                11: 75, // 正义
                12: 40, // 倒吊人
                13: 35, // 死神
                14: 85, // 节制
                15: 30, // 恶魔
                16: 25, // 高塔
                17: 88, // 星星
                18: 50, // 月亮
                19: 92, // 太阳
                20: 70, // 审判
                21: 85  // 世界
            };

            const cardScore = loveWeights[card.id] || 50;

            // 正位加分，逆位减分
            if (!card.isReversed) {
                score += (cardScore - 50) * 0.4; // 正位40%权重
            } else {
                score -= (cardScore - 50) * 0.6; // 逆位60%权重
            }

            // 位置权重：现状30%，挑战40%，未来30%
            const positionWeight = index === 0 ? 0.3 : index === 1 ? 0.4 : 0.3;
            score += (cardScore - 50) * positionWeight * 0.3;
        });

        return Math.max(0, Math.min(100, Math.round(score)));
    };

    // 计算情绪指数（-100到+100，负数为负面情绪）
    const calculateEmotionIndex = () => {
        let emotionScore = 0;

        AppState.selectedCards.forEach((card, index) => {
            // 情绪评分（-100到+100）
            const emotionScores = {
                0: { upright: 85, reversed: -45 },  // 愚人
                1: { upright: 75, reversed: -55 },  // 魔术师
                2: { upright: 60, reversed: -65 },  // 女祭司
                3: { upright: 90, reversed: -20 },  // 皇后
                4: { upright: 70, reversed: -50 },  // 皇帝
                5: { upright: 55, reversed: -60 },  // 教皇
                6: { upright: 95, reversed: -70 },  // 恋人
                7: { upright: 80, reversed: -40 },  // 战车
                8: { upright: 85, reversed: -55 },  // 力量
                9: { upright: 30, reversed: -80 },  // 隐士
                10: { upright: 50, reversed: -75 }, // 命运之轮
                11: { upright: 65, reversed: -65 }, // 正义
                12: { upright: 20, reversed: -85 }, // 倒吊人
                13: { upright: -10, reversed: -90 }, // 死神
                14: { upright: 75, reversed: -50 }, // 节制
                15: { upright: -20, reversed: -95 }, // 恶魔
                16: { upright: -30, reversed: -98 }, // 高塔
                17: { upright: 88, reversed: -35 }, // 星星
                18: { upright: 25, reversed: -75 }, // 月亮
                19: { upright: 95, reversed: -25 }, // 太阳
                20: { upright: 70, reversed: -45 }, // 审判
                21: { upright: 92, reversed: -15 }  // 世界
            };

            const cardEmotion = emotionScores[card.id] || { upright: 50, reversed: -50 };
            const score = card.isReversed ? cardEmotion.reversed : cardEmotion.upright;

            // 位置权重
            const positionWeight = index === 0 ? 0.25 : index === 1 ? 0.45 : 0.3;
            emotionScore += score * positionWeight;
        });

        return Math.round(emotionScore);
    };

    // 生成个性化解读
    const generatePersonalizedInterpretation = () => {
        const loveIndex = calculateLoveIndex();
        const emotionIndex = calculateEmotionIndex();

        // 爱情指数分析
        let loveAnalysis = '';
        if (loveIndex >= 80) {
            loveAnalysis = '你的爱情指数极高（' + loveIndex + '分），预示着感情关系将迎来黄金时期。';
        } else if (loveIndex >= 60) {
            loveAnalysis = '你的爱情指数良好（' + loveIndex + '分），感情基础稳固，有机会进一步发展。';
        } else if (loveIndex >= 40) {
            loveAnalysis = '你的爱情指数中等（' + loveIndex + '分），需要更多的沟通和理解来改善关系。';
        } else {
            loveAnalysis = '你的爱情指数较低（' + loveIndex + '分），建议重新审视感情中的问题，可能需要做出改变。';
        }

        // 情绪指数分析
        let emotionAnalysis = '';
        if (emotionIndex >= 60) {
            emotionAnalysis = '你的情绪状态非常积极（+' + emotionIndex + '），内心充满正能量和希望。';
        } else if (emotionIndex >= 20) {
            emotionAnalysis = '你的情绪状态偏向积极（+' + emotionIndex + '），虽然有些小波动但整体良好。';
        } else if (emotionIndex >= -20) {
            emotionAnalysis = '你的情绪状态相对中性（' + emotionIndex + '），需要在积极和消极之间找到平衡。';
        } else if (emotionIndex >= -60) {
            emotionAnalysis = '你的情绪状态偏消极（' + emotionIndex + '），建议多关注自己的内心需求。';
        } else {
            emotionAnalysis = '你的情绪状态较为消极（' + emotionIndex + '），需要特别注意心理健康和情绪调节。';
        }

        return {
            loveIndex: loveIndex,
            emotionIndex: emotionIndex,
            loveAnalysis: loveAnalysis,
            emotionAnalysis: emotionAnalysis
        };
    };

    const personalized = generatePersonalizedInterpretation();

    return {
        question: questionNames[AppState.selectedQuestionType],
        cards: AppState.selectedCards,
        interpretation: `${baseInterpretation}${generateSpecificInterpretation()}`,
        cardDetails: generateCardInterpretations(),
        loveIndex: personalized.loveIndex,
        emotionIndex: personalized.emotionIndex,
        loveAnalysis: personalized.loveAnalysis,
        emotionAnalysis: personalized.emotionAnalysis,
        guidance: `塔罗牌的指引在于提醒我们内在的智慧和选择的力量。${reversedCount > 0 ? '逆位卡牌特别提醒我们要注意内在的阻碍和需要改变的地方。' : '正位卡牌鼓励我们保持积极的态度继续前行。'}记住，你的选择和行动将最终决定命运的走向。`
    };
}

// 显示结果界面
function showResultScreen(interpretation) {
    // 设置问题标题
    document.getElementById('resultQuestion').textContent = interpretation.question;

    // 显示抽取的卡牌
    const resultCardsContainer = document.getElementById('resultCards');
    resultCardsContainer.innerHTML = '';

    interpretation.cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'result-card';
        cardElement.innerHTML = `
            <img src="images/${card.file}" alt="${card.name}" style="${card.isReversed ? 'transform: rotate(180deg);' : ''}">
            <h4>${card.name}</h4>
            <div class="english-name">${card.english}</div>
            <div class="orientation">${card.isReversed ? '逆位' : '正位'}</div>
            <div class="meaning">${card.isReversed ? card.reversed : card.upright}</div>
        `;
        resultCardsContainer.appendChild(cardElement);

        // 添加动画延迟
        setTimeout(() => {
            cardElement.style.opacity = '1';
            cardElement.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // 显示指数分析
    const indicesHtml = `
        <div class="indices-analysis">
            <div class="index-card">
                <h4>💕 爱情指数</h4>
                <div class="index-score">${interpretation.loveIndex}分</div>
                <div class="index-bar">
                    <div class="index-fill" style="width: ${interpretation.loveIndex}%"></div>
                </div>
                <p>${interpretation.loveAnalysis}</p>
            </div>
            <div class="index-card">
                <h4>😊 情绪指数</h4>
                <div class="index-score">${interpretation.emotionIndex > 0 ? '+' : ''}${interpretation.emotionIndex}</div>
                <div class="index-bar">
                    <div class="index-fill ${interpretation.emotionIndex < 0 ? 'negative' : 'positive'}" style="width: ${Math.abs(interpretation.emotionIndex)}%"></div>
                </div>
                <p>${interpretation.emotionAnalysis}</p>
            </div>
        </div>
    `;

    // 显示解读内容
    const interpretationContent = document.getElementById('interpretationContent');
    interpretationContent.innerHTML = `
        <h3>塔罗指引</h3>
        ${indicesHtml}
        <div class="interpretation-text">${interpretation.interpretation}</div>
        <div class="card-details">${interpretation.cardDetails}</div>
        <div class="guidance">${interpretation.guidance}</div>
    `;

    // 切换到结果界面
    showScreen('resultScreen');
}

// 新的占卜
function newReading() {
    // 清理之前的资源
    cleanupEventListeners();

    // 重置状态
    AppState.selectedCards = [];
    AppState.selectedQuestionType = '';

    // 清理超时
    if (AppState.scrollTimeout) {
        clearTimeout(AppState.scrollTimeout);
        AppState.scrollTimeout = null;
    }

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
    AppState.selectedCards = [];
    showScreen('questionTypeScreen');
}

// 返回主页面
function backToMain() {
    AppState.isDivinationMode = false;
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