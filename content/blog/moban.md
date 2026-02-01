---
title: "📝 博客写作指南"
date: "2024-11-26"
description: "详细介绍如何在本博客中撰写和发布文章，包括 Markdown 语法、封面图配置等完整说明。"
tags: ["教程", "写作指南", "Markdown", "入门"]
category: "教程"
author: "DevBlog"
coverImage: "/images/blog/performance_metrics.png"
---

# 博客写作指南

欢迎来到 DevBlog！本文将详细介绍如何在本博客中撰写和发布文章。

---

## 🚀 快速开始

### 第一步：创建文章文件

在 `content/blog/` 目录下创建一个 `.md` 或 `.mdx` 文件：

```bash
content/blog/
├── my-first-post.md      # 你的新文章
├── another-article.mdx   # 支持 MDX 格式
└── ...
```

### 第二步：添加 Frontmatter

每篇文章开头需要添加 YAML 格式的元数据：

```yaml
---
title: "文章标题"
date: "2024-11-26"
description: "文章的简短描述，会显示在列表页"
tags: ["标签1", "标签2", "标签3"]
category: "分类名称"
author: "作者名"
coverImage: "/images/blog/your-cover.jpg"
---
```

### 第三步：撰写正文

使用 Markdown 语法撰写文章内容即可！

---

## 📋 Frontmatter 字段说明

| 字段 | 必填 | 类型 | 说明 |
|------|:----:|------|------|
| `title` | ✅ | 字符串 | 文章标题 |
| `date` | ✅ | 字符串 | 发布日期，格式：YYYY-MM-DD |
| `description` | ✅ | 字符串 | 文章简介，显示在列表页和 SEO |
| `tags` | ✅ | 数组 | 文章标签，如 `["React", "教程"]` |
| `category` | ✅ | 字符串 | 文章分类 |
| `author` | ❌ | 字符串 | 作者名（可选） |
| `coverImage` | ❌ | 字符串 | 封面图路径（可选，有默认图） |

---

## 🖼️ 封面图使用

### 方式一：本地图片（推荐）

1. 将图片放到 `public/images/blog/` 目录下
2. 在 frontmatter 中引用：

```yaml
coverImage: "/images/blog/my-cover.jpg"
```

> 💡 **提示**：路径以 `/` 开头，不需要写 `public`

### 方式二：网络图片

直接使用完整的图片 URL：

```yaml
coverImage: "https://images.unsplash.com/photo-xxx?w=1200&h=600"
```

### 推荐图片尺寸

- **封面图尺寸**: 1200 × 600 像素（2:1 比例）
- **文件大小**: 建议小于 500KB

---

## ✍️ Markdown 语法参考

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
```

### 文本样式

- **粗体文本**：`**粗体**`
- *斜体文本*：`*斜体*`
- ~~删除线~~：`~~删除线~~`
- `行内代码`：`` `代码` ``

### 列表

**无序列表：**

- 项目一
- 项目二
  - 子项目 A
  - 子项目 B
- 项目三

**有序列表：**

1. 第一步
2. 第二步
3. 第三步

### 引用

> 这是一段引用文字。
> 
> 可以包含多行内容。

### 链接

- 普通链接：[链接文字](https://example.com)
- 自动链接：https://example.com

### 图片

```markdown
![图片描述](/images/blog/example.jpg)
```

### 代码块

支持语法高亮，只需指定语言：

````markdown
```javascript
function hello() {
  console.log("Hello, World!");
}
```
````

效果如下：

```javascript
function hello() {
  console.log("Hello, World!");
}
```

支持的语言包括：`javascript`、`typescript`、`python`、`java`、`css`、`html`、`bash`、`json` 等。

### 表格

```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| A1  | B1  | C1  |
| A2  | B2  | C2  |
```

效果：

| 功能 | 状态 | 说明 |
|-----|:----:|------|
| Markdown | ✅ | 完全支持 |
| 代码高亮 | ✅ | 多语言支持 |
| 表格 | ✅ | 支持对齐 |

### 分隔线

```markdown
---
```

---

## 📁 目录结构

```
cursor-clone/
├── content/
│   └── blog/                 # 📝 文章存放目录
│       ├── my-post.md
│       ├── another-post.mdx
│       └── ...
├── public/
│   └── images/
│       └── blog/             # 🖼️ 博客图片目录
│           ├── cover1.jpg
│           └── ...
└── src/
    └── ...
```

---

## ✨ 写作技巧

### 1. 标题要吸引人

好的标题应该：
- 清晰表达文章主题
- 包含关键词
- 适当使用 emoji 增加趣味性

### 2. 善用代码块

技术文章中，代码示例非常重要：

```typescript
// 使用 TypeScript 类型注解
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "张三",
  email: "zhangsan@example.com"
};
```

### 3. 添加提示框

使用引用语法创建提示：

> 💡 **提示**：这是一个有用的提示信息。

> ⚠️ **警告**：请注意这个重要事项。

> ✅ **成功**：操作已完成。

### 4. 图文并茂

合理使用图片可以让文章更易理解：

```markdown
![架构图](/images/blog/architecture.png)
```

---

## 🎯 发布检查清单

发布文章前，请确认：

- [ ] 标题清晰、有吸引力
- [ ] 描述简洁、概括文章要点
- [ ] 标签准确、便于分类
- [ ] 封面图清晰、尺寸合适
- [ ] 代码示例可运行
- [ ] 链接有效
- [ ] 无错别字

---

## 🔗 相关资源

- [Markdown 官方指南](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [Unsplash 免费图库](https://unsplash.com/)

---

现在你已经了解了所有写作技巧，开始创作你的第一篇文章吧！🚀
