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

// 添加窗口大小变化监听器
window.addEventListener('resize', function() {
    if (document.getElementById('cardFanContainer').style.display !== 'none') {
        applyDynamicCardStyles();
        console.log('📱 窗口大小变化，重新应用卡牌尺寸');
    }
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面DOM加载完成，开始初始化...');

    // 基础初始化
    initializeTarotCards();
    addAutoRotate();

    // 立即开始图片预加载优化
    initializeImageOptimization();

    // 延迟初始化占卜系统，确保所有元素都准备好
    setTimeout(() => {
        console.log('延迟初始化占卜系统...');
        initializeDivination();
        setupLazyLoading(); // 启用图片懒加载优化

        // 初始化智能卡牌尺寸系统
        window.smartCardSizer = new SmartCardSizer();

        // 检查动画系统初始化状态
        setTimeout(() => {
            console.log('🎯 检查动画系统初始化状态...');
            const cards = document.querySelectorAll('.card');
            console.log(`✓ 找到 ${cards.length} 张卡牌`);

            cards.forEach((card, index) => {
                const style = window.getComputedStyle(card);
                const animationName = style.animationName;
                const animationDuration = style.animationDuration;
                console.log(`✓ 卡牌 ${index}: ${animationName} (${animationDuration})`);
            });

            console.log('✨ 动画系统初始化完成，卡牌应该开始旋转');
        }, 1000);
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

    // 添加卡牌动画状态监控函数
    window.monitorCardAnimation = function() {
        console.log('🔍 开始监控卡牌动画状态...');

        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            // 获取计算样式
            const computedStyle = window.getComputedStyle(card);
            const transform = computedStyle.transform;
            const animation = computedStyle.animation;

            console.log(`🔍 卡牌 ${index} 状态:`);
            console.log(`  - 动画: ${animation}`);
            console.log(`  - 变换: ${transform}`);

            // 检查动画事件监听器
            const hasListener = card.onanimationiteration !== null;
            console.log(`  - 有动画迭代监听器: ${hasListener}`);
        });

        console.log('🔍 AppState状态:');
        console.log(`  - 当前卡牌组索引: ${AppState.currentSetIndex}`);
        console.log(`  - 卡牌组总数: ${AppState.cardSets.length}`);
        console.log(`  - 显示的卡牌: ${AppState.displayedCards.map(c => c.name).join(', ')}`);
    };

    // 手动触发卡牌切换测试
    window.testCardSwitch = function() {
        console.log('🧪 手动测试卡牌切换...');
        switchToNextCardSet();
    };

    console.log('基础初始化完成，占卜系统将在200ms后初始化');
});

// 全局变量
// 全局状态管理
const AppState = {
    displayedCards: [],
    currentRound: 1,
    CARDS_PER_ROUND: 3,
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

// 智能卡牌尺寸适配系统
class SmartCardSizer {
    constructor() {
        this.isMobile = window.innerWidth <= 768;
        this.viewportWidth = window.innerWidth;
        this.viewportHeight = window.innerHeight;
        this.init();
    }

    init() {
        this.setupResponsiveCards();
        this.bindResizeEvent();
        console.log('智能卡牌尺寸系统已初始化');
    }

    // 计算最佳卡牌尺寸
    calculateOptimalCardSize() {
        const vw = this.viewportWidth;
        const vh = this.viewportHeight;
        const isLandscape = vw > vh;

        if (this.isMobile) {
            if (isLandscape) {
                // 横屏模式 - 基于高度计算
                return {
                    width: Math.min(vh * 0.35, vw * 0.25),
                    height: Math.min(vh * 0.5, vw * 0.375),
                    fontSize: Math.max(vw * 0.025, 14)
                };
            } else {
                // 竖屏模式 - 基于宽度计算
                return {
                    width: Math.min(vw * 0.32, 180),
                    height: Math.min(vw * 0.48, 270),
                    fontSize: Math.max(vw * 0.035, 14)
                };
            }
        } else {
            // 桌面端保持现有尺寸
            return {
                width: Math.min(vw * 0.18, 280),
                height: Math.min(vw * 0.27, 420),
                fontSize: Math.max(vw * 0.012, 16)
            };
        }
    }

    // 应用动态卡牌尺寸
    setupResponsiveCards() {
        const cardSize = this.calculateOptimalCardSize();
        const cards = document.querySelectorAll('.card');
        const resultCards = document.querySelectorAll('.result-card');
        const scrollCards = document.querySelectorAll('.scroll-card');

        // 首页卡牌
        cards.forEach(card => {
            if (this.isMobile) {
                card.style.width = `${cardSize.width}px`;
                card.style.height = `${cardSize.height}px`;
                card.style.minWidth = `${cardSize.width * 0.9}px`;
                card.style.minHeight = `${cardSize.height * 0.9}px`;
            }
        });

        // 结果页面卡牌
        resultCards.forEach(card => {
            if (this.isMobile) {
                const cardImg = card.querySelector('img');
                if (cardImg) {
                    cardImg.style.width = `${cardSize.width * 0.75}px`;
                    cardImg.style.height = `${cardSize.height * 0.75}px`;
                }

                // 调整字体大小
                const title = card.querySelector('h4');
                const subtitle = card.querySelector('.english-name');
                const meaning = card.querySelector('.meaning');

                if (title) title.style.fontSize = `${cardSize.fontSize}px`;
                if (subtitle) subtitle.style.fontSize = `${cardSize.fontSize * 0.8}px`;
                if (meaning) meaning.style.fontSize = `${cardSize.fontSize * 0.75}px`;
            }
        });

        // 滚动卡牌
        scrollCards.forEach(card => {
            if (this.isMobile) {
                card.style.width = `${cardSize.width * 0.85}px`;
                card.style.height = `${cardSize.height * 0.85}px`;
            }
        });

        console.log('应用智能卡牌尺寸:', cardSize);
    }

    // 绑定窗口大小变化事件
    bindResizeEvent() {
        const debouncedResize = debounce(() => {
            this.viewportWidth = window.innerWidth;
            this.viewportHeight = window.innerHeight;
            this.isMobile = this.viewportWidth <= 768;
            this.setupResponsiveCards();
        }, 250);

        window.addEventListener('resize', debouncedResize);
        window.addEventListener('orientationchange', debouncedResize);
    }
}

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

        // 生成初始的4套随机卡牌 - 使用AppState管理（每套3张）
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

// 简洁的卡牌初始化，让CSS动画自然运行
function initializeCardState(cardElement) {
    // 只设置必要的3D属性
    cardElement.style.webkitBackfaceVisibility = 'hidden';
    cardElement.style.backfaceVisibility = 'hidden';
    cardElement.style.mozBackfaceVisibility = 'hidden';
    cardElement.style.webkitTransformStyle = 'preserve-3d';
    cardElement.style.transformStyle = 'preserve-3d';
    cardElement.style.mozTransformStyle = 'preserve-3d';

    // 清理任何状态类
    cardElement.classList.remove('switching');

    // 让CSS动画自然运行，不进行任何干预
    console.log('卡牌初始化完成，动画将自然循环运行');
}

// 显示指定的卡牌集合
function displayCardSet(cardSet) {
    const cardsGrid = document.getElementById('cardsGrid');
    cardsGrid.innerHTML = '';

    cardSet.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.setAttribute('data-card-id', card.id);
        // 设置不同的动画延迟，让卡牌错开旋转
        cardElement.style.animationDelay = `${index * 0.4}s`;

        // 安全初始化卡牌状态
        initializeCardState(cardElement);

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

    // 如果可用卡片不足3张，重置记忆
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

    // 选择前3张
    for (let i = 0; i < AppState.CARDS_PER_ROUND; i++) {
        selectedCards.push(shuffled[i]);
        AppState.displayedCards.push(shuffled[i].id);
    }

    console.log(`生成随机组合${AppState.currentRound}: 已选择${selectedCards.length}张卡牌`);
    AppState.currentRound++;

    return selectedCards;
}


// 添加自动旋转效果
function addAutoRotate() {
    // 4秒后（第一次到背面位置）开始更换，然后每8秒更换一次
    // 增加小延时确保动画完全到达背面位置
    setTimeout(() => {
        switchToNextCardSet();
        // 使用8秒间隔，与CSS动画周期完全同步
        setInterval(() => {
            // 在动画运行到一半时（4秒）开始切换，确保卡牌在背面位置
            setTimeout(switchToNextCardSet, 4000);
        }, 8000);
    }, 4100); // 稍微延迟确保第一次也在背面位置
}

// 切换到下一套卡牌（使用CSS动画事件驱动）
function switchToNextCardSet() {
    try {
        console.log('准备切换卡牌组，等待CSS动画事件...');

        // 切换到下一套卡牌 - 使用AppState管理
        AppState.currentSetIndex = (AppState.currentSetIndex + 1) % AppState.cardSets.length;

        // 使用CSS动画事件监听器来确保精确同步
        const cards = document.querySelectorAll('.card');
        let switchedCount = 0;
        const totalCards = cards.length;

        cards.forEach((card, index) => {
            // 添加标志防止同一周期内多次切换
            if (!card.switchData) {
                card.switchData = {
                    lastSwitchTime: 0,
                    switchedInCurrentCycle: false
                };
            }

            // 为每个卡牌添加动画事件监听器
            const handleAnimationIteration = (event) => {
                console.log(`卡牌 ${index} 动画事件触发: elapsedTime=${event.elapsedTime}s`);

                // 检查是否是侧面位置（用户看不到内容的时候）
                // elapsedTime是动画开始后的总时间，8秒一个周期
                const currentCycleTime = event.elapsedTime % 8;
                // 在2秒（90度）或6秒（270度）左右切换，这些时候用户看不到任何面
                if ((currentCycleTime >= 1.8 && currentCycleTime <= 2.2) ||
                    (currentCycleTime >= 5.8 && currentCycleTime <= 6.2)) {

                    // 检查是否已经在当前周期切换过了
                    const currentCycle = Math.floor(event.elapsedTime / 8);
                    if (card.switchData.lastSwitchCycle === currentCycle) {
                        console.log(`⚠️ 卡牌 ${index} 在当前周期已切换过，跳过`);
                        return;
                    }

                    console.log(`✓ 卡牌 ${index} 到达侧面位置（${currentCycleTime.toFixed(2)}s），进行切换`);

                    // 立即切换这张卡牌的图片
                    const newCards = AppState.cardSets[AppState.currentSetIndex];
                    if (newCards && newCards[index]) {
                        updateSingleCard(card, newCards[index]);
                        // 记录切换的周期
                        card.switchData.lastSwitchCycle = currentCycle;
                    }

                    switchedCount++;

                    // 移除事件监听器，避免重复触发
                    card.removeEventListener('animationiteration', handleAnimationIteration);

                    // 所有卡牌切换完成
                    if (switchedCount === totalCards) {
                        console.log('✓ 所有卡牌已完成同步切换');
                        // 预生成更多卡牌组
                        if (AppState.cardSets.length < 10) {
                            AppState.cardSets.push(getRandomCardsForRound());
                            console.log(`✓ 生成新的随机组合，当前共${AppState.cardSets.length}组`);
                        }
                    }
                }
            };

            // 添加动画迭代事件监听器
            card.addEventListener('animationiteration', handleAnimationIteration);
            console.log(`✓ 已为卡牌 ${index} 添加动画事件监听器`);
        });

        console.log(`等待动画事件触发切换到第${AppState.currentSetIndex + 1}组卡牌`);

    } catch (error) {
        console.error('切换卡牌集失败:', error);
        // 降级方案：使用定时器
        fallbackCardSwitch();
    }
}

// 更新单张卡牌图片（用于精确切换）
function updateSingleCard(cardElement, newCard) {
    try {
        const frontImg = cardElement.querySelector('.card-front img');
        if (frontImg && newCard) {
            const newSrc = `images/${newCard.file}`;
            if (frontImg.src !== newSrc) {
                // 强制刷新，避免缓存问题
                frontImg.src = newSrc + '?t=' + Date.now();
                console.log(`单张卡牌已切换到: ${newCard.name}`);
            }
        }
    } catch (error) {
        console.error('更新单张卡牌失败:', error);
    }
}

// 降级方案：使用定时器切换
function fallbackCardSwitch() {
    console.log('⚠️ 使用降级方案进行卡牌切换...');
    const cards = document.querySelectorAll('.card');
    const newCards = AppState.cardSets[AppState.currentSetIndex];

    if (!newCards || newCards.length === 0) {
        console.error('⚠️ 降级方案失败：没有可用的卡牌组');
        return;
    }

    cards.forEach((card, index) => {
        if (newCards[index]) {
            // 计算延迟时间，在侧面位置切换（2秒或6秒位置）
            const baseDelay1 = 2000; // 2秒到90度位置
            const baseDelay2 = 6000; // 6秒到270度位置
            const cardStagger = index * 400; // 每张卡牌延迟400ms

            // 选择第一个可用的时间点
            const totalDelay = baseDelay1 + cardStagger;

            setTimeout(() => {
                console.log(`⚠️ 降级方案切换卡牌 ${index}（90度位置）`);
                updateSingleCard(card, newCards[index]);

                // 为下一次切换准备
                if (card.switchData) {
                    card.switchData.lastSwitchCycle = 1;
                }
            }, totalDelay);
        } else {
            console.warn(`⚠️ 卡牌 ${index} 没有对应的新数据`);
        }
    });

    // 5秒后检查是否需要重试
    setTimeout(() => {
        console.log('⚠️ 降级方案切换完成');
        // 预生成更多卡牌组
        if (AppState.cardSets.length < 10) {
            AppState.cardSets.push(getRandomCardsForRound());
            console.log(`⚠️ 降级方案：生成新的随机组合，当前共${AppState.cardSets.length}组`);
        }
    }, 6000);
}

// 更新卡牌图片（纯展示模式）
function updateCardImages(newCards) {
    const cardsGrid = document.getElementById('cardsGrid');
    const existingCards = cardsGrid.querySelectorAll('.card');
    let loadedCount = 0;
    const totalCards = newCards.length;

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
                        // 监听图片加载完成
                        frontImg.onload = () => {
                            loadedCount++;
                            console.log(`卡牌图片加载完成 ${loadedCount}/${totalCards}: ${newCard.name}`);
                        };

                        frontImg.onerror = () => {
                            loadedCount++; // 即使失败也计数
                            console.error(`卡牌图片加载失败: ${newSrc}`);
                        };

                        frontImg.src = newSrc;
                        frontImg.alt = newCard.name;
                    } else {
                        loadedCount++; // 如果图片没变，直接计数
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

            // 解读按钮绑定
            const interpretationBtn = document.getElementById('startInterpretation');
            if (interpretationBtn) {
                interpretationBtn.onclick = function() {
                    console.log('开始专业解读');
                    startInterpretation();
                };
            }

            // 按钮现在直接使用onclick="location.reload()"，不需要事件绑定

            // 返回问题类型选择按钮已删除

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

// 创建22张塔罗牌专业横向滚动系统
function createSimpleCards() {
    try {
        console.log('=== 开始创建22张塔罗牌专业滚动系统 ===');
        const container = document.getElementById('cardFanContainer');

        if (!container) {
            console.error('❌ 找不到cardFanContainer容器');
            return;
        }

        console.log('✅ 找到容器，准备创建卡牌系统');

        // 应用动态卡牌尺寸
        applyDynamicCardStyles();

        // 强制显示容器
        container.innerHTML = '';
        container.style.display = 'block';
        container.style.visibility = 'visible';
        container.style.opacity = '1';
        container.style.position = 'relative';
        container.style.width = '100%';

        // 随机打乱22张塔罗牌
        const cards = shuffleArray([...tarotCards]);
        console.log(`📋 准备创建${cards.length}张随机排列的塔罗牌`);

        // 创建专业的滚动系统
        const scrollSystem = createProfessionalScrollSystem(cards);
        container.appendChild(scrollSystem);

        console.log('✅ 22张塔罗牌滚动系统创建完成');

    } catch (error) {
        console.error('❌ 创建塔罗牌系统失败:', error);
        // 强制使用降级方案
        createEmergencyFallbackCards();
    }
}

// 创建专业滚动系统
function createProfessionalScrollSystem(cards) {
    // 创建外层容器 - 移除外框样式
    const outerContainer = document.createElement('div');
    outerContainer.style.cssText = `
        width: 100%;
        height: 100%;
        position: relative;
        overflow: visible;
        background: transparent;
        border: none;
        box-shadow: none;
        border-radius: 0;
    `;

    // 创建滚动轨道容器
    const trackContainer = document.createElement('div');
    trackContainer.className = 'tarot-track-container';
    trackContainer.style.cssText = `
        display: flex;
        height: 100%;
        width: fit-content;
        animation: seamlessScroll 30s linear infinite;
        will-change: transform;
    `;

    // 创建第一组22张卡牌
    cards.forEach((card, index) => {
        const cardElement = createProfessionalTarotCard(card, index);
        trackContainer.appendChild(cardElement);
    });

    // 创建第二组22张卡牌（用于无缝循环）
    cards.forEach((card, index) => {
        const cardElement = createProfessionalTarotCard(card, index + 22);
        trackContainer.appendChild(cardElement);
    });

    // 添加CSS动画
    addProfessionalScrollCSS();

    outerContainer.appendChild(trackContainer);

    // 移除悬停暂停功能 - 让卡牌持续滚动
    // 用户选择卡牌时才会暂停，鼠标移动不影响滚动
    console.log('🔄 卡牌将持续滚动，不受鼠标悬停影响');

    return outerContainer;
}

// 创建专业塔罗牌
function createProfessionalTarotCard(card, index) {
    const cardElement = document.createElement('div');
    cardElement.className = 'professional-tarot-card';
    cardElement.setAttribute('data-card-id', card.id);
    cardElement.setAttribute('data-original-index', index % 22);

    // 根据屏幕尺寸动态设置卡牌大小
    const dimensions = calculateDynamicCardSize();

    cardElement.style.cssText = `
        flex-shrink: 0;
        width: ${dimensions.cardWidth}px;
        height: ${dimensions.cardHeight}px;
        margin: 0 ${dimensions.gap}px;
        cursor: pointer;
        position: relative;
        transition: all 0.4s cubic-bezier(0.4, 0.1, 0.2, 1);
        transform-style: preserve-3d;
        backface-visibility: hidden;
    `;

    // 创建卡背（不显示名称）- 移除金色边框，借鉴首页设计
    cardElement.innerHTML = `
        <div class="card-back-face" style="
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            box-shadow: none;
        ">
            <div class="card-pattern" style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('images/塔罗牌背面.png') center/contain no-repeat;
                opacity: 1;
                filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
            "></div>
            <div class="card-mystical-glow" style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 60px;
                height: 60px;
                background: radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent 70%);
                border-radius: 50%;
                animation: mysticalPulse 3s ease-in-out infinite;
            "></div>
        </div>
    `;

    // 点击事件
    cardElement.addEventListener('click', function(e) {
        e.stopPropagation();
        handleProfessionalCardSelection(card, cardElement);
    });

    // 悬停效果
    cardElement.addEventListener('mouseenter', function() {
        if (!this.classList.contains('selected')) {
            this.style.transform = 'translateY(-12px) scale(1.08) rotateY(5deg)';
            this.style.zIndex = '10';
        }
    });

    cardElement.addEventListener('mouseleave', function() {
        if (!this.classList.contains('selected')) {
            this.style.transform = 'translateY(0) scale(1) rotateY(0)';
            this.style.zIndex = '1';
        }
    });

    return cardElement;
}

// 处理专业卡牌选择
function handleProfessionalCardSelection(card, cardElement) {
    try {
        // 检查选择限制
        if (AppState.selectedCards.length >= 3) {
            console.log('⚠️ 已选择3张卡牌，无法继续选择');
            return;
        }

        if (cardElement.classList.contains('selected')) {
            console.log('⚠️ 此卡已选择');
            return;
        }

        // 随机正位逆位
        const isReversed = Math.random() < 0.30;
        console.log(`🔄 选择了第${AppState.selectedCards.length + 1}张卡牌 - ${isReversed ? '逆位' : '正位'}`);

        // 标记为已选择
        cardElement.classList.add('selected');

        // 翻转动画
        flipProfessionalCard(cardElement, card, isReversed);

        // 添加到选择列表
        AppState.selectedCards.push({
            ...card,
            isReversed: isReversed,
            element: cardElement
        });

        // 更新计数
        updateSelectedCountDisplay();

        // 3张选择完毕，继续滚动展示一段时间后开始解读
        if (AppState.selectedCards.length === 3) {
            console.log('✨ 已选择3张卡牌，继续滚动5秒后自动开始解读...');
            console.log('📋 最终选择的3张卡牌:', AppState.selectedCards.map(c => ({ name: c.name, isReversed: c.isReversed })));

            // 延长滚动时间，让用户能看到更多卡牌选择
            setTimeout(() => {
                console.log('🔮 5秒倒计时结束，开始解读卡牌...');
                console.log('📊 AppState状态检查:', {
                    selectedCards: AppState.selectedCards.length,
                    selectedQuestionType: AppState.selectedQuestionType
                });
                startInterpretation();
            }, 5000);
        }

    } catch (error) {
        console.error('❌ 处理卡牌选择失败:', error);
    }
}

// 专业卡牌翻转
function flipProfessionalCard(cardElement, card, isReversed) {
    try {
        console.log(`🔄 卡牌正在翻转...`);

        // 添加翻转动画
        cardElement.style.transition = 'transform 0.8s cubic-bezier(0.4, 0.1, 0.2, 1)';
        cardElement.style.transform = 'rotateY(180deg)';

        setTimeout(() => {
            cardElement.innerHTML = `
                <div class="card-front-face" style="
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: none;
                    border-radius: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: none;
                    transform: ${isReversed ? 'rotate(180deg)' : 'rotate(0deg)'};
                ">
                    <div class="card-image" style="
                        width: 100%;
                        height: 100%;
                        background: url('images/${card.file}') center/contain no-repeat;
                        border-radius: 15px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
                    "></div>
                </div>
            `;
        }, 400);

    } catch (error) {
        console.error('❌ 翻转卡牌失败:', error);
    }
}

// 添加专业滚动CSS
function addProfessionalScrollCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes seamlessScroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-50% - 30px));
            }
        }

        @keyframes mysticalPulse {
            0%, 100% {
                opacity: 0.3;
                transform: translate(-50%, -50%) scale(1);
            }
            50% {
                opacity: 0.7;
                transform: translate(-50%, -50%) scale(1.2);
            }
        }

        .professional-tarot-card.selected {
            transform: translateY(-20px) scale(1.15) !important;
            z-index: 100 !important;
            box-shadow: none !important;
        }

        .professional-tarot-card.selected .card-front-face,
        .professional-tarot-card.selected .card-back-face {
            border: none !important;
            box-shadow: none !important;
        }

        /* 桌面端响应式 - 进一步增大卡牌尺寸 */
        @media (min-width: 1201px) {
            .professional-tarot-card {
                width: 320px !important;
                height: 512px !important;
                margin: 0 40px !important;
            }

            .tarot-track-container {
                animation-duration: 45.5s !important;
            }

            @keyframes seamlessScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 80px)); }
            }
        }

        /* 移动端响应式 - 增大卡牌尺寸 */
        @media (max-width: 768px) {
            .professional-tarot-card {
                width: 160px !important;
                height: 256px !important;
                margin: 0 25px !important;
            }

            .tarot-track-container {
                animation-duration: 32.5s !important;
            }

            @keyframes seamlessScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 50px)); }
            }
        }

        @media (max-width: 480px) {
            .professional-tarot-card {
                width: 120px !important;
                height: 192px !important;
                margin: 0 18px !important;
            }

            .tarot-track-container {
                animation-duration: 26s !important;
            }

            @keyframes seamlessScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 36px)); }
            }
        }
    `;
    document.head.appendChild(style);
}

// 紧急降级方案
function createEmergencyFallbackCards() {
    try {
        console.log('🚨 使用紧急降级方案');
        const container = document.getElementById('cardFanContainer');
        if (!container) return;

        container.innerHTML = '';
        container.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 200px;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
            background: linear-gradient(135deg, rgba(45, 27, 61, 0.3), rgba(26, 26, 46, 0.3));
            border-radius: 15px;
        `;

        const fallbackCards = [
            { id: 0, name: '愚人' },
            { id: 1, name: '魔术师' },
            { id: 2, name: '女祭司' },
            { id: 3, name: '皇后' },
            { id: 4, name: '皇帝' },
            { id: 5, name: '教皇' }
        ];

        fallbackCards.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.style.cssText = `
                width: 100px;
                height: 150px;
                background: linear-gradient(135deg, #2d1b3d, #1a1a2e);
                border: 2px solid #d4af37;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: #d4af37;
                font-weight: bold;
                font-size: 11px;
                text-align: center;
                transition: all 0.3s ease;
                padding: 10px;
            `;
            cardDiv.textContent = card.name;
            cardDiv.onclick = () => handleProfessionalCardSelection(card, cardDiv);

            container.appendChild(cardDiv);
        });

        console.log('✅ 紧急降级方案创建完成');

    } catch (error) {
        console.error('❌ 紧急降级方案也失败了:', error);
    }
}

