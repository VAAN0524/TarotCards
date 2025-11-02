#!/bin/bash

# 塔罗牌应用部署脚本
# 使用方法: ./deploy.sh

echo "🚀 开始部署塔罗牌应用到Cloudflare Pages..."

# 方法1: 使用wrangler pages deploy (推荐)
echo "📦 方法1: 使用Wrangler Pages部署..."
npx wrangler pages deploy . --project-name=tarot-cards-app

# 如果上面的命令失败，尝试方法2
if [ $? -ne 0 ]; then
    echo "❌ 方法1失败，尝试方法2..."

    # 方法2: 直接指定assets目录
    echo "📦 方法2: 指定assets目录..."
    npx wrangler pages deploy --assets=. --project-name=tarot-cards-app

    # 如果还是失败，提供替代方案
    if [ $? -ne 0 ]; then
        echo "❌ 自动部署失败，请尝试以下手动方案："
        echo ""
        echo "🔧 手动部署方案:"
        echo "1. 访问 https://dash.cloudflare.com/"
        echo "2. 选择 Pages → Create a project"
        echo "3. 连接到您的GitHub仓库"
        echo "4. 设置构建设置:"
        echo "   Framework preset: None"
        echo "   Build command: echo 'Static site - no build needed'"
        echo "   Build output directory: ."
        echo "5. 点击部署"
        echo ""
        echo "或者使用其他平台:"
        echo "- Vercel: vercel --prod"
        echo "- Netlify: netlify deploy --prod --dir=."
    else
        echo "✅ 部署成功！"
    fi
else
    echo "✅ 部署成功！"
fi

echo "🎉 部署流程完成！"