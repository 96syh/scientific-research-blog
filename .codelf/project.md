## Scientific Research Blog

> A modern, full-featured blog platform designed specifically for scientific research communities. Built with Next.js 15, React 18, and TypeScript.

> Provides a comprehensive solution for sharing research findings, clinical studies, detection methodologies, and training resources. Features MDX support for rich content creation, modern UI with Tailwind CSS and shadcn/ui components.

> Status: Active Development - Version 0.1.0

> Individual developer project focused on scientific research community

> Framework: Next.js 15.3.2 (App Router) | Language: TypeScript 5.8.3 | Runtime: Bun (recommended) | Styling: Tailwind CSS 3.4.17 | UI Library: React 18.3.1 | Component Library: shadcn/ui | Content: MDX 3.1.1



## Dependencies (init from programming language specification like package.json, requirements.txt, etc.)

* next (^15.3.2): React framework for production with App Router support
* react (^18.3.1): JavaScript library for building user interfaces
* typescript (^5.8.3): Typed superset of JavaScript
* @mdx-js/react (^3.1.1): React renderer for MDX content
* next-mdx-remote (^5.0.0): Load MDX content from anywhere
* tailwindcss (^3.4.17): Utility-first CSS framework
* lucide-react (^0.544.0): Beautiful and consistent icon toolkit
* @radix-ui/react-slot (^1.2.3): Radix UI primitive components
* gray-matter (^4.0.3): Parse front-matter from markdown files
* rehype-highlight (^7.0.2): Syntax highlighting for code blocks
* remark-gfm (^4.0.1): GitHub Flavored Markdown support
* @biomejs/biome (1.9.4): Fast formatter and linter
* eslint (^9.27.0): Code quality and style checker


## Development Environment

> Node.js 18.x or higher required
> Bun recommended for fastest performance (alternative: npm/yarn/pnpm)
> Development server runs on http://localhost:3000 with Turbopack enabled
> 
> Available scripts:
> - `bun dev` or `npm run dev`: Start development server with Turbopack
> - `bun run build`: Build for production
> - `bun start`: Start production server
> - `bun run lint`: Run TypeScript and ESLint checks
> - `bun run format`: Format code with Biome
>
> Deployment configured for Netlify (see netlify.toml) and Vercel


## Structrue (init from project tree)

> It is essential to consistently refine the analysis down to the file level — this level of granularity is of utmost importance.

> If the number of files is too large, you should at least list all the directories, and provide comments for the parts you consider particularly important.

> In the code block below, add comments to the directories/files to explain their functionality and usage scenarios.

> if you think the directory/file is not important, you can not skip it, just add a simple comment to it.

> but if you think the directory/file is important, you should read the files and add more detail comments on it (e.g. add comments on the functions, classes, and variables. explain the functionality and usage scenarios. write the importance of the directory/file).
```
root
- .gitignore                    // Git ignore configuration
- .next                         // Next.js build output (generated)
- .same                         // Project metadata folder
    - todos.md                  // Task tracking
- .codelf                       // Project documentation and development notes
    - project.md                // Project overview and structure
    - attention.md              // Development guidelines
    - _changelog.md             // Change history template
- README.md                     // ⭐ Main project documentation for GitHub
- read.md                       // Original Next.js starter documentation
- biome.json                    // Biome formatter and linter configuration
- bun.lock                      // Bun package lock file
- components.json               // shadcn/ui components configuration
- content                       // 📝 Content directory for MDX blog posts
    - blog                      // Blog articles in MDX format
        - moban.md              // Template for new blog posts
        - nextjs-best-practices.mdx    // Example blog post
        - react-18-features.mdx        // Example blog post
        - typescript-advanced-types.mdx // Example blog post
- eslint.config.mjs            // ESLint configuration
- netlify.toml                 // Netlify deployment configuration
- next.config.js               // Next.js configuration (MDX support, etc.)
- package.json                 // Node.js dependencies and scripts
- postcss.config.mjs           // PostCSS configuration for Tailwind
- public                       // Static assets
    - images                   // Image resources
        - blog                 // Blog post images
            - performance_metrics.png
        - screenshots          // 📸 Screenshots for README (newly created)
        - README_IMAGES.md     // 📋 Guide for adding images to README
- src                          // Source code directory
    - app                      // ⚡ Next.js App Router pages
        - layout.tsx           // Root layout with global providers and metadata
        - page.tsx             // Homepage (landing page)
        - globals.css          // Global styles and Tailwind imports
        - ClientBody.tsx       // Client-side body wrapper component
        - about                // About page
            - page.tsx
        - api                  // API routes
            - posts            // Posts API endpoints
        - blog                 // 📚 Blog section (IMPORTANT)
            - page.tsx         // Blog list page
            - BlogList.tsx     // Blog list component with filtering
            - [slug]           // Dynamic routes for individual blog posts
                - page.tsx     // Individual blog post page with MDX rendering
        - clinical             // Clinical research section
            - page.tsx
        - community            // Community features page
            - page.tsx
        - contact              // Contact page
            - page.tsx
        - dashboard            // Research dashboard
            - page.tsx
        - detection            // Detection methods section
            - page.tsx
        - docs                 // Documentation page
            - page.tsx
        - guidelines           // Research guidelines
            - page.tsx
        - login                // Login page
            - page.tsx
        - projects             // Projects showcase
            - page.tsx
        - research             // Research articles section
            - page.tsx
        - resources            // Resource library
            - page.tsx
        - search               // Search functionality
            - page.tsx
        - snippets             // Code snippets section
            - page.tsx
        - subscribe            // Newsletter subscription
            - page.tsx
        - support              // Support page
            - page.tsx
        - tech-stack           // Technology stack page
            - page.tsx
        - training             // Training resources section
            - page.tsx
    - components               // 🎨 Reusable React components
        - Header.tsx           // Navigation header with menu
        - Footer.tsx           // Site footer with links
        - HeroSection.tsx      // Landing page hero section
        - FeatureSection.tsx   // Features showcase section
        - TestimonialsSection.tsx  // Testimonials display
        - TrustedBySection.tsx     // Partner/institution logos
        - ChangelogSection.tsx     // Changelog display
        - StayOnFrontierSection.tsx // Newsletter/updates section
        - FinalCTASection.tsx      // Call-to-action section
        - Dashboard.tsx        // Dashboard component for data display
        - MDXContent.tsx       // 📄 MDX content renderer (IMPORTANT)
        - ShareButton.tsx      // Social sharing buttons
        - SupportChat.tsx      // Support chat widget
        - ui                   // shadcn/ui component library
            - button.tsx       // Button component with variants
    - lib                      // 🛠️ Utility functions and helpers
        - mdx.ts               // MDX processing utilities (parse, render)
        - utils.ts             // Common helper functions (cn, etc.)
- tailwind.config.ts           // Tailwind CSS configuration with theme
- tsconfig.json                // TypeScript compiler configuration
- tsconfig.tsbuildinfo         // TypeScript build cache
- 使用.md                      // Usage documentation (Chinese)
```