// 创建优化的单个塔罗牌
function createOptimizedTarotCard(card, index) {
    const cardElement = document.createElement('div');
    cardElement.className = 'optimized-tarot-card';
    cardElement.setAttribute('data-card-id', card.id);
    cardElement.setAttribute('data-index', index);

    // 使用CSS背景图而不是img标签，更快的加载
    cardElement.style.cssText += `
        background: linear-gradient(135deg, #2d1b3d, #1a1a2e);
        border: 2px solid #d4af37;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    `;

    // 卡背显示（使用小尺寸的placeholder）
    cardElement.innerHTML = `
        <div style="
            width: 60px;
            height: 80px;
            background: url('images/塔罗牌背面.png') center/contain no-repeat;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
            margin-bottom: 8px;
        "></div>
        <div style="
            background: rgba(0, 0, 0, 0.7);
            color: #d4af37;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: bold;
            text-align: center;
            max-width: 90%;
        ">${card.name}</div>
    `;

    // 点击事件
    cardElement.onclick = function() {
        handleOptimizedCardSelection(card, cardElement);
    };

    return cardElement;
}

// 处理优化卡牌选择
function handleOptimizedCardSelection(card, cardElement) {
    try {
        console.log(`选择卡牌: 第${AppState.selectedCards.length + 1}张卡牌`);

        // 检查是否已选择3张
        if (AppState.selectedCards.length >= 3) {
            console.log('已选择3张卡牌');
            return;
        }

        // 检查是否已选择此卡
        if (cardElement.classList.contains('selected')) {
            console.log('此卡已选择');
            return;
        }

        // 随机正位逆位
        const isReversed = Math.random() < 0.30;

        console.log(`第${AppState.selectedCards.length + 1}张卡牌 - ${isReversed ? '逆位' : '正位'}`);

        // 添加选中状态
        cardElement.classList.add('selected');

        // 显示卡牌正面（延迟加载图片）
        showCardFront(cardElement, card, isReversed);

        // 添加到选择列表
        AppState.selectedCards.push({
            ...card,
            isReversed: isReversed,
            element: cardElement
        });

        // 更新计数
        updateSelectedCountDisplay();

        // 如果选择3张，开始解读
        if (AppState.selectedCards.length === 3) {
            setTimeout(() => {
                startInterpretation();
            }, 2000);
        }

    } catch (error) {
        console.error('处理卡牌选择失败:', error);
    }
}

// 显示卡牌正面
function showCardFront(cardElement, card, isReversed) {
    try {
        // 添加翻转动画
        cardElement.style.transition = 'transform 0.6s ease';
        cardElement.style.transform = 'rotateY(180deg)';

        setTimeout(() => {
            cardElement.innerHTML = `
                <div style="
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #1a1a2e, #2d1b3d);
                    border: 2px solid #d4af37;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: ${isReversed ? 'rotate(180deg)' : 'rotate(0deg)'};
                ">
                    <div style="
                        width: 50px;
                        height: 70px;
                        background: url('images/${card.file}') center/contain no-repeat;
                        margin-bottom: 6px;
                        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
                    "></div>
                    <div style="
                        background: rgba(0, 0, 0, 0.8);
                        color: #d4af37;
                        padding: 3px 6px;
                        border-radius: 3px;
                        font-size: 8px;
                        font-weight: bold;
                        text-align: center;
                        width: 80%;
                    ">${card.name}</div>
                </div>
            `;
        }, 300);

    } catch (error) {
        console.error('显示卡牌正面失败:', error);
    }
}

// 简单自动滚动
function startAutoScroll(container) {
    try {
        let scrollPosition = 0;
        const scrollSpeed = 1;
        const maxScroll = container.scrollWidth - container.clientWidth;

        const scroll = () => {
            if (!container.matches(':hover')) {
                scrollPosition += scrollSpeed;
                if (scrollPosition >= maxScroll) {
                    scrollPosition = 0;
                }
                container.scrollLeft = scrollPosition;
            }
            requestAnimationFrame(scroll);
        };

        scroll();
    } catch (error) {
        console.error('自动滚动失败:', error);
    }
}

