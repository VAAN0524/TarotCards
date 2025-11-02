const fs = require('fs');
const path = require('path');

function checkImages() {
    const imagesDir = path.join(__dirname, 'images');
    const backupDir = path.join(imagesDir, 'backup');

    console.log('🔍 塔罗牌图片状态检查报告');
    console.log('='.repeat(50));

    // 检查备份目录
    if (fs.existsSync(backupDir)) {
        const backupFiles = fs.readdirSync(backupDir).filter(file => file.endsWith('.png'));
        console.log(`✅ 备份图片: ${backupFiles.length} 张`);
    } else {
        console.log('❌ 备份目录不存在');
    }

    // 获取当前图片
    const currentFiles = fs.readdirSync(imagesDir).filter(file =>
        file.endsWith('.png') && !file.includes('塔罗牌背面')
    );

    console.log(`\n📊 当前图片状态 (${currentFiles.length} 张):`);
    console.log('-'.repeat(50));

    let totalOriginalSize = 0;
    let totalCurrentSize = 0;
    let optimizedCount = 0;

    currentFiles.forEach(file => {
        const filePath = path.join(imagesDir, file);
        const stats = fs.statSync(filePath);
        const fileSizeKB = (stats.size / 1024).toFixed(1);

        // 检查是否已优化 (假设小于1MB的为优化过)
        const isOptimized = stats.size < 1024 * 1024;
        if (isOptimized) optimizedCount++;

        totalCurrentSize += stats.size;

        const status = isOptimized ? '✅' : '⚠️';
        console.log(`${status} ${file}: ${fileSizeKB}KB`);

        // 检查备份文件大小
        const backupPath = path.join(backupDir, file);
        if (fs.existsSync(backupPath)) {
            const backupStats = fs.statSync(backupPath);
            totalOriginalSize += backupStats.size;

            if (isOptimized) {
                const reduction = ((backupStats.size - stats.size) / backupStats.size * 100).toFixed(1);
                console.log(`   └─ 减少: ${reduction}% (${(backupStats.size/1024/1024).toFixed(2)}MB → ${(stats.size/1024/1024).toFixed(2)}MB)`);
            }
        }
    });

    console.log('\n📈 优化统计:');
    console.log('-'.repeat(30));
    console.log(`已优化: ${optimizedCount}/${currentFiles.length} 张`);
    console.log(`原始总大小: ${(totalOriginalSize/1024/1024).toFixed(2)}MB`);
    console.log(`当前总大小: ${(totalCurrentSize/1024/1024).toFixed(2)}MB`);

    if (totalOriginalSize > 0) {
        const totalReduction = ((totalOriginalSize - totalCurrentSize) / totalOriginalSize * 100).toFixed(1);
        console.log(`总体减少: ${totalReduction}%`);
        console.log(`节省空间: ${((totalOriginalSize - totalCurrentSize)/1024/1024).toFixed(2)}MB`);
    }

    console.log('\n🎯 推荐操作:');
    if (optimizedCount === currentFiles.length) {
        console.log('✅ 所有图片已优化完成！');
    } else {
        console.log(`📝 还有 ${currentFiles.length - optimizedCount} 张图片需要优化`);
        console.log('📖 请参考 IMAGE_OPTIMIZATION_GUIDE.md 进行操作');
    }

    // 检查目标图片是否存在
    console.log('\n🔧 系统文件检查:');
    const backCardExists = fs.existsSync(path.join(imagesDir, '塔罗牌背面.png'));
    console.log(`${backCardExists ? '✅' : '❌'} 塔罗牌背面.png`);
}

// 运行检查
checkImages();