# README 图片资源说明

为了让 README.md 更加精美，建议添加以下图片资源：

## 需要的图片文件

### 1. Logo 图片
- **路径**: `./public/images/logo.png`
- **尺寸**: 200x200px 或更大（正方形）
- **格式**: PNG（带透明背景）
- **建议**: 可以使用项目相关的科研图标或自定义 logo

### 2. 截图目录
在 `./public/images/screenshots/` 目录下添加以下截图：

#### homepage.png
- **内容**: 首页截图
- **尺寸**: 1920x1080px 或 1440x900px
- **说明**: 展示网站首页的整体布局

#### blog.png
- **内容**: 博客列表页截图
- **尺寸**: 1920x1080px 或 1440x900px
- **说明**: 展示博客文章列表界面

#### dashboard.png
- **内容**: 研究仪表板截图
- **尺寸**: 1920x1080px 或 1440x900px
- **说明**: 展示研究数据展示页面

## 快速生成方法

### 方法 1: 运行项目后截图
```bash
# 启动开发服务器
bun dev

# 打开浏览器访问 http://localhost:3000
# 使用截图工具（如 macOS 的 Cmd+Shift+4）截取页面
```

### 方法 2: 使用在线工具
- [Canva](https://www.canva.com/) - 设计 logo
- [Figma](https://www.figma.com/) - 创建 UI 设计稿
- [Puppeteer](https://pptr.dev/) - 自动截图工具

### 方法 3: 使用占位图（临时）
如果暂时没有图片，可以使用占位图服务：
- https://via.placeholder.com/200x200.png?text=Logo
- https://via.placeholder.com/1920x1080.png?text=Homepage

## 目录结构

创建以下目录结构：

```
public/
└── images/
    ├── logo.png
    ├── screenshots/
    │   ├── homepage.png
    │   ├── blog.png
    │   └── dashboard.png
    └── blog/
        └── (博客文章配图)
```

## 注意事项

1. **文件大小**: 建议每张截图不超过 500KB，使用压缩工具如 [TinyPNG](https://tinypng.com/)
2. **版权**: 确保使用的图片有合法使用权
3. **命名规范**: 使用小写字母和连字符，如 `homepage-screenshot.png`
4. **格式选择**: 
   - Logo: PNG（支持透明背景）
   - 截图: JPG 或 PNG
   - 图标: SVG（矢量图，最佳）

## 临时解决方案

如果现在没有图片，可以先注释掉 README.md 中的图片部分：

```markdown
<!-- 取消注释以下行来显示 logo -->
<!-- <img src="./public/images/logo.png" alt="Logo" width="200"/> -->
```

或使用在线占位图：

```markdown
<img src="https://via.placeholder.com/200x200.png?text=Scientific+Blog" alt="Logo" width="200"/>
```