// 降级方案：最简单的卡牌
function createFallbackCards() {
    try {
        console.log('使用降级方案创建简单卡牌');
        const container = document.getElementById('cardFanContainer');
        if (!container) return;

        container.innerHTML = '';

        const simpleCards = [
            { id: 0, name: '愚人' },
            { id: 1, name: '魔术师' },
            { id: 2, name: '女祭司' },
            { id: 3, name: '皇后' },
            { id: 4, name: '皇帝' }
        ];

        const cardsContainer = document.createElement('div');
        cardsContainer.style.cssText = `
            display: flex;
            justify-content: center;
            gap: 20px;
            padding: 20px;
            flex-wrap: wrap;
        `;

        simpleCards.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.style.cssText = `
                width: 100px;
                height: 150px;
                background: linear-gradient(135deg, #2d1b3d, #1a1a2e);
                border: 2px solid #d4af37;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: #d4af37;
                font-weight: bold;
                font-size: 12px;
                text-align: center;
                transition: all 0.3s ease;
            `;
            cardDiv.textContent = card.name;
            cardDiv.onclick = () => handleOptimizedCardSelection(card, cardDiv);

            cardsContainer.appendChild(cardDiv);
        });

        container.appendChild(cardsContainer);
        console.log('降级方案卡牌创建完成');

    } catch (error) {
        console.error('降级方案失败:', error);
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

        /* 移除悬停暂停规则，让卡牌持续滚动 */

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
        console.log(`选择塔罗牌: 第${AppState.selectedCards.length + 1}张卡牌`);

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

        console.log(`第${AppState.selectedCards.length + 1}张卡牌 - ${isReversed ? '逆位' : '正位'}`);

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
                startInterpretation();
            }, 3000);
        }

    } catch (error) {
        console.error('处理塔罗牌选择失败:', error);
    }
}

// 翻转塔罗牌显示正面
function flipTarotCard(cardElement, card, isReversed) {
    try {
        console.log(`卡牌正在翻转...`);

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
            const orientation = card.isReversed ?
            '逆位<br><span style="font-size:0.8em;color:#ff4444;">Reversed</span>' :
            '正位<br><span style="font-size:0.8em;color:#d4af37;">Upright</span>';
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
                                    width: 180px;
                                    height: 270px;
                                    background: transparent;
                                    border: none;
                                    border-radius: 12px;
                                    margin: 0 auto 15px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    transform: ${card.isReversed ? 'rotate(180deg)' : 'rotate(0deg)'};
                                ">
                                    <div style="
                                        width: 150px;
                                        height: 225px;
                                        background: url('images/${card.file}') center/contain no-repeat;
                                        border-radius: 10px;
                                    "></div>
                                </div>
                                <div style="color: #d4af37; font-size: 14px; font-weight: bold;">${card.name}</div>
                                <div style="color: ${card.isReversed ? '#ff4444' : '#999'}; font-size: 12px; font-weight: ${card.isReversed ? 'bold' : 'normal'};">${card.isReversed ? '逆位' : '正位'}</div>
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
            console.log(`创建第一组卡牌 ${index}`);
            const cardElement = createScrollCard(card, index);
            track.appendChild(cardElement);
        });

        // 第二组卡牌（用于无缝循环）
        cards.forEach((card, index) => {
            console.log(`创建第二组卡牌 ${index}`);
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
                trackElement.style.animation = 'autoScroll 39s linear infinite';
            }
        }, 100);

    } catch (error) {
        console.error('创建滚动卡牌失败:', error);
    }
}

// 根据屏幕尺寸计算动态卡牌尺寸 - 大幅增大显示尺寸，提升占屏比
function calculateDynamicCardSize() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // 基础尺寸 - 极大幅增大，特别是电脑端
    let cardWidth, cardHeight, containerHeight;

    if (screenWidth <= 480) {
        // 移动设备 - 增大120%，充分利用屏幕空间
        cardWidth = Math.min(140, screenWidth / 2.8);
        cardHeight = cardWidth * 1.6;
        containerHeight = 320;
    } else if (screenWidth <= 768) {
        // 平板设备 - 增大100%
        cardWidth = Math.min(180, screenWidth / 3.2);
        cardHeight = cardWidth * 1.6;
        containerHeight = 420;
    } else if (screenWidth <= 1200) {
        // 桌面设备 - 增大150%，大幅提升视觉效果
        cardWidth = Math.min(280, screenWidth / 3.2);
        cardHeight = cardWidth * 1.6;
        containerHeight = 600;
    } else {
        // 大屏设备 - 增大120%，充分利用大屏空间
        cardWidth = Math.min(340, screenWidth / 3.8);
        cardHeight = cardWidth * 1.6;
        containerHeight = 700;
    }

    return {
        cardWidth,
        cardHeight,
        containerHeight,
        gap: screenWidth <= 480 ? 25 : 35
    };
}

// 应用动态尺寸到CSS
function applyDynamicCardStyles() {
    const dimensions = calculateDynamicCardSize();

    // 创建或更新动态样式
    let dynamicStyle = document.getElementById('dynamic-card-styles');
    if (!dynamicStyle) {
        dynamicStyle = document.createElement('style');
        dynamicStyle.id = 'dynamic-card-styles';
        document.head.appendChild(dynamicStyle);
    }

    dynamicStyle.textContent = `
        #cardFanContainer {
            height: ${dimensions.containerHeight}px !important;
            padding: 20px 0 !important;
        }

        .scroll-wrapper {
            width: 100% !important;
            height: 100% !important;
            overflow: hidden !important;
            position: relative !important;
        }

        .card-track {
            gap: ${dimensions.gap}px !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
        }

        .scroll-card {
            width: ${dimensions.cardWidth}px !important;
            height: ${dimensions.cardHeight}px !important;
            min-width: ${dimensions.cardWidth}px !important;
            min-height: ${dimensions.cardHeight}px !important;
            flex-shrink: 0 !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
            cursor: pointer !important;
        }

        .scroll-card:hover {
            transform: translateY(-10px) scale(1.05) !important;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4) !important;
        }

        .scroll-card .card-face {
            width: 100% !important;
            height: 100% !important;
            border-radius: 12px !important;
            overflow: hidden !important;
        }

        .scroll-card .card-face img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
        }

        .selected-cards-area .scroll-card {
            transform: scale(0.9) !important;
            margin: 0 -10px !important;
        }
    `;

    console.log(`🎯 应用动态卡牌尺寸: ${dimensions.cardWidth}x${dimensions.cardHeight}, 容器高度: ${dimensions.containerHeight}`);
}

