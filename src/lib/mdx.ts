import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 博客文章的 frontmatter 类型定义
export interface PostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  category: string;
  author?: string;
  coverImage?: string;
  readTime?: string;
}

// 文章数据类型
export interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
}

// 博客内容目录路径
const BLOG_DIR = path.join(process.cwd(), "content/blog");

/**
 * 获取所有博客文章的 slug（文件名不含扩展名）
 */
export function getPostSlugs(): string[] {
  // 确保目录存在
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

/**
 * 根据 slug 获取单篇文章的完整数据
 */
export function getPostBySlug(slug: string): Post | null {
  // 尝试 .mdx 和 .md 两种扩展名
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);

  let filePath: string | null = null;
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  }

  if (!filePath) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // 计算阅读时间（假设每分钟阅读 300 个字符）
  const readTime = `${Math.ceil(content.length / 300)} min`;

  return {
    slug,
    meta: {
      title: data.title || "无标题",
      date: data.date || new Date().toISOString().split("T")[0],
      description: data.description || "",
      tags: data.tags || [],
      category: data.category || "未分类",
      author: data.author || "作者",
      coverImage: data.coverImage,
      readTime: data.readTime || readTime,
    },
    content,
  };
}

/**
 * 获取所有文章列表（仅包含元数据，不包含正文）
 */
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    // 按日期降序排序（最新的文章在前）
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

  return posts;
}

/**
 * 获取所有分类
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();

  for (const post of posts) {
    if (post.meta.category) {
      categories.add(post.meta.category);
    }
  }

  return Array.from(categories);
}

/**
 * 获取所有标签
 */
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();

  for (const post of posts) {
    for (const tag of post.meta.tags) {
      tags.add(tag);
    }
  }

  return Array.from(tags);
}

/**
 * 按分类筛选文章
 */
export function getPostsByCategory(category: string): Post[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.meta.category === category);
}

/**
 * 按标签筛选文章
 */
export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.meta.tags.includes(tag));
}


