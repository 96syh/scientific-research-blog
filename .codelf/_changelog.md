## 2026-02-01 15:30:00

### 1. 创建 GitHub 风格的 README.md 文档

**Change Type**: docs

> **Purpose**: 为项目创建专业的 GitHub README 文档，提升项目展示质量
> **Detailed Description**: 创建了一个全面、精美的 README.md 文件，包含项目介绍、功能特性、技术栈、快速开始指南、项目结构、部署说明、贡献指南等完整内容。采用 GitHub 最佳实践，包含 badges、表格、图标等元素，提供良好的阅读体验。
> **Reason for Change**: 项目需要规范的文档来展示给潜在用户和贡献者，原有的 read.md 只是 Next.js 默认文档，不适合作为项目主文档
> **Impact Scope**: 仅影响文档层面，不影响代码功能。新增了 public/images/screenshots/ 目录用于存放截图
> **API Changes**: 无 API 变更
> **Configuration Changes**: 无配置变更
> **Performance Impact**: 无性能影响

   ```
   root
   - README.md              // add - 新创建的 GitHub 风格主文档
   - public
     - images
       - screenshots/       // add - 新建目录用于存放 README 截图
       - README_IMAGES.md   // add - 图片资源使用指南
   - .codelf
     - project.md           // refact - 更新项目信息，添加详细说明
     - _changelog.md        // refact - 记录本次文档创建变更
   ```

---

## 2026-02-01 16:00:00

### 1. 修复 Turbopack 字体加载问题

**Change Type**: fix

> **Purpose**: 解决开发服务器运行时 Geist Mono 字体无法加载的问题
> **Detailed Description**: 移除了 dev 脚本中的 --turbopack 标志，改用标准的 Next.js 开发模式。Turbopack 与 Google Fonts 存在已知的兼容性问题，导致字体模块无法正确解析。同时保留了 dev:turbo 脚本供需要时使用。
> **Reason for Change**: Turbopack 模式下出现 "Module not found: Can't resolve '@vercel/turbopack-next/internal/font/google/font'" 错误，导致页面无法正常渲染
> **Impact Scope**: 仅影响开发环境配置，不影响生产构建。修复后开发服务器和生产构建均正常运行
> **API Changes**: 无 API 变更
> **Configuration Changes**: package.json 中 dev 脚本去掉 --turbopack，新增 dev:turbo 备用脚本
> **Performance Impact**: 开发模式下编译速度略慢于 Turbopack，但功能完全正常

   ```
   root
   - package.json           // refact - 修改 dev 脚本，移除 --turbopack
   - src
     - components
       - HeroSection.tsx    // fix - 修复 JSX 注释格式错误
       - MDXContent.tsx     // fix - 移除不必要的 eslint-disable 注释
   ```

### 2. 创建项目截图和优化 README

**Change Type**: docs

> **Purpose**: 为 README 添加精美的项目截图，提升项目展示效果
> **Detailed Description**: 创建了三个 SVG 格式的截图文件（homepage, blog, dashboard），展示了项目的主要页面布局和功能。使用 SVG 格式确保图片清晰、体积小、加载快。同时更新了 README 引用路径，修改了联系邮箱为实际邮箱地址。
> **Reason for Change**: README 需要可视化展示来帮助访问者快速了解项目外观和功能
> **Impact Scope**: 仅影响文档和静态资源，不影响代码功能
> **API Changes**: 无 API 变更
> **Configuration Changes**: 无配置变更
> **Performance Impact**: SVG 格式图片体积小，对加载性能有积极影响

   ```
   root
   - README.md              // refact - 更新截图路径和联系邮箱
   - public
     - images
       - logo.svg           // add - 创建项目 Logo（DNA 双螺旋主题）
       - screenshots/
         - homepage.svg     // add - 首页截图示意图
         - blog.svg         // add - 博客列表页截图示意图
         - dashboard.svg    // add - 研究仪表板截图示意图
   ```

---

## {datetime: YYYY-MM-DD HH:mm:ss}

### 1. {function simple description}

**Change Type**: {type: feature/fix/improvement/refactor/docs/test/build}

> **Purpose**: {function purpose}
> **Detailed Description**: {function detailed description}
> **Reason for Change**: {why this change is needed}
> **Impact Scope**: {other modules or functions that may be affected by this change}
> **API Changes**: {if there are API changes, detail the old and new APIs}
> **Configuration Changes**: {changes to environment variables, config files, etc.}
> **Performance Impact**: {impact of the change on system performance}

   ```
   root
   - pkg    // {type: add/del/refact/-} {The role of a folder}
    - utils // {type: add/del/refact} {The function of the file}
   - xxx    // {type: add/del/refact} {The function of the file}
   ```

### 2. {function simple description}

**Change Type**: {type: feature/fix/improvement/refactor/docs/test/build}

> **Purpose**: {function purpose}
> **Detailed Description**: {function detailed description}
> **Reason for Change**: {why this change is needed}
> **Impact Scope**: {other modules or functions that may be affected by this change}
> **API Changes**: {if there are API changes, detail the old and new APIs}
> **Configuration Changes**: {changes to environment variables, config files, etc.}
> **Performance Impact**: {impact of the change on system performance}

   ```
   root
   - pkg    // {type: add/del/refact/-} {The role of a folder}
    - utils // {type: add/del/refact} {The function of the file}
   - xxx    // {type: add/del/refact} {The function of the file}
   ```

...