// 创建单个滚动卡牌元素
function createScrollCard(card, index) {
    try {
        console.log(`创建滚动卡牌: 索引 ${index}`);

        const cardElement = document.createElement('div');
        cardElement.className = 'scroll-card';
        cardElement.setAttribute('data-card-id', card.id);

        // 使用AppState中的卡牌数组长度计算索引
        const cardsLength = AppState.availableCardsForDivination.length;
        const originalIndex = index % cardsLength;

        cardElement.setAttribute('data-index', originalIndex);
        cardElement.setAttribute('data-original-index', originalIndex);

        // 创建卡牌内容（只显示卡背）- 移除边框样式
        cardElement.innerHTML = `
            <div class="card-face card-back" style="border: none; box-shadow: none; background: transparent;">
                <img src="images/塔罗牌背面.png" alt="塔罗牌背面" loading="eager">
            </div>
        `;

        // 添加点击事件
        cardElement.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log(`点击滚动卡牌: 索引 ${originalIndex}`);
            selectScrollCard(cardElement, card, originalIndex);
        });

        // 卡牌已默认显示，无需额外的opacity动画

        return cardElement;
    } catch (error) {
        console.error(`创建滚动卡牌失败 (索引 ${index}):`, error);
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

    console.log(`选择卡牌: 第${AppState.selectedCards.length + 1}张 - ${isReversed ? '逆位' : '正位'}`);

    // 从可用卡牌中移除已选择的卡牌，确保不重复
    const cardIndex = AppState.availableCardsForDivination.findIndex(card => card.id === cardData.id);
    if (cardIndex > -1) {
        AppState.availableCardsForDivination.splice(cardIndex, 1);
    }

    // 添加选中效果并从滚动中移除
    cardElement.classList.add('selected');
    if (isReversed) {
        cardElement.classList.add('reversed');
    }

    // 将卡牌从滚动轨道中移除并添加到已选择区域
    const track = cardElement.closest('.card-track');
    const container = document.getElementById('cardFanContainer');

    if (track && container) {
        // 创建一个特殊的"已选卡牌"容器 - 适应更大的卡牌
        let selectedCardsArea = document.querySelector('.selected-cards-area');
        if (!selectedCardsArea) {
            selectedCardsArea = document.createElement('div');
            selectedCardsArea.className = 'selected-cards-area';
            const dimensions = calculateDynamicCardSize();
            selectedCardsArea.style.cssText = `
                position: absolute;
                top: ${-dimensions.cardHeight - 30}px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: ${dimensions.gap}px;
                z-index: 100;
                max-width: 90vw;
            `;
            container.appendChild(selectedCardsArea);
        }

        // 将卡牌从轨道移到已选择区域
        cardElement.style.animation = 'none';
        cardElement.style.position = 'relative';
        selectedCardsArea.appendChild(cardElement);

        // 立即替换卡背为卡牌正面，不显示正位逆位标注 - 移除边框样式
        const transformStyle = isReversed ? 'transform: rotate(180deg);' : '';
        cardElement.innerHTML = `
            <div class="card-face" style="${transformStyle} border: none; box-shadow: none; background: transparent;">
                <img src="images/${cardData.file}" alt="${cardData.name}" loading="eager">
            </div>
        `;

        // 移除对应循环的第二张卡牌
        const allCards = track.querySelectorAll('.scroll-card');
        const duplicateCards = Array.from(allCards).filter(card =>
            card.getAttribute('data-card-id') === cardData.id &&
            card !== cardElement
        );

        duplicateCards.forEach(duplicate => {
            duplicate.style.transition = 'all 0.5s ease-out';
            duplicate.style.opacity = '0';
            duplicate.style.transform = 'scale(0)';
            setTimeout(() => duplicate.remove(), 500);
        });

        // 重新启动滚动动画（如果有剩余卡牌）
        if (AppState.selectedCards.length < 3) {
            track.style.animation = 'none';
            setTimeout(() => {
                track.style.animation = '';
            }, 100);
        }
    }

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

    // 如果选择了3张卡牌，准备自动解读
    if (AppState.selectedCards.length === 3) {
        // 2秒后自动开始解读
        setTimeout(() => {
            startInterpretation();
        }, 2000);
    } else {
        // 如果选择了1-2张卡牌，显示手动解读按钮
        document.getElementById('startInterpretation').classList.remove('hidden');

        // 剩余卡牌继续正常滚动，不需要任何禁用操作
        console.log(`🔄 已选择${AppState.selectedCards.length}张卡牌，剩余卡牌继续轮动`);
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
    const count = AppState.selectedCards.length;
    document.getElementById('selectedCount').textContent = count;

    // 同时更新英文计数器
    const englishCount = document.getElementById('selectedCountEn');
    if (englishCount) {
        englishCount.textContent = count;
    }
}

// 开始解读
function startInterpretation() {
    console.log('🔮 开始专业解读...');
    console.log('选择的卡牌数量:', AppState.selectedCards.length);
    console.log('选择的卡牌详情:', AppState.selectedCards);
    console.log('问题类型:', AppState.selectedQuestionType);

    if (AppState.selectedCards.length !== 3) {
        console.log('❌ 卡牌数量不足，无法开始解读');
        return;
    }

    try {
        console.log('📊 准备生成专业解读内容...');
        console.log('🚀 调用generateInterpretation函数...');

        // 生成解读内容
        const interpretation = generateInterpretation();
        console.log('✨ 解读生成完成');
        console.log('生成的解读对象keys:', Object.keys(interpretation || {}));

        // 显示结果界面
        console.log('🖼️ 准备显示结果界面...');
        showResultScreen(interpretation);
        console.log('🎯 解读界面显示完成');
    } catch (error) {
        console.error('❌ 解读生成失败:', error);
        console.error('❌ 错误堆栈:', error.stack);
    }
}

// 生成占卜解读 - 优化版本，包含时间维度深度解读
function generateInterpretation() {
    console.log('🔮 开始生成占卜解读...');
    console.log('AppState.selectedCards:', AppState.selectedCards);
    console.log('AppState.selectedQuestionType:', AppState.selectedQuestionType);

    const questionNames = {
        love: '爱情占卜<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Love Reading</span>',
        career: '事业发展<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Career Development</span>',
        relationship: '人际关系<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Relationships</span>',
        growth: '个人成长<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Personal Growth</span>',
        fortune: '日常运势<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Daily Fortune</span>'
    };

    // 生成时间维度的深度解读
    const generateTimeBasedInterpretation = () => {
        const positions = ['过去<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Past</span>',
                         '现在<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Present</span>',
                         '未来<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Future</span>'];
        return AppState.selectedCards.map((card, index) => {
            const orientation = card.isReversed ?
            '逆位<br><span style="font-size:0.8em;color:#ff4444;">Reversed</span>' :
            '正位<br><span style="font-size:0.8em;color:#d4af37;">Upright</span>';
            const meaning = card.isReversed ? card.reversed : card.upright;
            const timePosition = positions[index];

            return {
                position: timePosition,
                card: card,
                orientation: orientation,
                meaning: meaning,
                detailedInterpretation: generateDetailedCardInterpretation(card, index, timePosition)
            };
        });
    };

  
    // 生成每张牌在特定时间位置的详细解读 - 专业版本
    function generateDetailedCardInterpretation(card, index, timePosition) {
        const orientation = card.isReversed ?
            '逆位<br><span style="font-size:0.8em;color:#ff4444;">Reversed</span>' :
            '正位<br><span style="font-size:0.8em;color:#d4af37;">Upright</span>';
        const questionType = AppState.selectedQuestionType;

        // 获取专业塔罗解读
        const professionalInterpretation = getProfessionalTarotInterpretation(card, orientation, timePosition, questionType);

        // 为没有英文翻译的解读内容添加翻译
        if (professionalInterpretation && !professionalInterpretation.includes('<span style="font-size:0.85em;color:rgba(184,184,184,0.8);">')) {
            const timeTranslation = timePosition.includes('过去') ? 'in the past' :
                                  timePosition.includes('现在') ? 'in the present' :
                                  timePosition.includes('未来') ? 'in the future' : 'at this time';
            const cardTranslation = card.english || card.name;
            const orientationTranslation = orientation.includes('正位') ? 'upright' : 'reversed';

            // 获取卡牌含义的英文翻译
            const cardMeaning = card.isReversed ? card.reversed : card.upright;
            let englishMeaning = 'This card provides guidance and insight for your journey.';

            // 根据卡牌类型提供更具体的英文含义
            const cardMeanings = {
                '星星': { upright: 'hope, inspiration, renewal, spiritual guidance', reversed: 'loss of hope, disappointment, lack of faith, despair' },
                'Star': { upright: 'hope, inspiration, renewal, spiritual guidance', reversed: 'loss of hope, disappointment, lack of faith, despair' },
                '命运之轮': { upright: 'good fortune, destiny, positive change, life cycles', reversed: 'bad luck, resistance to change, negative cycles, stagnation' },
                'Wheel of Fortune': { upright: 'good fortune, destiny, positive change, life cycles', reversed: 'bad luck, resistance to change, negative cycles, stagnation' },
                '隐士': { upright: 'introspection, soul-searching, wisdom, inner guidance', reversed: 'isolation, loneliness, withdrawal, lost guidance' },
                'Hermit': { upright: 'introspection, soul-searching, wisdom, inner guidance', reversed: 'isolation, loneliness, withdrawal, lost guidance' },
                '恶魔': { upright: 'bondage, addiction, materialism, temptation', reversed: 'breaking free, overcoming limitations, liberation' },
                'Devil': { upright: 'bondage, addiction, materialism, temptation', reversed: 'breaking free, overcoming limitations, liberation' },
                '恋人': { upright: 'love, harmony, relationships, choices', reversed: 'conflict, imbalance, disharmony, misalignment' },
                'Lovers': { upright: 'love, harmony, relationships, choices', reversed: 'conflict, imbalance, disharmony, misalignment' },
                '战车': { upright: 'victory, determination, willpower, success', reversed: 'lack of direction, defeat, loss of control' },
                'Chariot': { upright: 'victory, determination, willpower, success', reversed: 'lack of direction, defeat, loss of control' },
                '力量': { upright: 'inner strength, courage, compassion, self-control', reversed: 'weakness, self-doubt, lack of confidence' },
                'Strength': { upright: 'inner strength, courage, compassion, self-control', reversed: 'weakness, self-doubt, lack of confidence' },
                '正义': { upright: 'fairness, truth, cause and effect, law', reversed: 'unfairness, injustice, bias, dishonesty' },
                'Justice': { upright: 'fairness, truth, cause and effect, law', reversed: 'unfairness, injustice, bias, dishonesty' }
            };

            const cardKey = cardTranslation;
            if (cardMeanings[cardKey]) {
                englishMeaning = card.isReversed ? cardMeanings[cardKey].reversed : cardMeanings[cardKey].upright;
            }

            const basicTranslation = `<br><br><span style="font-size:0.9em;color:rgba(184,184,184,0.8);"><strong>English Translation:</strong> The ${cardTranslation} card (${orientationTranslation}) ${timeTranslation} represents ${englishMeaning}.</span>`;
            professionalInterpretation += basicTranslation;
        }

        return professionalInterpretation ||
               `${timePosition}的${card.name}(${orientation})显示着${card.isReversed ? card.reversed : card.upright}。<br><br><span style="font-size:0.9em;color:rgba(184,184,184,0.8);"><strong>English Translation:</strong> The ${card.english || card.name} card (${orientation.includes('正位') ? 'upright' : 'reversed'}) ${timePosition.includes('过去') ? 'in the past' : timePosition.includes('现在') ? 'in the present' : 'in the future'} signifies guidance and insight for your journey.</span>`;
    }

    // 专业塔罗解读库
    function getProfessionalTarotInterpretation(card, orientation, timePosition, questionType) {
        const tarotInterpretations = {
            // 愚人牌的深度解读
            0: {
                '过去': {
                    love: {
                        upright: '过去的感情中，你曾经勇敢地开始了一段全新的恋情，充满天真和信任。虽然可能有些鲁莽，但那份纯粹的勇气让你体验到了爱情最初的美好。这段经历教会了你如何在爱中保持开放和真诚。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">In past relationships, you bravely started a completely new romance full of innocence and trust. Although perhaps somewhat reckless, that pure courage allowed you to experience the original beauty of love. This experience taught you how to remain open and sincere in love.</span>',
                        reversed: '过去的感情中可能存在过不成熟的决定或鲁莽的行为，导致关系出现波折。这些经历让你学会了在感情中更加谨慎和深思熟虑，虽然痛苦，但已成为成长的宝贵财富。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">In past relationships, there may have been immature decisions or reckless behaviors that caused relationship turbulence. These experiences taught you to be more cautious and thorough in relationships, though painful, they have become valuable assets for growth.</span>'
                    },
                    career: {
                        upright: '过去你曾经勇敢地尝试了新的职业方向或项目，虽然充满不确定性，但那份冒险精神为你开启了新的可能性。这个阶段培养了你面对未知的勇气。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">In the past, you bravely tried new career directions or projects. Although full of uncertainty, that adventurous spirit opened up new possibilities for you. This stage cultivated your courage to face the unknown.</span>',
                        reversed: '过去在职业选择上可能过于冲动或缺乏方向感，导致一些挫折。这些教训让你现在更加注重规划和目标设定，学会了在冒险中保持理性。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">In the past, you may have been too impulsive or lacked direction in career choices, leading to some setbacks. These lessons now make you focus more on planning and goal setting, learning to maintain reason while taking risks.</span>'
                    }
                },
                '现在': {
                    love: {
                        upright: '当前你正站在爱情的新起点上，有机会以全新的心态去体验感情。保持开放和好奇的心，不要害怕展现真实的自己，这是开始美好关系的最佳时机。',
                        reversed: '现在的感情状态可能缺乏方向感或过于理想化。需要重新审视自己的情感需求，避免盲目投入，先找到内在的平衡和清晰。'
                    },
                    career: {
                        upright: '现在是开启新事业或项目的绝佳时机，你的创造力和冒险精神正达到巅峰。相信自己的直觉，勇敢地迈出第一步，宇宙会支持你的行动。',
                        reversed: '目前职业发展可能感到迷茫或缺乏方向。建议先停下来进行深度思考，明确自己的目标和价值观，不要为了改变而改变。'
                    }
                },
                '未来': {
                    love: {
                        upright: '未来预示着一段全新的感情经历即将开始，可能来自意想不到的地方。保持开放的心态，准备好迎接改变，爱情将以最纯真美好的方式进入你的生活。',
                        reversed: '未来需要注意避免在感情中做出轻率的决定。建议先完善自我，培养内在的成熟度，这样才能建立稳定健康的关系。'
                    },
                    career: {
                        upright: '未来将迎来全新的职业机会或人生转折点，可能需要搬迁或转换领域。保持勇气和好奇心，这些变化将带来意想不到的成长和收获。',
                        reversed: '未来职业发展中需要避免盲目冒险。建议做好充分准备，制定清晰计划，在追求新机会时保持务实和谨慎。'
                    }
                }
            },
            // 魔术师牌的深度解读
            1: {
                '过去': {
                    love: {
                        upright: '过去的感情中，你曾经运用自己的魅力和技巧成功吸引了心仪的对象。那段时期你展现了强大的创造力和行动力，让关系充满了活力和激情。',
                        reversed: '过去的感情中可能存在过操控或不真诚的行为，导致信任受损。这些经历让你学会了在关系中保持诚实和透明的重要性。'
                    },
                    career: {
                        upright: '过去你在职业上展现了卓越的技能和创造力，成功地将想法转化为现实。这个阶段建立了你作为专业人才的声誉和自信。',
                        reversed: '过去可能过于依赖技巧而忽视了实质内容，或使用了不当手段。这些教训让你明白了诚信和真实能力的重要性。'
                    }
                },
                '现在': {
                    love: {
                        upright: '当前你拥有将感情理想变为现实的所有资源和能力。这是主动出击、创造美好关系的时候，运用你的魅力和智慧去吸引对的人。',
                        reversed: '现在在感情中可能感到力量被分散或缺乏明确目标。需要集中注意力，明确自己真正想要什么，然后有计划地行动。'
                    },
                    career: {
                        upright: '现在你正处于创造力和执行力的高峰期，所有的工具和资源都已齐备。这是实现职业目标的关键时刻，大胆行动，成功就在眼前。',
                        reversed: '目前职业发展可能感到被外界的期望所束缚，或者缺乏真正的自主权。需要重新连接自己的内在力量，找回主导权。'
                    }
                },
                '未来': {
                    love: {
                        upright: '未来你将成功地创造出理想中的感情关系，运用智慧和技巧让爱情开花结果。你的主动性和创造力将得到充分展现和回报。',
                        reversed: '未来需要注意避免在感情中过度控制或操纵。建议学习放下控制，让关系自然发展，培养真正的信任和亲密。'
                    },
                    career: {
                        upright: '预示着你将在职业上取得重大成就，成功地将愿景转化为现实。你的专业技能和领导才能将得到认可和重用。',
                        reversed: '未来职业发展可能面临能力被质疑或资源不足的挑战。建议持续学习和提升，确保实力与野心相匹配。'
                    }
                }
            },
            // 女祭司牌的深度解读
            2: {
                '过去': {
                    love: {
                        upright: '过去的感情中，你曾经依靠直觉和内在智慧做出了重要决定。那段时期你的第六感很强，能够洞察到他人看不到的真相。',
                        reversed: '过去可能忽视了自己的直觉或内在声音，导致感情上的错误判断。这些经历让你学会了倾听内心的重要性。'
                    },
                    career: {
                        upright: '过去你在职业上展现了出色的洞察力和直觉，常常能在信息不完整的情况下做出正确判断。这种能力为你赢得了同事的信任。',
                        reversed: '过去可能忽视了重要的细节或内在警告，导致职业决策失误。这些教训让你现在更加注重平衡直觉与现实。'
                    }
                },
                '现在': {
                    love: {
                        upright: '当前你的直觉能力非常强，能够感受到他人内心深处的情感。相信你的第六感，它会引导你做出正确的感情选择。',
                        reversed: '现在可能感到困惑或无法看清感情的真实状况。建议花时间静心思考，不要急于做决定，真相会逐渐显现。'
                    },
                    career: {
                        upright: '现在是运用直觉和创造力解决问题的时候。你的内在智慧正在指引你发现隐藏的机会和解决方案。',
                        reversed: '目前职业上可能缺乏清晰的洞察力或感到信息不足。建议寻求更多的信息和不同角度的观点。'
                    }
                },
                '未来': {
                    love: {
                        upright: '未来你将通过深刻的直觉洞察找到真正的灵魂伴侣。这种超越表面的连接将带来精神层面的深度契合。',
                        reversed: '未来感情发展需要更加谨慎地观察和了解，不要被表面现象迷惑。给彼此时间，让真实本质逐渐展现。'
                    },
                    career: {
                        upright: '预示着你将通过独特的洞察力和直觉发现新的职业机会或创新方向。这种与众不同的视角将成为你的竞争优势。',
                        reversed: '未来职业发展需要注意避免做出冲动判断。建议在重要决策前进行充分的研究和咨询。'
                    }
                }
            },
            // 皇后牌的深度解读
            3: {
                '过去': {
                    love: {
                        upright: '过去的感情中，你曾经体验过深刻的爱与被爱的滋养。那段时期关系充满了温暖、关怀和丰盛，让你感受到了爱情的美好。',
                        reversed: '过去可能在关系中过度依赖或缺乏独立，导致关系失衡。这些经历让你学会了在爱情中保持自我的重要性。'
                    },
                    career: {
                        upright: '过去你在职业上展现了出色的创造力和滋养能力，成功地培育了项目或团队。这个阶段建立了你作为关怀型领导的声誉。',
                        reversed: '过去可能过于关注外在成就而忽视了内在需求，或创造力受到压抑。这些教训让你重新平衡了工作与生活。'
                    }
                },
                '现在': {
                    love: {
                        upright: '当前你的感情生活充满了丰盛和美好，这是深度滋养关系和创造浪漫的时刻。用你的温暖和关怀让爱情更加绽放。',
                        reversed: '现在可能在关系中感到缺乏滋养或创造力受阻。建议先照顾好自己的需求，重新连接自己的女性能量。'
                    },
                    career: {
                        upright: '现在你在职业上拥有出色的创造力和执行能力，能够将想法转化为现实。这是展现你领导才能和关怀特质的时机。',
                        reversed: '目前职业发展可能感到缺乏资源支持或创造力受阻。建议寻求合作机会，不要独自承担所有责任。'
                    },
                    relationship: {
                        upright: '当下你在人际关系中展现了温暖和包容，能够创造和谐的氛围。这是建立深度连接的好时机。',
                        reversed: '现在可能在关系中感到过度付出或不被理解。建议设立健康的边界，学会平衡给予和接受。'
                    },
                    growth: {
                        upright: '当前你正处于个人成长的丰盛期，各种机会和资源都在向你汇聚。这是发挥创造力和滋养能力的时刻。',
                        reversed: '目前成长可能感到缺乏内在滋养或与直觉的连接。建议花时间与自己相处，重新发现内在的智慧和力量。'
                    },
                    fortune: {
                        upright: '现在的运势非常有利于创造和孕育新事物，无论是项目、关系还是个人成长。宇宙正在为你提供丰富的支持。',
                        reversed: '当前运势可能感到缺乏滋养或创造受阻。建议放慢节奏，给自己时间和空间去重新充电和找回灵感。'
                    }
                },
                '未来': {
                    love: {
                        upright: '未来预示着一段充满温暖和滋养的感情关系即将到来。这段关系将让你体验到被爱和被珍惜的美好感觉。',
                        reversed: '未来感情发展需要避免过度依赖或失去自我。保持独立性，健康的爱情建立在两个完整个体的基础上。'
                    },
                    career: {
                        upright: '未来职业发展将带来丰盛的收获和成功，你的创造力和领导才能将得到充分展现。这是事业丰收的时期。',
                        reversed: '未来职业发展需要注意避免过度工作或忽视自我关怀。成功不应以牺牲健康和幸福为代价。'
                    },
                    relationship: {
                        upright: '未来你将建立深厚而滋养的人际关系网络，这些连接将为你带来支持和温暖。友谊将成为你重要的财富。',
                        reversed: '未来需要在人际关系中保持独立和自我关怀。不要为了取悦他人而牺牲自己的需求和边界。'
                    },
                    growth: {
                        upright: '未来个人成长将迎来丰盛的收获期，你之前的努力和投资都将开花结果。这是享受成长果实的时候。',
                        reversed: '未来成长过程需要更加关注内在滋养和自我关爱。真正的成长来自于对自己温柔而坚定的态度。'
                    },
                    fortune: {
                        upright: '未来运势将带来丰盛和繁荣，各种机会将自然地向你流来。保持感恩的心态，继续传递温暖给他人。',
                        reversed: '未来运势提醒你要在追求丰盛的同时保持内心的平衡。真正的富足包含精神、情感和物质的和谐。'
                    }
                }
            },
            // 皇帝牌的深度解读
            4: {
                '过去': {
                    love: {
                        upright: '过去的感情中，你曾经扮演着保护者和领导者的角色，为关系提供了稳定和安全感。这段经历让你学会了在爱情中承担责任的重要性。',
                        reversed: '过去可能在感情中过于专制或控制欲强，导致关系紧张。这些教训让你学会了在爱情中平衡权威与温柔。'
                    },
                    career: {
                        upright: '过去你在职业上展现了出色的领导能力和结构思维，成功地建立了稳定的职业基础。这个阶段培养了你的责任感和执行力。',
                        reversed: '过去可能在职业上过于僵化或滥用权力，导致团队关系紧张。这些经历让你学会了更灵活和包容的领导方式。'
                    }
                },
                '现在': {
                    love: {
                        upright: '当前你有能力为感情关系提供稳定和安全的基础。这是建立长期承诺和创造稳固关系的好时机。',
                        reversed: '现在可能在感情中过于控制或缺乏情感表达。建议学会放下控制，用更温柔的方式与伴侣沟通。'
                    },
                    career: {
                        upright: '现在你正处于职业领导的有利位置，有能力制定长远规划并执行。这是展现你领导才能和建立权威的时机。',
                        reversed: '目前职业发展可能感到缺乏结构或控制力。建议重新审视自己的目标和策略，建立清晰的行动计划。'
                    }
                },
                '未来': {
                    love: {
                        upright: '未来你将建立起一段稳定而长久的感情关系，这段关系将建立在责任感和相互尊重的基础上。婚姻或深度承诺的可能性很高。',
                        reversed: '未来感情发展需要避免过于控制或缺乏情感交流。真正的爱情需要平衡理性与感性。'
                    },
                    career: {
                        upright: '预示着你将在职业上达到领导地位，获得权威和认可。你的结构和纪律性将带来长期的成功和稳定。',
                        reversed: '未来职业发展需要注意避免过于僵化或缺乏灵活性。领导力需要适应变化和包容不同的观点。'
                    }
                }
            },
            // 恋人牌的深度解读
            6: {
                '过去': {
                    love: {
                        upright: '过去的感情中，你曾经做出过重要的情感选择，那段时期面临着多个选项，最终选择了内心的真实感受。这个决定让你深刻理解了爱情的价值。',
                        reversed: '过去可能在感情选择上犹豫不决或做出了错误的选择，导致关系失衡。这些经历让你学会了在爱情中更加清晰地认识自己的需求。'
                    },
                    career: {
                        upright: '过去你在职业上曾经面临重要的选择，最终选择了符合内心价值观的道路。这个决定为你带来了职业上的满足感和成就感。',
                        reversed: '过去可能在职业选择上感到冲突或做出了违背内心的决定。这些教训让你学会了在职业发展中平衡现实与理想。'
                    }
                },
                '现在': {
                    love: {
                        upright: '当前你正面临重要的感情选择，这个决定将深刻影响你的未来。倾听内心的声音，选择真正与你灵魂契合的人。',
                        reversed: '现在可能在感情中感到冲突或无法做出选择。建议先花时间了解自己的真实需求，不要被外界压力所影响。'
                    },
                    career: {
                        upright: '现在你正处于职业选择的关键时刻，有机会整合不同的技能和机会。选择那条能让你发挥最大潜能的道路。',
                        reversed: '目前职业发展可能面临价值观冲突或难以抉择的状况。建议重新连接自己的核心价值观，做出符合内心的选择。'
                    }
                },
                '未来': {
                    love: {
                        upright: '未来预示着一段深度契合的灵魂伴侣关系即将到来。这段关系将建立在精神层面的深刻连接和相互理解的基础上。',
                        reversed: '未来感情发展需要避免基于外在条件而非内在契合的选择。真正的爱情来自于灵魂的共鸣，而非条件的匹配。'
                    },
                    career: {
                        upright: '未来你将找到与自己价值观完美契合的职业道路，工作将不再是谋生手段，而是自我实现的途径。这种整合将带来深深的满足感。',
                        reversed: '未来职业发展需要注意避免为了物质利益而牺牲个人价值观。长期的成功来自于内心的和谐与外在成就的平衡。'
                    }
                }
            },
            // 战车牌的深度解读
            7: {
                '过去': {
                    love: {
                        upright: '过去的感情中，你曾经积极主动地追求爱情，展现了强烈的意志力和决心。那段时期你的行动力让关系充满了激情和动力。',
                        reversed: '过去在感情中可能过于冲动或缺乏方向感，导致关系失控。这些经历让你学会了在爱情中平衡激情与理性。'
                    },
                    career: {
                        upright: '过去你在职业上展现了强大的驱动力和野心，通过坚定的意志力取得了重要成就。这个阶段建立了你作为行动派的声誉。',
                        reversed: '过去可能在职业发展上缺乏明确方向或过于急躁，导致努力白费。这些教训让你学会了在行动前做好规划。'
                    }
                },
                '现在': {
                    love: {
                        upright: '当前你拥有强大的动力去追求自己想要的感情关系。这是主动出击、创造爱情的时刻，你的决心将战胜一切障碍。',
                        reversed: '现在可能在感情中感到失控或缺乏方向。建议先明确自己的目标，然后有控制地采取行动。'
                    },
                    career: {
                        upright: '现在你正处于职业发展的加速期，拥有强大的前进动力和执行力。这是实现目标的关键时刻，保持专注和决心。',
                        reversed: '目前职业发展可能感到失控或缺乏明确方向。建议重新制定计划，确保行动与目标一致。'
                    }
                },
                '未来': {
                    love: {
                        upright: '未来预示着你将通过坚定的意志力成功赢得心仪的感情。你的主动性和决心将让你克服一切障碍，获得理想的爱情。',
                        reversed: '未来感情发展需要注意避免过于冲动或控制欲过强。爱情需要双方的努力，而不是单方面的强势推进。'
                    },
                    career: {
                        upright: '预示着你将在职业上取得重大突破和成功，强大的意志力和执行力将让你克服所有挑战，达到目标。',
                        reversed: '未来职业发展需要避免盲目冒进或缺乏耐心。成功需要持续的付出和明智的策略，而不仅仅是意志力。'
                    }
                }
            },
            // 力量牌的深度解读
            8: {
                '过去': {
                    love: {
                        upright: '过去的感情中，你曾经展现了内在的力量和勇气，用温柔的方式克服了关系中的困难。那段时期你的耐心和同情心让关系更加稳固。',
                        reversed: '过去在感情中可能感到软弱无力或缺乏自信，导致关系出现问题。这些经历让你学会了在爱情中培养内在力量。'
                    },
                    career: {
                        upright: '过去你在职业上展现了内在的力量和勇气，用温柔而坚定的方式克服了挑战。这个阶段培养了你的领导才能和影响力。',
                        reversed: '过去可能在职业上感到缺乏自信或内在力量，导致机会错失。这些教训让你学会了在工作中培养自我肯定。'
                    }
                },
                '现在': {
                    love: {
                        upright: '当前你在感情中展现出强大的内在力量和勇气，能够用温柔的方式处理关系中的挑战。你的耐心和同情心让关系更加稳固。',
                        reversed: '现在可能在感情中感到缺乏自信或内在力量。建议重新连接自己的内在资源，培养面对关系挑战的勇气。'
                    },
                    career: {
                        upright: '现在你在职业上正处于力量的高峰期，拥有面对挑战的勇气和内在力量。这是展现领导才能和影响力的时机。',
                        reversed: '目前职业发展可能感到缺乏自信或内在力量。建议重新连接自己的内在资源，培养面对挑战的勇气。'
                    }
                },
                '未来': {
                    love: {
                        upright: '未来你将通过内在的力量和勇气建立一段深厚而稳固的感情关系。你的温柔和力量将吸引到真正理解你价值的伴侣。',
                        reversed: '未来感情发展需要避免软弱无力或过度控制。真正的力量来自于内在的平静和自信，而非外在的强势。'
                    },
                    career: {
                        upright: '预示着你将在职业上展现出卓越的领导才能和内在力量，成功克服所有挑战，达到事业的高峰。',
                        reversed: '未来职业发展需要避免缺乏自信或内在力量。培养自己的领导才能和面对挑战的勇气是成功的关键。'
                    }
                }
            },
            // 命运之轮牌的深度解读
            10: {
                '过去': {
                    love: {
                        upright: '过去的感情经历了重要的转折点，可能是意外的相遇或关系的重大变化。这些命运的安排让你学会了接受生活的不可预测性。',
                        reversed: '过去在感情中可能抗拒了必要的改变或错失了机会，导致关系停滞。这些经历让你学会了顺应命运的流转。'
                    },
                    career: {
                        upright: '过去的职业发展经历了重要的机遇和转折，可能是意外的晋升或职业方向的重大改变。这些命运的安排让你来到了现在的位置。',
                        reversed: '过去可能在职业发展上错失了重要的机会或抗拒了必要的改变。这些教训让你学会了更加灵活地适应变化。'
                    }
                },
                '现在': {
                    love: {
                        upright: '当前你的感情生活正处于重要的转折点，命运的齿轮正在转动。保持开放的心态，迎接即将到来的变化和机遇。',
                        reversed: '现在可能在感情中感到停滞或抗拒变化。建议学会接受生活的流转，有时候放手才能获得新的开始。'
                    },
                    career: {
                        upright: '现在你正处于职业发展的关键转折点，新的机会和可能性正在出现。保持警觉，抓住命运带来的机遇。',
                        reversed: '目前职业发展可能感到停滞或面临意外的挫折。建议学会在变化中寻找机会，转机往往隐藏在挑战之中。'
                    }
                },
                '未来': {
                    love: {
                        upright: '未来预示着感情生活将迎来重要的转机和新的开始。命运的安排将带来意想不到的美好相遇或关系的积极变化。',
                        reversed: '未来感情发展可能面临周期性的低谷或挑战。学会在困难时期保持希望，因为命运之轮总会再次转向上升。'
                    },
                    career: {
                        upright: '预示着职业发展将迎来重要的机遇和转折点，可能是新的工作机会、晋升或事业方向的重大改变。',
                        reversed: '未来职业发展可能面临一些周期性的挑战或需要重新开始的状况。学会在变化中保持适应性和韧性。'
                    }
                }
            },
            // 太阳牌的深度解读
            19: {
                '过去': {
                    love: {
                        upright: '过去的感情中，你曾经经历过充满阳光和快乐的美好时光。那段时期关系充满了活力、乐观和深度理解，让你体验到了爱情最美好的一面。',
                        reversed: '过去在感情中可能经历过暂时的快乐或表面的阳光，但缺乏深度的实质性内容。这些经历让你学会了在爱情中追求真正的内在丰盛。'
                    },
                    career: {
                        upright: '过去在职业上经历过成功的时期，获得了认可和成就感。那个阶段你的才华得到了充分展现，为现在的职业地位奠定了基础。',
                        reversed: '过去可能在职业上追求表面的成功而忽视了内在的满足感。这些教训让你重新定义了成功和成就的意义。'
                    }
                },
                '现在': {
                    love: {
                        upright: '当前你的感情生活充满了阳光、活力和乐观。这是一段关系最美好的时期，享受这份纯粹的幸福和深度连接。',
                        reversed: '现在可能在感情中感到缺乏真正的快乐或内在的阳光。建议重新连接自己的内在光芒，找回对生活的热情。'
                    },
                    career: {
                        upright: '现在你正处于事业的光明时期，成功和认可正向你涌来。这是享受劳动成果和展现才华的最佳时机。',
                        reversed: '目前职业发展可能感到缺乏方向或内在动力。建议重新发现自己的热情所在，找回工作的意义和乐趣。'
                    }
                },
                '未来': {
                    love: {
                        upright: '未来预示着一段充满阳光、喜悦和深度理解的感情关系。这将是一段让你感到完全被看见、被欣赏的幸福关系。',
                        reversed: '未来感情发展需要避免表面的乐观而忽视真实的情感需求。真正的阳光来自于内在的丰盛和外在的和谐统一。'
                    },
                    career: {
                        upright: '预示着你将在职业上取得辉煌的成功和广泛的认可。你的才华将得到充分展现，事业将迎来最光明的时期。',
                        reversed: '未来职业发展需要注意避免为了外在成就而牺牲内在快乐。真正的成功包含外在成就和内在满足的平衡。'
                    }
                }
            }
            // 可以继续添加其他牌的深度解读...
        };

        // 获取对应牌的解读
        const cardInterpretations = tarotInterpretations[card.id];
        if (!cardInterpretations) {
            return null; // 如果没有找到专业解读，返回null使用默认解读
        }

        const timeInterpretation = cardInterpretations[timePosition];
        if (!timeInterpretation) {
            return null;
        }

        const questionInterpretation = timeInterpretation[questionType];
        if (!questionInterpretation) {
            return null;
        }

        return questionInterpretation[orientation];
    }

    // 生成综合故事线解读
    const generateStorylineInterpretation = () => {
        const timeReadings = generateTimeBasedInterpretation();
        const questionType = AppState.selectedQuestionType;

        // 分析整体发展趋势
        const overallTrend = analyzeOverallTrend(timeReadings);

        // 生成连贯的故事线
        const storyline = `
            <div class="storyline-interpretation">
                <h4>📖 命运故事线<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Destiny Storyline</span></h4>
                <div class="timeline-reading">
                    ${timeReadings.map((reading, index) => {
                        // 清理解读内容，移除重复的时间信息
                        let cleanInterpretation = reading.detailedInterpretation || '';

                        // 提取纯文本部分，去掉HTML标签
                        const timeText = reading.position.replace(/<br>.*$/, '').replace(/<[^>]*>/g, '');
                        const cardText = reading.card.name || '';
                        const orientationText = reading.orientation.replace(/<br>.*$/, '').replace(/<[^>]*>/g, '');

                        // 如果解读内容为空或undefined，不显示任何内容
                        if (!cleanInterpretation || cleanInterpretation === 'undefined') {
                            cleanInterpretation = ''; // 使用空字符串，不显示废话
                        }

                        // 简化清理逻辑，避免复杂的正则表达式
                        try {
                            // 移除简单格式的重复内容
                            cleanInterpretation = cleanInterpretation.replace(/^过去的.*?显示着[，,\s]*/, '');
                            cleanInterpretation = cleanInterpretation.replace(/^现在的.*?显示着[，,\s]*/, '');
                            cleanInterpretation = cleanInterpretation.replace(/^未来的.*?显示着[，,\s]*/, '');
                            cleanInterpretation = cleanInterpretation.replace(/^Past.*?shows[，,\s]*/, '');
                            cleanInterpretation = cleanInterpretation.replace(/^Present.*?shows[，,\s]*/, '');
                            cleanInterpretation = cleanInterpretation.replace(/^Future.*?shows[，,\s]*/, '');

                            // 清理开头的多余空白和标点
                            cleanInterpretation = cleanInterpretation.replace(/^[，,\s：:]+/, '');

                            // 清理结尾的undefined
                            cleanInterpretation = cleanInterpretation.replace(/[undefined]+$/, '');
                        } catch (error) {
                            console.warn('清理解读内容时出错:', error);
                            // 如果清理出错，使用原始内容或空字符串
                            cleanInterpretation = reading.detailedInterpretation || '';
                        }

                        // 8. 确保内容以合适的文字开头（如果不是以中文或英文字母开头，可能清理过度了）
                        if (cleanInterpretation && !/^[\u4e00-\u9fa5a-zA-Z]/.test(cleanInterpretation.trim())) {
                            // 如果清理后内容不正常，使用空字符串
                            cleanInterpretation = '';
                        }

                        // 如果没有有效的解读内容，不显示该时间段
                        if (!cleanInterpretation || cleanInterpretation.trim() === '') {
                            return ''; // 返回空字符串，完全删除这个时间段
                        }

                        return `
                        <div class="time-period">
                            <div class="time-header">
                                <span class="time-icon">🕐</span>
                                <div class="time-keywords">
                                    <span class="time-title">${reading.position}</span>
                                    <span class="card-name">${reading.card.name}</span>
                                    <span class="card-orientation ${reading.orientation.includes('逆位') ? 'reversed-orientation' : ''}">${reading.orientation}</span>
                                </div>
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
                <div class="overall-trend">
                    <h5>🎯 整体发展趋势<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Overall Development Trend</span></h5>
                    <p>${overallTrend}</p>
                </div>
            </div>
        `;

        return storyline;
    };

    // 分析整体发展趋势
    function analyzeOverallTrend(timeReadings) {
        // 调试信息：检查实际数据
        console.log('=== 趋势分析调试信息 ===');
        console.log('timeReadings:', timeReadings);
        console.log('实际orientation数据:');
        timeReadings.forEach((r, i) => {
            console.log(`第${i+1}张: ${r.card.name}, orientation: "${r.orientation}"`);
        });

        // 正确计算逆位卡牌数量（orientation包含HTML标签）
        const reversedCount = timeReadings.filter(r => r.orientation.includes('逆位')).length;
        const questionType = AppState.selectedQuestionType;

        console.log(`逆位卡牌数量: ${reversedCount}`);
        console.log(`问题类型: ${questionType}`);

        let trendAnalysis = '';

        // 根据正位逆位组合分析趋势
        if (reversedCount === 0) {
            trendAnalysis = '三张正位卡牌形成了一个非常积极的发展轨迹，从过去的美好基础，到现在的有利时机，再到未来的光明前景，显示出事物正在向最好的方向发展。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Three upright cards form a very positive development trajectory, from a good foundation in the past, to favorable opportunities in the present, to a bright future, showing that things are developing in the best possible direction.</span>';
        } else if (reversedCount === 3) {
            trendAnalysis = '三张逆位卡牌提醒你正处于一个重要的转折点，虽然面临挑战，但这也是深刻反思和彻底改变的时机。通过正视问题，你将迎来真正的转机。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Three reversed cards remind you that you are at an important turning point. Although facing challenges, this is also a time for deep reflection and complete change. By facing problems directly, you will welcome a true turning point.</span>';
        } else if (reversedCount === 1) {
            const reversedIndex = timeReadings.findIndex(r => r.orientation.includes('逆位'));
            const timePositions = ['过去', '现在', '未来']; // 使用纯文本进行比较
            const reversedTime = timePositions[reversedIndex];

            if (reversedTime === '过去') {
                trendAnalysis = '过去的逆位卡牌显示你已经克服了曾经的困难，现在的正位能量和未来的美好前景都表明你正在向正确的方向发展。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">The reversed card in the past shows that you have overcome previous difficulties. The upright energy of the present and the bright prospects of the future both indicate that you are moving in the right direction.</span>';
            } else if (reversedTime === '现在') {
                trendAnalysis = '虽然目前面临一些挑战（现在的逆位卡牌），但过去的良好基础和未来的积极预示表明这只是暂时的困难，坚持下去就会看到曙光。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Although currently facing some challenges (reversed card in the present), the good foundation of the past and positive indications for the future suggest this is only temporary difficulty. Persistence will bring dawn.</span>';
            } else {
                trendAnalysis = '过去和现在的正位卡牌为你奠定了坚实的基础，虽然未来需要注意潜在挑战（未来的逆位卡牌），但你的智慧和经验将帮助你成功应对，迎来更美好的发展。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">The upright cards of the past and present have laid a solid foundation for you. Although potential challenges in the future need attention (reversed card in the future), your wisdom and experience will help you respond successfully and welcome better development.</span>';
            }
        } else if (reversedCount === 2) {
            // 找出两个逆位卡牌的位置
            const reversedIndexes = timeReadings.map((r, i) => r.orientation.includes('逆位') ? i : -1).filter(i => i !== -1);
            const timePositions = ['过去', '现在', '未来'];
            const reversedTimes = reversedIndexes.map(i => timePositions[i]);
            const uprightIndex = timeReadings.findIndex(r => !r.orientation.includes('逆位'));
            const uprightTime = timePositions[uprightIndex];

            if (reversedTimes.includes('现在') && reversedTimes.includes('未来')) {
                trendAnalysis = `现在和未来的卡牌都处于逆位，提醒你需要重新审视当前的计划和未来的方向。虽然过去有良好基础，但现在需要调整策略，未来要更加谨慎。过去的正位能量是你应对当前挑战的重要支撑。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">The present and future cards are both reversed, reminding you to re-examine current plans and future directions. Although there is a good foundation from the past, adjustments are needed now and more caution is required for the future. The upright energy from the past is important support for dealing with current challenges.</span>`;
            } else if (reversedTimes.includes('过去') && reversedTimes.includes('现在')) {
                trendAnalysis = `过去和现在的挑战表明你可能一直在经历一些困难，但未来的正位卡牌带来希望。保持信心，光明的前景就在前方等待着你。未来的正位能量是你前进的最大动力。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Challenges in the past and present suggest you may have been experiencing difficulties, but the upright card for the future brings hope. Maintain faith, as bright prospects await you ahead. The upright energy of the future is your greatest motivation for moving forward.</span>`;
            } else if (reversedTimes.includes('过去') && reversedTimes.includes('未来')) {
                trendAnalysis = `过去和未来的逆位显示需要从过去的经历中吸取教训，同时为未来的挑战做好准备。现在的正位能量是你当前最大的优势和机遇，好好把握当下。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Reversed cards in the past and future indicate the need to learn from past experiences while preparing for future challenges. The upright energy of the present is your greatest current advantage and opportunity - seize the moment.</span>`;
            } else {
                trendAnalysis = `两张逆位卡牌提醒你需要关注特定领域的问题，而一张正位卡牌显示出你的优势所在。平衡处理挑战和机遇是当前的关键。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Two reversed cards remind you to pay attention to issues in specific areas, while one upright card shows your strengths. Balancing challenges and opportunities is the current key.</span>`;
            }
        } else {
            trendAnalysis = '卡牌的组合显示出独特的能量配置，需要根据具体情况来分析。建议关注每张卡牌的具体含义，综合分析整体趋势。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">The combination of cards shows a unique energy configuration that needs to be analyzed according to specific circumstances. It is recommended to focus on the specific meaning of each card and analyze the overall trend comprehensively.</span>';
        }

        // 根据问题类型补充具体建议
        const specificAdvice = {
            love: '在感情关系中，建议保持真诚沟通，用理解化解分歧，相信爱的力量能够克服一切困难。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">In relationships, maintain sincere communication, resolve differences with understanding, and believe that the power of love can overcome all difficulties.</span>',
            career: '在事业发展上，建议保持专注和耐心，相信自己的能力，同时保持学习和适应的态度。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">In career development, maintain focus and patience, trust your abilities, while maintaining an attitude of learning and adaptation.</span>',
            relationship: '在人际交往中，建议保持开放和包容的心态，用善意对待他人，建立深厚而持久的友谊。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">In interpersonal interactions, maintain an open and inclusive mindset, treat others with kindness, and build deep and lasting friendships.</span>',
            growth: '在个人成长路上，建议保持好奇心和勇气，相信内在的智慧，勇敢探索未知的可能性。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">On the path of personal growth, maintain curiosity and courage, trust your inner wisdom, and bravely explore unknown possibilities.</span>',
            fortune: '在运势流转中，建议保持积极乐观的心态，把握机遇，同时保持谦逊和感恩之心。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">As fortune flows, maintain a positive and optimistic mindset, seize opportunities, while remaining humble and grateful.</span>'
        };

        console.log(`生成的趋势分析: ${trendAnalysis.substring(0, 100)}...`);
        console.log('=== 趋势分析结束 ===');

        return trendAnalysis + (specificAdvice[questionType] || '');
    }

    // 计算时间维度的运势指数
    const calculateFortuneIndex = () => {
        let totalScore = 0;

        AppState.selectedCards.forEach((card, index) => {
            // 基础分数根据卡牌类型
            const baseScores = {
                0: 65, 1: 70, 2: 75, 3: 90, 4: 70, 5: 60, 6: 95, 7: 75, 8: 85, 9: 50,
                10: 60, 11: 75, 12: 45, 13: 40, 14: 80, 15: 35, 16: 30, 17: 90, 18: 55,
                19: 95, 20: 75, 21: 90
            };

            const cardScore = baseScores[card.id] || 60;

            // 正位加分，逆位减分
            const finalScore = card.isReversed ? cardScore - 20 : cardScore + 10;

            // 时间权重：过去25%，现在40%，未来35%
            const timeWeight = index === 0 ? 0.25 : index === 1 ? 0.4 : 0.35;
            totalScore += finalScore * timeWeight;
        });

        return Math.max(0, Math.min(100, Math.round(totalScore)));
    };

    // 计算和谐指数
    const calculateHarmonyIndex = () => {
        const reversedCount = AppState.selectedCards.filter(card => card.isReversed).length;
        const harmonyScore = 100 - (reversedCount * 25); // 每张逆位卡减25分
        return Math.max(0, Math.min(100, harmonyScore));
    };

    const fortuneIndex = calculateFortuneIndex();
    const harmonyIndex = calculateHarmonyIndex();
    const storylineInterpretation = generateStorylineInterpretation();
    const timeBasedAnalysis = generateTimeBasedInterpretation();

    console.log('📊 生成的时间维度分析:', timeBasedAnalysis);
    console.log('📈 开始分析整体趋势...');

    const overallTrend = analyzeOverallTrend(timeBasedAnalysis);
    console.log('📈 趋势分析完成');

    return {
        question: questionNames[AppState.selectedQuestionType],
        cards: AppState.selectedCards,
        storylineInterpretation: storylineInterpretation,
        fortuneIndex: fortuneIndex,
        harmonyIndex: harmonyIndex,
        timeBasedAnalysis: timeBasedAnalysis,
        overallTrend: overallTrend,
        guidance: `塔罗牌通过时间维度为你揭示了事物发展的完整轨迹。记住，过去无法改变，但可以从中学习；现在是你行动的力量所在；未来充满了无限的可能性。相信自己的选择，勇敢地书写属于你的命运故事。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">The Tarot cards reveal the complete trajectory of development through time dimensions. Remember, the past cannot be changed, but you can learn from it; the present is where your power to act lies; the future is filled with infinite possibilities. Trust your choices and bravely write your own destiny story.</span>`
    };
}

