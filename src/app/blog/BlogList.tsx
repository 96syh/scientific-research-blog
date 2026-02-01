"use client"

import { useState } from "react"
import { Calendar, Clock, Tag, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"

// 文章类型定义
interface PostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  category: string;
  readTime?: string;
  coverImage?: string;
}

interface Post {
  slug: string;
  meta: PostMeta;
}

interface BlogListProps {
  posts: Post[];
  categories: string[];
}

// 默认封面图列表
const defaultCovers = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop",
];

export function BlogList({ posts, categories }: BlogListProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  // 根据分类筛选文章
  const filteredPosts = activeFilter === "all" 
    ? posts 
    : posts.filter(post => post.meta.category === activeFilter)

  const allCategories = ["all", ...categories]

  return (
    <div className="space-y-8">
      {/* 分类筛选器 - 参考林间拾语的标签设计 */}
      <div className="flex flex-wrap justify-center gap-3">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === cat
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                : "bg-white/80 text-gray-600 hover:bg-white hover:text-purple-600 hover:shadow-md border border-gray-100"
            }`}
          >
            {cat === "all" ? "🏠 全部文章" : `📁 ${cat}`}
          </button>
        ))}
      </div>

      {/* 文章数量统计 */}
      <div className="text-center">
        <p className="text-gray-500 text-sm">
          共 <span className="text-purple-600 font-semibold">{filteredPosts.length}</span> 篇文章
        </p>
      </div>

      {/* 文章列表 - 卡片式设计 */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
          <p className="text-gray-500 text-lg">暂无文章</p>
          <p className="text-gray-400 text-sm mt-2">在 content/blog 目录下添加 .mdx 文件开始写作</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => {
            const coverImage = post.meta.coverImage || defaultCovers[index % defaultCovers.length];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-1">
                  {/* 封面图 */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${coverImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* 分类标签 */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs text-white bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 rounded-full font-medium shadow-lg">
                        {post.meta.category}
                      </span>
                    </div>

                    {/* 阅读时间 */}
                    {post.meta.readTime && (
                      <div className="absolute top-4 right-4">
                        <span className="text-xs text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.meta.readTime}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* 内容区 */}
                  <div className="p-5">
                    {/* 标题 */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
                      {post.meta.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {post.meta.description}
                    </p>

                    {/* 元信息 */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{post.meta.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3.5 w-3.5" />
                          <span>{Math.floor(Math.random() * 1000) + 100}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-purple-600 group-hover:translate-x-1 transition-transform">
                        <span>阅读</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    {/* 标签 */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-gray-100">
                      {post.meta.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  )
}
