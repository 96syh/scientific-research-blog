# Scientific Research Blog

一个面向科研内容发布的 Next.js 博客模板。项目以 MDX/Markdown 内容为核心，适合整理研究文章、检测方法、临床资料、训练资源和项目说明。

## 功能概览

- 基于 Next.js 15 App Router。
- 支持 MDX、Markdown、代码高亮和文章元数据。
- 使用 Tailwind CSS 构建响应式页面。
- 提供科研内容分类、资源页和文章详情页的基础结构。
- 包含 Netlify 配置，便于静态站点部署。
- 使用 Biome、ESLint、TypeScript 做基础代码检查。

## 技术栈

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- MDX / next-mdx-remote
- gray-matter
- rehype / remark 插件

## 本地运行

```bash
bun install
bun dev
```

也可以使用 Turbopack：

```bash
bun run dev:turbo
```

构建和检查：

```bash
bun run build
bun run lint
```

## 目录结构

```text
.
├── content/             # Markdown/MDX 内容
├── src/
│   ├── app/             # Next.js 页面
│   ├── components/      # 页面组件
│   └── lib/             # 内容读取与工具函数
├── public/              # 图片和静态资源
├── netlify.toml         # Netlify 部署配置
└── package.json
```

## 内容维护

新增文章时优先放到 `content/` 目录，并保持 frontmatter 字段一致。上线前建议检查文章标题、摘要、标签、发布日期和图片路径。