// 生成智能默认解读内容
function generateDefaultInterpretation(cardName, timePosition, isReversed, questionType) {
    const timeInterpretations = {
        '过去': {
            love: { upright: '感情中你曾经怀着纯真的心开始新的篇章，那份勇气和信任为你的情感世界带来了宝贵的经历。', reversed: '过去的感情经历可能有些冲动或缺乏方向，但这些经历让你学会了在感情中更加成熟和谨慎。' },
            career: { upright: '你曾经勇敢地踏上新的职业道路，虽然充满未知，但那份冒险精神为你打开了新的可能性。', reversed: '过去的职业选择可能显得不够深思熟虑，但这些教训让你现在更加注重规划和目标设定。' },
            relationship: { upright: '在人际关系中，你曾经以开放和真诚的态度对待他人，建立了许多有意义的连接。', reversed: '过去的人际关系中可能存在过天真或轻信的情况，这些经历让你学会了更好地辨别和保护自己。' },
            growth: { upright: '你曾经以充满好奇和勇气的心态面对成长，每一次尝试都让你变得更加坚强和智慧。', reversed: '过去的成长过程中可能有些鲁莽或缺乏方向，但这些经历塑造了今天更加成熟的你。' },
            fortune: { upright: '过去的运势中充满了新的机遇和可能性，你的积极态度为你带来了许多宝贵的机会。', reversed: '过去的运势可能有些不稳定，但这些起伏让你学会了如何在变化中保持平衡。' }
        },
        '现在': {
            love: { upright: '当前正是以全新心态体验感情的美好时机，保持开放和真诚，爱情将在最恰当的时刻到来。', reversed: '现在的感情状态需要更多的内省和思考，不要急于做决定，先找到内心的平衡和清晰。' },
            career: { upright: '现在是展现创造力和执行力的最佳时机，所有的资源都已齐备，大胆行动，成功就在眼前。', reversed: '目前的职业发展需要重新审视目标和方向，停下来思考将帮助你找到更清晰的道路。' },
            relationship: { upright: '现在是你建立深厚人际关系的黄金时期，用真诚和善意对待他人，将收获珍贵的友谊。', reversed: '当前的人际关系需要更多的耐心和理解，避免急躁，给彼此更多的时间和空间。' },
            growth: { upright: '现在正是个人成长的加速期，你的学习和探索将带来深刻的转变和提升。', reversed: '目前的成长过程可能遇到瓶颈，需要调整方法或寻求新的视角来突破。' },
            fortune: { upright: '当前的运势非常有利，把握住这个黄金时期，你的努力将得到丰厚的回报。', reversed: '现在的运势需要更多的谨慎和耐心，稳扎稳打比冒进更有效。' }
        },
        '未来': {
            love: { upright: '未来预示着一段美好的感情即将开始，保持开放的心态，准备好迎接改变和惊喜。', reversed: '未来在感情方面需要更加谨慎和成熟，先完善自己，美好的关系自然会到来。' },
            career: { upright: '未来将迎来重要的职业机遇和突破，保持勇气和准备，成功将在最意想不到的地方出现。', reversed: '未来的职业发展需要避免盲目冒险，做好充分准备，在机遇来临时才能稳稳抓住。' },
            relationship: { upright: '未来的人际关系将更加深入和有意义，你将建立起真正理解和支持你的朋友圈。', reversed: '未来在人际交往中需要更加真实和坦诚，放下面具，建立真正的心灵连接。' },
            growth: { upright: '未来的个人成长将达到新的高度，你将获得深刻的洞察力和内在智慧。', reversed: '未来的成长之路需要更加专注和坚持，克服挑战后将迎来质的飞跃。' },
            fortune: { upright: '未来的运势一片光明，你的积极行动将创造更多的好运和机遇。', reversed: '未来的运势需要你更加主动去创造，被动等待将错过许多机会。' }
        }
    };

    // 获取对应的解读内容
    const timeKey = timePosition.includes('过去') ? '过去' :
                   timePosition.includes('现在') ? '现在' :
                   timePosition.includes('未来') ? '未来' : '现在';

    const questionKey = questionType || 'growth';
    const orientationKey = isReversed ? 'reversed' : 'upright';

    let interpretation = timeInterpretations[timeKey]?.[questionKey]?.[orientationKey];

    // 如果没有找到，使用通用解读
    if (!interpretation) {
        const generalInterpretations = {
            upright: `${cardName}牌在这个时间位置传递着积极的能量。这是一个充满希望和机遇的时刻，相信自己的直觉，勇敢地向前迈进。宇宙正在为你铺平道路，你的努力将会得到应有的回报。`,
            reversed: `${cardName}牌以逆位出现，提醒你需要更加谨慎和内省。这是一个反思和调整的时期，不要急于求成。通过深入思考和适当调整，你将找到更好的前进方向。`
        };
        interpretation = generalInterpretations[orientationKey];
    }

    // 添加英文翻译
    const englishTranslation = getEnglishInterpretation(cardName, timeKey, isReversed, questionType);
    return interpretation + englishTranslation;
}

