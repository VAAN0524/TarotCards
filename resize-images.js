const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

// 目标尺寸
const TARGET_WIDTH = 450;
const TARGET_HEIGHT = 768;

async function resizeImages() {
    const imagesDir = path.join(__dirname, 'images');
    const backupDir = path.join(imagesDir, 'backup');

    // 确保备份目录存在
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }

    // 获取所有PNG文件
    const files = fs.readdirSync(imagesDir).filter(file =>
        file.endsWith('.png') && !file.includes('塔罗牌背面')
    );

    console.log(`找到 ${files.length} 张塔罗牌图片需要处理...`);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, `resized_${file}`);

        try {
            console.log(`处理图片 ${i + 1}/${files.length}: ${file}`);

            // 加载原始图片
            const image = await loadImage(inputPath);

            // 创建画布
            const canvas = createCanvas(TARGET_WIDTH, TARGET_HEIGHT);
            const ctx = canvas.getContext('2d');

            // 计算缩放和居中
            const scale = Math.min(TARGET_WIDTH / image.width, TARGET_HEIGHT / image.height);
            const scaledWidth = image.width * scale;
            const scaledHeight = image.height * scale;
            const x = (TARGET_WIDTH - scaledWidth) / 2;
            const y = (TARGET_HEIGHT - scaledHeight) / 2;

            // 清空画布并绘制
            ctx.fillStyle = '#1e1e2e'; // 背景色
            ctx.fillRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT);

            // 绘制缩放后的图片
            ctx.drawImage(image, x, y, scaledWidth, scaledHeight);

            // 保存为PNG
            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(outputPath, buffer);

            // 获取文件大小信息
            const originalSize = fs.statSync(inputPath).size;
            const newSize = fs.statSync(outputPath).size;
            const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

            console.log(`✅ ${file} 完成`);
            console.log(`   原始尺寸: ${image.width}×${image.height}`);
            console.log(`   新尺寸: ${TARGET_WIDTH}×${TARGET_HEIGHT}`);
            console.log(`   文件大小减少: ${reduction}% (${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB)`);
            console.log('');

        } catch (error) {
            console.error(`❌ 处理 ${file} 时出错:`, error.message);
        }
    }

    console.log('🎉 所有图片处理完成！');
    console.log('请检查 images/ 目录中 resized_*.png 文件');
}

// 检查是否安装了canvas
try {
    require('canvas');
    resizeImages();
} catch (error) {
    console.log('❌ 需要安装 canvas 包');
    console.log('请运行: npm install canvas');
    console.log('或者使用在线图片压缩工具手动调整图片尺寸到 450×768 像素');
}