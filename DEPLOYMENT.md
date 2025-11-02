# 🚀 部署指南 | Deployment Guide

## 📋 部署方式

### 方式一：Cloudflare Pages (推荐)

#### 方法1：通过Git仓库自动部署
1. **连接仓库**：
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 选择 "Pages" → "Create a project"
   - 连接到您的GitHub仓库

2. **构建设置**：
   ```
   Framework preset: None
   Build command: echo 'No build needed'
   Build output directory: .
   Root directory: ./
   ```

3. **环境变量**（可选）：
   ```
   NODE_VERSION: 18
   ```

#### 方法2：通过Wrangler CLI
```bash
# 安装Wrangler
npm install -g wrangler

# 登录Cloudflare
wrangler login

# 部署（当前目录）
wrangler pages deploy . --project-name=tarot-cards-app
```

### 方式二：Vercel (推荐)

```bash
# 安装Vercel CLI
npm install -g vercel

# 部署
vercel --prod
```

### 方式三：Netlify

```bash
# 安装Netlify CLI
npm install -g netlify-cli

# 部署
netlify deploy --prod --dir=.
```

### 方式四：GitHub Pages

1. **启用GitHub Pages**：
   - 进入仓库 Settings → Pages
   - Source: Deploy from a branch
   - Branch: main/master, folder: /root

2. **自动部署**：
   - 推送到main分支自动触发部署
   - 访问：https://username.github.io/TarotCards/

### 方式五：传统Web服务器

```bash
# 上传所有文件到Web服务器根目录
# 确保包含：
# - index.html
# - style.css
# - script.js
# - images/ 目录
# - 其他资源文件
```

## ⚙️ 配置文件说明

### wrangler.toml
```toml
name = "tarot-cards-app"
compatibility_date = "2025-11-02"

[assets]
directory = "./"
binding = "ASSETS"
```

### package.json
```json
{
  "name": "tarot-cards-app",
  "version": "2.2.0",
  "scripts": {
    "build": "echo 'Static site - no build needed'"
  }
}
```

### _redirects
```
/*    /index.html   200
```

## 🔧 部署前检查

### 文件清单
确保以下文件存在并可访问：
- ✅ index.html
- ✅ style.css
- ✅ script.js
- ✅ images/ 目录（包含所有图片）
- ✅ README.md

### 图片优化状态
运行检查脚本确认图片已优化：
```bash
node check-images.js
```

### 功能测试
在部署前测试以下功能：
- ✅ 页面正常加载
- ✅ 卡牌旋转动画正常
- ✅ 占卜功能完整
- ✅ 响应式设计正常
- ✅ 图片加载正常

## 🌐 域名配置

### Cloudflare Pages
1. 登录Cloudflare Dashboard
2. 选择您的Pages项目
3. 点击 "Custom domains"
4. 添加您的域名
5. 配置DNS记录

### 其他平台
参考相应平台的域名配置文档。

## 📊 性能优化

### 图片优化
- ✅ 所有图片已优化为450×767像素
- ✅ 文件大小减少73%
- ✅ 支持WebP格式（如需要）

### 缓存策略
建议设置以下缓存头：
```
Cache-Control: public, max-age=31536000, immutable
```

### CDN配置
- 启用Gzip/Brotli压缩
- 配置适当的缓存策略
- 启用HTTP/2支持

## 🛠️ 故障排除

### 常见问题

#### 1. 图片404错误
**问题**: 图片无法加载
**解决**: 确保images目录及所有图片文件已上传

#### 2. CSS/JS 404错误
**问题**: 样式或脚本文件无法加载
**解决**: 检查文件路径和文件名大小写

#### 3. 占卜功能不工作
**问题**: JavaScript功能异常
**解决**: 检查浏览器控制台错误信息

#### 4. 动画卡顿
**问题**: 卡牌旋转不流畅
**解决**: 检查浏览器性能，启用GPU加速

### 调试工具
在浏览器控制台使用内置调试函数：
```javascript
monitorCardAnimation()  // 监控动画状态
testTimingSync()        // 测试时间同步
testCardSwitch()        // 测试卡牌切换
```

## 📈 性能监控

### 推荐工具
- **Google PageSpeed Insights**: 分析性能
- **GTmetrix**: 性能和加载速度测试
- **WebPageTest**: 详细的性能分析

### 关键指标
- **First Contentful Paint**: < 2秒
- **Largest Contentful Paint**: < 3秒
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

---

**部署完成后，您的塔罗牌应用将为全球用户提供快速、稳定的服务！** 🌟