// 获取英文翻译
function getEnglishInterpretation(cardName, timePosition, isReversed, questionType) {
    const englishMeanings = {
        '过去': 'in the past',
        '现在': 'in the present',
        '未来': 'in the future'
    };

    const cardInterpretations = {
        '愚人': { upright: 'new beginnings, innocence, spontaneity, free spirit', reversed: 'naivety, recklessness, taking unnecessary risks' },
        '魔术师': { upright: 'manifestation, resourcefulness, power, skill', reversed: 'manipulation, poor planning, untapped potential' },
        '女祭司': { upright: 'intuition, sacred knowledge, divine feminine, subconscious mind', reversed: 'secrets, withdrawn, intuition blocked' },
        '皇后': { upright: 'femininity, beauty, nature, abundance, creative expression', reversed: 'dependence, smothering, emptiness, creative block' },
        '皇帝': { upright: 'authority, structure, control, father figure', reversed: 'domination, excessive control, rigidity, inflexibility' },
        '教皇': { upright: 'spiritual wisdom, religious beliefs, conformity, tradition', reversed: 'challenge to beliefs, freedom, unconventional thinking' }
    };

    const timeText = englishMeanings[timePosition] || 'at this time';
    const cardMeaning = cardInterpretations[cardName]?.[isReversed ? 'reversed' : 'upright'] || 'provides guidance and insight';

    return `<br><br><span style="font-size:0.9em;color:rgba(184,184,184,0.8);"><strong>English Translation:</strong> The ${cardName} card (${isReversed ? 'reversed' : 'upright'}) ${timeText} represents ${cardMeaning}.</span>`;
}

