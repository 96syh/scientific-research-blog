import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { getAllPosts, getAllCategories } from "@/lib/mdx"
import { BlogList } from "./BlogList"
import { BookOpen, TrendingUp, Sparkles } from "lucide-react"

// 服务端获取数据
export default function BlogPage() {
  // 在服务端获取文章列表
  const posts = getAllPosts()
  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Header />
      
      <main>
        {/* Hero 区域 - 参考林间拾语的设计 */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-blue-100/20 rounded-full blur-3xl" />
          </div>
          
          {/* 网格背景 */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* 图标装饰 */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl shadow-lg shadow-purple-500/25 mb-6">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                技术博客
                <span className="inline-block ml-3">
                  <Sparkles className="h-8 w-8 text-yellow-500 animate-pulse" />
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                分享前端技术、全栈开发和软件工程最佳实践
                <br />
                <span className="text-purple-600 font-medium">用代码改变世界，用文字记录思考</span>
              </p>

              {/* 统计数据 */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-gray-600">
                    <span className="font-bold text-gray-900">{posts.length}</span> 篇文章
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                  <span className="text-gray-600">
                    <span className="font-bold text-gray-900">{categories.length}</span> 个分类
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 文章列表区域 */}
        <section className="relative pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogList 
              posts={posts.map(post => ({ slug: post.slug, meta: post.meta }))} 
              categories={categories} 
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