// 显示结果界面 - 优化版本，支持时间维度解读
function showResultScreen(interpretation) {
    // 设置问题标题
    const resultQuestion = document.getElementById('resultQuestion');
    if (resultQuestion && interpretation.question) {
        resultQuestion.textContent = interpretation.question;
    } else if (resultQuestion) {
        resultQuestion.textContent = '塔罗占卜指引';
    }

    // 显示抽取的卡牌（按时间顺序排列）
    const resultCardsContainer = document.getElementById('resultCards');
    resultCardsContainer.innerHTML = '';

    const timePositions = ['过去<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Past</span>',
                             '现在<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Present</span>',
                             '未来<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Future</span>'];
    interpretation.cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'result-card';
        cardElement.innerHTML = `
            <div class="time-position">${timePositions[index] || ''}</div>
            <img src="images/${card.file || ''}" alt="${card.name || ''}" style="${card.isReversed ? 'transform: rotate(180deg);' : ''}">
            <h4>${card.name || ''}</h4>
            <div class="english-name">${card.english || ''}</div>
            <div class="orientation" style="color: ${card.isReversed ? '#ff4444' : '#d4af37'}; font-weight: ${card.isReversed ? 'bold' : 'normal'};">${card.isReversed ? '逆位<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Reversed</span>' : '正位<br><span style="font-size:0.7em;color:rgba(212,175,55,0.8);">Upright</span>'}</div>
            <div class="meaning">${card.isReversed ? (card.reversed || '') : (card.upright || '')}</div>
        `;
        resultCardsContainer.appendChild(cardElement);

        // 添加动画延迟
        setTimeout(() => {
            cardElement.style.opacity = '1';
            cardElement.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // 显示时间维度的指数分析
    const indicesHtml = `
        <div class="indices-analysis">
            <div class="index-card">
                <h4>🌟 运势指数<br><span style="font-size:0.6em;color:rgba(212,175,55,0.8);">Fortune Index</span></h4>
                <div class="index-score">${interpretation.fortuneIndex}分<br><span style="font-size:0.8em;color:rgba(184,184,184,0.7);">points</span></div>
                <div class="index-bar">
                    <div class="index-fill fortune-fill" style="width: ${interpretation.fortuneIndex}%"></div>
                </div>
                <p>${generateFortuneAnalysis(interpretation.fortuneIndex)}</p>
            </div>
            <div class="index-card">
                <h4>🕊️ 和谐指数<br><span style="font-size:0.6em;color:rgba(212,175,55,0.8);">Harmony Index</span></h4>
                <div class="index-score">${interpretation.harmonyIndex}分<br><span style="font-size:0.8em;color:rgba(184,184,184,0.7);">points</span></div>
                <div class="index-bar">
                    <div class="index-fill harmony-fill" style="width: ${interpretation.harmonyIndex}%"></div>
                </div>
                <p>${generateHarmonyAnalysis(interpretation.harmonyIndex)}</p>
            </div>
        </div>
    `;

    // 显示解读内容
    const interpretationContent = document.getElementById('interpretationContent');
    interpretationContent.innerHTML = `
        <div class="comprehensive-interpretation">
            <h3>🔮 时间维度解读<br><span style="font-size:0.6em;color:rgba(212,175,55,0.8);">Time Dimension Reading</span></h3>
            ${indicesHtml}
            <div class="storyline-section">
                ${interpretation.storylineInterpretation || ''}
            </div>
            <div class="guidance-section">
                <h4>💫 命运指引<br><span style="font-size:0.6em;color:rgba(212,175,55,0.8);">Destiny Guidance</span></h4>
                <p>${interpretation.guidance || ''}</p>
            </div>
        </div>
    `;

    // 添加样式支持
    addTimeBasedInterpretationStyles();

    // 切换到结果界面
    showScreen('resultScreen');

    // 重新绑定按钮事件并应用智能尺寸
    setTimeout(() => {
        // 按钮现在直接使用onclick="location.reload()"，不需要事件绑定

        // 应用智能卡牌尺寸到新创建的结果卡牌
        if (window.smartCardSizer) {
            window.smartCardSizer.setupResponsiveCards();
        }
    }, 100);
}

// 生成运势分析
function generateFortuneAnalysis(score) {
    if (score >= 85) {
        return '运势极佳！宇宙的能量完全站在你这边，这是实现梦想和目标的黄金时期。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Fortune is excellent! The cosmic energy is completely on your side. This is a golden period to realize dreams and goals.</span>';
    } else if (score >= 70) {
        return '运势良好，大部分事情都会顺利进行，继续保持积极的心态和行动力。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Good fortune! Most things will proceed smoothly. Continue maintaining a positive mindset and proactive approach.</span>';
    } else if (score >= 55) {
        return '运势平稳，既有机遇也有挑战，关键在于如何把握时机和应对困难。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Fortune is stable with both opportunities and challenges. The key lies in seizing opportunities and handling difficulties.</span>';
    } else if (score >= 40) {
        return '运势需要努力，虽然面临一些阻碍，但正是这些挑战让你变得更加坚强。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Fortune requires effort. Although facing some obstacles, these challenges will make you stronger.</span>';
    } else {
        return '运势处于低谷期，这是一个反思和积蓄力量的时期，为未来的转机做准备。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Fortune is in a low period. This is a time for reflection and gathering strength to prepare for future opportunities.</span>';
    }
}

// 生成和谐分析
function generateHarmonyAnalysis(score) {
    if (score >= 80) {
        return '内在和谐度很高，你的身心处于平衡状态，能够从容应对各种情况。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Inner harmony is high. Your body and mind are in a balanced state, able to handle various situations with ease.</span>';
    } else if (score >= 60) {
        return '整体和谐良好，虽然偶有小波动，但你有能力维持内在的平衡。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Overall harmony is good. Although there are occasional fluctuations, you have the ability to maintain inner balance.</span>';
    } else if (score >= 40) {
        return '和谐度中等，需要更多关注内心的声音，调整自己的状态。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Harmony is moderate. You need to pay more attention to your inner voice and adjust your state.</span>';
    } else {
        return '和谐度较低，建议花时间进行自我反思和调整，寻找内心的平静。<br><span style="font-size:0.85em;color:rgba(184,184,184,0.8);">Harmony is relatively low. It is recommended to spend time on self-reflection and adjustment to find inner peace.</span>';
    }
}

// 添加时间维度解读的样式
function addTimeBasedInterpretationStyles() {
    let styleElement = document.getElementById('time-interpretation-styles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'time-interpretation-styles';
        document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
        .comprehensive-interpretation {
            max-width: 100%;
            margin: 0 auto;
        }

        .storyline-interpretation {
            background: linear-gradient(135deg, rgba(45, 27, 61, 0.4), rgba(26, 26, 46, 0.4));
            border-radius: 18px;
            padding: 30px;
            margin: 25px 0;
            border: 2px solid rgba(212, 175, 55, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
        }

        .storyline-interpretation::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #d4af37, transparent);
            animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }

        .timeline-reading {
            margin: 25px 0;
            position: relative;
        }

        .timeline-reading::before {
            content: '';
            position: absolute;
            left: 20px;
            top: 40px;
            bottom: 40px;
            width: 2px;
            background: linear-gradient(180deg, #d4af37, rgba(212, 175, 55, 0.3));
            border-radius: 1px;
        }

        .time-period {
            margin-bottom: 30px;
            padding: 20px;
            background: rgba(0, 0, 0, 0.25);
            border-radius: 15px;
            border-left: 4px solid #d4af37;
            position: relative;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .time-period:hover {
            transform: translateX(5px);
            background: rgba(0, 0, 0, 0.35);
            box-shadow: 0 5px 20px rgba(212, 175, 55, 0.2);
        }

        .time-period:last-child {
            margin-bottom: 0;
        }

        .time-period h5 {
            color: #d4af37;
            margin: 0 0 12px 0;
            font-size: 16px;
            font-weight: bold;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .time-period p {
            color: #fff;
            line-height: 1.7;
            margin: 0;
            font-size: 15px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        .time-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            gap: 15px;
        }

        .time-icon {
            font-size: 1.5rem;
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.1));
            border-radius: 50%;
            border: 2px solid rgba(212, 175, 55, 0.3);
            box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
            position: relative;
            z-index: 2;
        }

        .time-info {
            flex: 1;
        }

        .time-keywords {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
        }

        .time-title {
            margin: 0;
            color: #d4af37;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            padding: 6px 12px;
            background: rgba(212, 175, 55, 0.1);
            border-radius: 20px;
            border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .card-name {
            margin: 0;
            color: #ffffff;
            font-size: 1rem;
            font-weight: 500;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
            padding: 6px 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card-orientation {
            display: inline-block;
            padding: 6px 12px;
            background: rgba(212, 175, 55, 0.1);
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            border: 1px solid rgba(212, 175, 55, 0.2);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        .card-orientation.reversed-orientation {
            background: rgba(255, 68, 68, 0.1);
            border-color: rgba(255, 68, 68, 0.3);
            color: #ff6b6b;
        }

        .time-content {
            padding-left: 59px;
            margin-top: 10px;
        }

        .time-content p {
            font-size: 14px;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.95);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        .overall-trend {
            margin-top: 25px;
            padding: 25px;
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(212, 175, 55, 0.08));
            border-radius: 15px;
            border: 2px solid rgba(212, 175, 55, 0.25);
            box-shadow: 0 4px 20px rgba(212, 175, 55, 0.1);
            position: relative;
        }

        .overall-trend h5 {
            color: #d4af37;
            margin: 0 0 20px 0;
            font-size: 18px;
            font-weight: bold;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            text-align: center;
        }

        .overall-trend p {
            color: rgba(255, 255, 255, 0.95);
            line-height: 1.8;
            font-size: 15px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
            text-align: justify;
        }

        .overall-trend p {
            color: #fff;
            line-height: 1.7;
            margin: 0;
        }

        .indices-analysis {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 25px 0;
        }

        .index-card {
            background: linear-gradient(135deg, rgba(45, 27, 61, 0.4), rgba(26, 26, 46, 0.4));
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .index-card h4 {
            color: #d4af37;
            margin: 0 0 15px 0;
            font-size: 16px;
        }

        .index-score {
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 10px;
        }

        .index-bar {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 15px;
        }

        .index-fill {
            height: 100%;
            border-radius: 4px;
            transition: width 1s ease;
        }

        .fortune-fill {
            background: linear-gradient(90deg, #f39c12, #f1c40f);
        }

        .harmony-fill {
            background: linear-gradient(90deg, #3498db, #2ecc71);
        }

        .index-card p {
            color: #fff;
            line-height: 1.5;
            margin: 0;
            font-size: 14px;
        }

        .guidance-section {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(26, 26, 46, 0.3));
            border-radius: 15px;
            padding: 25px;
            margin-top: 25px;
            border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .guidance-section h4 {
            color: #d4af37;
            margin: 0 0 15px 0;
            font-size: 18px;
            font-weight: bold;
        }

        .guidance-section p {
            color: #fff;
            line-height: 1.7;
            margin: 0;
        }

        .result-card {
            text-align: center;
            background: linear-gradient(135deg, rgba(45, 27, 61, 0.4), rgba(26, 26, 46, 0.4));
            border-radius: 12px;
            padding: 15px;
            border: 1px solid rgba(212, 175, 55, 0.2);
            transition: all 0.3s ease;
        }

        .time-position {
            background: rgba(212, 175, 55, 0.2);
            color: #d4af37;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 10px;
            display: inline-block;
        }

        .time-position .reversed-orientation {
            color: #ff4444 !important;
            background: rgba(255, 68, 68, 0.1);
            font-weight: bold;
        }

        /* 移动端响应式 */
        @media (max-width: 768px) {
            .indices-analysis {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .storyline-interpretation {
                padding: 20px;
            }

            .time-period {
                padding: 12px;
                margin-bottom: 20px;
            }

            .time-keywords {
                gap: 8px;
            }

            .time-title, .card-name, .card-orientation {
                font-size: 0.85rem;
                padding: 4px 8px;
            }

            .index-card {
                padding: 15px;
            }
        }

        @media (max-width: 480px) {
            .time-keywords {
                gap: 6px;
            }

            .time-title, .card-name, .card-orientation {
                font-size: 0.75rem;
                padding: 3px 6px;
            }
        }
    `;
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
    console.log('返回主页');
    AppState.isDivinationMode = false;
    AppState.selectedCards = [];
    AppState.selectedQuestionType = '';

    const container = document.getElementById('divinationContainer');
    if (container) {
        container.classList.remove('active');
    }

    // 延迟重启动画
    setTimeout(() => {
        startMainPageAnimation();
    }, 100);
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

// 图片预加载和优化系统 (极致性能版)
function initializeImageOptimization() {
    console.log('🚀 开始极致图片优化系统初始化...');

    // 检测浏览器能力
    const browserSupport = {
        webp: document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0,
        intersection: 'IntersectionObserver' in window,
        linkPreload: 'link' in document.createElement('link')
    };

    console.log('🌐 浏览器能力检测:', browserSupport);

    // 移动端检测
    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               (window.innerWidth <= 768 && 'ontouchstart' in window);
    };

    // 检测网络类型
    const getConnectionType = () => {
        if (typeof navigator !== 'undefined' && navigator.connection) {
            return {
                type: navigator.connection.effectiveType || '4g',
                downlink: navigator.connection.downlink || 10,
                rtt: navigator.connection.rtt || 50,
                saveData: navigator.connection.saveData || false
            };
        }
        return { type: '4g', downlink: 10, rtt: 50, saveData: false };
    };

    // 创建高级图片预加载管理器
    window.imagePreloader = {
        cache: new Map(),
        loadingPromises: new Map(),
        criticalImages: ['塔罗牌背面.png'],
        progressiveCache: new Map(), // 渐进式图片缓存
        lowResCache: new Map(),      // 低分辨率缓存
        preloadedSets: new Set(),   // 已预加载的集合

        // 移动端专用缓存
        mobileCache: new Map(),
        mobileLowResCache: new Map(),
        preloadingMobile: false,

        // 检测最佳图片格式
        getOptimalFormat: function() {
            return browserSupport.webp ? 'webp' : 'png';
        },

        // 移动端专用图片策略
        getMobileImageStrategy: function() {
            const connection = getConnectionType();
            const mobile = isMobile();

            if (!mobile) {
                return { quality: 'high', progressive: true, batchSize: 10, delay: 100 };
            }

            // 移动端根据网络状况调整策略
            if (connection.saveData || connection.type === 'slow-2g' || connection.type === '2g') {
                return {
                    quality: 'low',
                    progressive: false,
                    batchSize: 2,
                    delay: 1000,
                    maxSize: 50 * 1024 // 50KB
                };
            } else if (connection.type === '3g' || connection.downlink < 1.5) {
                return {
                    quality: 'medium',
                    progressive: true,
                    batchSize: 5,
                    delay: 500,
                    maxSize: 150 * 1024 // 150KB
                };
            } else {
                return {
                    quality: 'high',
                    progressive: true,
                    batchSize: 8,
                    delay: 200,
                    maxSize: 300 * 1024 // 300KB
                };
            }
        },

        // 生成多尺寸图片URL
        getImageUrls: function(baseFile) {
            const format = this.getOptimalFormat();
            const strategy = this.getMobileImageStrategy();
            const baseName = baseFile.replace(/\.[^.]+$/, '');

            if (isMobile()) {
                // 移动端专用URL生成
                return {
                    lowRes: `images/mobile/${baseName}_mobile_low.${format}`,
                    mediumRes: `images/mobile/${baseName}_mobile_medium.${format}`,
                    highRes: strategy.quality === 'high' ? `images/${baseFile}` : `images/mobile/${baseName}_mobile.${format}`,
                    mobile: `images/mobile/${baseName}_mobile.${format}`,
                    progressive: strategy.progressive ? `images/progressive/${baseName}_progressive.${format}` : null
                };
            } else {
                // 桌面端URL生成
                return {
                    lowRes: `images/lowres/${baseName}_low.${format}`,
                    mediumRes: `images/${baseFile}`,
                    highRes: `images/${baseFile}`,
                    progressive: `images/progressive/${baseName}_progressive.${format}`
                };
            }
        },

        // 创建渐进式图片加载
        createProgressiveLoader: function(cardFile) {
            const urls = this.getImageUrls(cardFile);

            return new Promise((resolve) => {
                const progressiveImg = {
                    element: document.createElement('div'),
                    currentSrc: urls.lowRes,
                    loaded: { low: false, medium: false, high: false }
                };

                // 1. 立即加载低分辨率版本
                const lowResImg = new Image();
                lowResImg.onload = () => {
                    progressiveImg.loaded.low = true;
                    this.lowResCache.set(cardFile, lowResImg);
                    resolve(progressiveImg);
                };
                lowResImg.src = urls.lowRes;

                // 2. 异步加载中分辨率版本
                const mediumImg = new Image();
                mediumImg.onload = () => {
                    progressiveImg.loaded.medium = true;
                    progressiveImg.currentSrc = urls.mediumRes;
                    this.cache.set(cardFile, mediumImg);
                };
                mediumImg.src = urls.mediumRes;

                // 3. 异步加载高分辨率版本
                const highImg = new Image();
                highImg.onload = () => {
                    progressiveImg.loaded.high = true;
                    progressiveImg.currentSrc = urls.highRes;
                    this.cache.set(cardFile, highImg);
                };
                setTimeout(() => {
                    highImg.src = urls.highRes;
                }, 500 + Math.random() * 1500);
            });
        },

        // 移动端快速加载
        mobileQuickLoad: function(cardFile, priority = 'normal') {
            if (!isMobile()) {
                return this.createProgressiveLoader(cardFile);
            }

            const strategy = this.getMobileImageStrategy();
            const urls = this.getImageUrls(cardFile);
            const connection = getConnectionType();

            return new Promise((resolve) => {
                const mobileImg = {
                    element: document.createElement('div'),
                    currentSrc: urls.lowRes,
                    loaded: { initial: false, full: false },
                    strategy: strategy
                };

                // 根据网络状况选择加载策略
                if (strategy.quality === 'low' || connection.saveData) {
                    // 极简模式：只加载最小尺寸
                    const img = new Image();
                    img.onload = () => {
                        mobileImg.loaded.initial = true;
                        mobileImg.loaded.full = true;
                        this.mobileLowResCache.set(cardFile, img);
                        console.log(`📱 移动端极简加载完成: ${cardFile}`);
                        resolve(mobileImg);
                    };
                    img.src = urls.lowRes;
                } else if (strategy.quality === 'medium') {
                    // 中等模式：先显示低质量，再加载中等质量
                    const lowImg = new Image();
                    lowImg.onload = () => {
                        mobileImg.loaded.initial = true;
                        this.mobileLowResCache.set(cardFile, lowImg);
                        resolve(mobileImg); // 先返回，让用户看到内容

                        // 后台加载中等质量
                        const mediumImg = new Image();
                        mediumImg.onload = () => {
                            mobileImg.loaded.full = true;
                            mobileImg.currentSrc = urls.mediumRes;
                            this.mobileCache.set(cardFile, mediumImg);
                            console.log(`📱 移动端中等质量加载完成: ${cardFile}`);
                        };
                        setTimeout(() => {
                            mediumImg.src = urls.mediumRes;
                        }, strategy.delay);
                    };
                    lowImg.src = urls.lowRes;
                } else {
                    // 高质量模式：渐进式加载
                    this.createProgressiveLoader(cardFile).then(resolve);
                }
            });
        },

        // 移动端批量预加载
        mobileBatchPreload: function(cardFiles, batchSize = null) {
            if (!isMobile() || this.preloadingMobile) return Promise.resolve();

            const strategy = this.getMobileImageStrategy();
            const size = batchSize || strategy.batchSize;

            console.log(`📱 开始移动端批量预加载，批次大小: ${size}`);

            return new Promise((resolve) => {
                this.preloadingMobile = true;
                let loadedCount = 0;
                const totalBatches = Math.ceil(cardFiles.length / size);

                const loadBatch = (batchIndex) => {
                    if (batchIndex >= totalBatches) {
                        this.preloadingMobile = false;
                        console.log(`📱 移动端批量预加载完成，总计: ${cardFiles.length} 张`);
                        resolve();
                        return;
                    }

                    const start = batchIndex * size;
                    const end = Math.min(start + size, cardFiles.length);
                    const batch = cardFiles.slice(start, end);

                    const batchPromises = batch.map(cardFile => {
                        return this.mobileQuickLoad(cardFile, 'background').catch(err => {
                            console.warn(`📱 移动端预加载失败: ${cardFile}`, err);
                            return null;
                        });
                    });

                    Promise.all(batchPromises).then(() => {
                        loadedCount += batch.length;
                        console.log(`📱 移动端批次 ${batchIndex + 1}/${totalBatches} 完成，已加载: ${loadedCount}/${cardFiles.length}`);

                        // 根据网络状况调整延迟
                        const delay = strategy.delay * (connection.saveData ? 2 : 1);
                        setTimeout(() => loadBatch(batchIndex + 1), delay);
                    });
                };

                loadBatch(0);
            });
        },

        // 使用 link preload API 进行预加载
        preloadWithLinkTag: function(imageSrc, priority = 'low') {
            if (!browserSupport.linkPreload) return null;

            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = `images/${imageSrc}`;

            if (priority === 'high') {
                link.onload = () => {
                    console.log(`⚡ 高优先级预加载完成: ${imageSrc}`);
                    link.remove();
                };
            }

            document.head.appendChild(link);
            return link;
        },

        // 极速预加载关键图片
        preloadCriticalImages: function() {
            console.log('⚡ 开始极速预加载关键图片...');

            const promises = this.criticalImages.map(imageSrc => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        this.cache.set(imageSrc, img);
                        console.log(`⚡ 关键图片极速加载完成: ${imageSrc}`);
                        resolve(img);
                    };
                    img.onerror = () => {
                        console.warn(`⚠️ 关键图片加载失败: ${imageSrc}`);
                        resolve(null);
                    };
                    img.src = `images/${imageSrc}`;
                });
            });

            return Promise.all(promises);
        },

        // 超智能卡牌图片加载
        loadCardImage: function(cardFile, priority = 'normal') {
            // 检查缓存
            if (this.cache.has(cardFile)) {
                return Promise.resolve(this.cache.get(cardFile));
            }

            // 检查是否正在加载
            if (this.loadingPromises.has(cardFile)) {
                return this.loadingPromises.get(cardFile);
            }

            const promise = this.createProgressiveLoader(cardFile);

            // 添加到加载队列
            this.loadingPromises.set(cardFile, promise);
            return promise;
        },

        // 激进批量预加载策略
        aggressivePreload: function() {
            console.log('🚀 开始激进预加载策略...');

            if (isMobile()) {
                console.log('📱 检测到移动端，使用移动端专用预加载策略');
                this.mobileAggressivePreload();
                return;
            }

            // 桌面端原有策略
            // 立即预加载前10张卡牌（最高优先级）
            const firstBatch = Array.from({length: 10}, (_, i) => tarotCards[i]);
            firstBatch.forEach((card, index) => {
                setTimeout(() => {
                    this.loadCardImage(card.file, 'high');
                }, index * 100); // 100ms间隔
            });

            // 分批预加载剩余卡牌
            setTimeout(() => {
                const remainingCards = tarotCards.slice(10);
                const batchSize = 5;

                for (let i = 0; i < remainingCards.length; i += batchSize) {
                    const batch = remainingCards.slice(i, i + batchSize);
                    setTimeout(() => {
                        batch.forEach(card => {
                            this.loadCardImage(card.file, 'normal');
                        });
                    }, 2000 + (i / batchSize) * 500); // 2秒开始，每500ms一批
                }
            }, 1000);
        },

        // 移动端激进预加载策略
        mobileAggressivePreload: function() {
            const strategy = this.getMobileImageStrategy();
            const connection = getConnectionType();

            console.log(`📱 移动端预加载策略: ${strategy.quality}质量, 批次${strategy.batchSize}, 延迟${strategy.delay}ms`);

            // 移动端优先加载关键图片
            const priorityFiles = this.criticalImages.slice(0, 2); // 减少优先加载数量
            this.mobileBatchPreload(priorityFiles, 1).then(() => {
                console.log('📱 移动端关键图片加载完成');

                // 分批加载常用卡牌（解读界面常用）
                const commonCards = [
                    '0. 愚人 (The Fool).png',
                    '1. 魔术师 (The Magician) .png',
                    '6. 恋人 (The Lovers).png',
                    '7. 战车 (The Chariot).png',
                    '10. 命运之轮 (Wheel of Fortune).png',
                    '13. 死神 (Death).png',
                    '16. 塔 (The Tower).png',
                    '21. 世界 (The World).png',
                    '塔罗牌背面.png'
                ];

                setTimeout(() => {
                    this.mobileBatchPreload(commonCards).then(() => {
                        console.log('📱 移动端常用卡牌加载完成');

                        // 最后根据网络状况决定是否继续预加载
                        if (strategy.quality === 'high' && !connection.saveData) {
                            setTimeout(() => {
                                const allCardFiles = tarotCards.slice(0, 12).map(card => card.file);
                                this.mobileBatchPreload(allCardFiles, Math.min(strategy.batchSize, 3));
                            }, 3000);
                        }
                    });
                }, strategy.delay * 2);
            });
        },

        // 网络优化：使用Service Worker进行后台加载
        setupBackgroundLoading: function() {
            if ('serviceWorker' in navigator) {
                // 这里可以注册Service Worker进行后台图片加载
                console.log('🔧 Service Worker支持可用，可配置后台加载');
            }
        },

        // 性能监控
        trackLoadingPerformance: function() {
            if ('performance' in window && 'measure' in performance) {
                performance.mark('image-loading-start');

                // 监控关键性能指标
                setTimeout(() => {
                    performance.mark('image-loading-end');
                    performance.measure('image-loading', 'image-loading-start', 'image-loading-end');

                    const measure = performance.getEntriesByName('image-loading')[0];
                    if (measure) {
                        console.log(`📊 图片加载性能: ${measure.duration.toFixed(2)}ms`);
                    }
                }, 5000);
            }
        },

        // 获取高级统计
        getAdvancedStats: function() {
            return {
                cached: this.cache.size,
                progressive: this.progressiveCache.size,
                lowRes: this.lowResCache.size,
                loading: this.loadingPromises.size,
                browserSupport: browserSupport,
                memoryUsage: (this.cache.size * 2.5 + this.progressiveCache.size * 1.2).toFixed(2) + 'MB'
            };
        }
    };

    // 移动端检测和初始化
    if (isMobile()) {
        console.log('📱 移动端设备检测到，启用移动端优化策略');
        const connection = getConnectionType();
        console.log(`📱 网络状况: ${connection.type}, 速度: ${connection.downlink}Mbps, 延迟: ${connection.rtt}ms`);

        // 移动端专用初始化
        window.imagePreloader.preloadCriticalImages().then(() => {
            console.log('📱 移动端关键图片加载完成');

            // 移动端激进预加载
            window.imagePreloader.aggressivePreload();
        });

        // 移动端性能监控
        setTimeout(() => {
            window.imagePreloader.trackLoadingPerformance();
        }, 2000); // 移动端延迟监控，避免影响性能

        // 移动端后台加载
        window.imagePreloader.setupBackgroundLoading();

        // 移动端网络变化监听
        if (typeof navigator !== 'undefined' && navigator.connection) {
            navigator.connection.addEventListener('change', () => {
                const newConnection = getConnectionType();
                console.log(`📱 网络变化: ${newConnection.type}, 重新评估加载策略`);
                // 重新启动预加载策略
                window.imagePreloader.aggressivePreload();
            });
        }
    } else {
        console.log('🖥️ 桌面端设备，使用标准优化策略');

        // 桌面端标准初始化
        window.imagePreloader.preloadCriticalImages().then(() => {
            console.log('⚡ 关键图片极速预加载完成');

            // 开始激进预加载策略
            window.imagePreloader.aggressivePreload();
        });

        // 设置性能监控
        setTimeout(() => {
            window.imagePreloader.trackLoadingPerformance();
        }, 1000);

        // 后台加载设置
        window.imagePreloader.setupBackgroundLoading();
    }

    // 智能缓存清理（更激进的策略）
    setInterval(() => {
        const stats = window.imagePreloader.getAdvancedStats();
        console.log('📊 图片缓存统计:', stats);

        // 根据内存使用情况调整缓存策略
        if (parseFloat(stats.memoryUsage) > 50) {
            // 内存使用过高，清理低分辨率缓存
            window.imagePreloader.lowResCache.clear();
            console.log('🧹 内存优化：清理低分辨率缓存');
        }

        if (window.imagePreloader.cache.size > 40) {
            // 清理最老的5个缓存项
            const keys = Array.from(window.imagePreloader.cache.keys()).slice(0, 5);
            keys.forEach(key => window.imagePreloader.cache.delete(key));
            console.log('🧹 智能缓存清理:', keys);
        }
    }, 20000); // 20秒清理一次
}