"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Sparkles } from "lucide-react"
import Link from "next/link"

export function ChangelogSection() {
  const blogUpdates = [
    {
      version: "2024.03",
      date: "2024年3月",
      title: "Next.js 14 最佳实践与性能优化",
      features: [
        "App Router 深度解析",
        "Server Components 实战指南",
        "流式渲染(Streaming)优化技巧",
        "并发特性(Concurrent Features)应用"
      ],
      impact: "阅读量 5.2K"
    },
    {
      version: "2024.02",
      date: "2024年2月",
      title: "TypeScript 高级类型系统完全指南",
      features: [
        "泛型约束与高级类型",
        "类型体操实战案例",
        "装饰器与元编程",
        "类型安全的设计模式"
      ],
      impact: "阅读量 4.8K"
    },
    {
      version: "2024.01",
      date: "2024年1月",
      title: "React 18 新特性深度解析",
      features: [
        "Concurrent Rendering 原理",
        "Automatic Batching 机制",
        "Transitions API 使用指南",
        "Suspense 数据获取模式"
      ],
      impact: "阅读量 6.1K"
    },
    {
      version: "2023.12",
      date: "2023年12月",
      title: "全栈开发：构建现代Web应用",
      features: [
        "前后端分离架构设计",
        "API设计与RESTful最佳实践",
        "PostgreSQL 数据库优化",
        "Docker容器化部署实战"
      ],
      impact: "阅读量 7.3K"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            最新博客文章
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            分享前端技术、全栈开发和软件工程最佳实践
          </p>

          <div className="space-y-8">
            {blogUpdates.map((update, index) => (
              <Link
                key={index}
                href="/blog"
                className="block bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{update.title}</h3>
                      <div className="text-gray-600 font-medium">{update.date}</div>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {update.impact}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-1">
                      <Code className="h-4 w-4" />
                      <span>内容亮点</span>
                    </h4>
                    <ul className="space-y-2">
                      {update.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-1">
                      <Sparkles className="h-4 w-4" />
                      <span>文章标签</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {update.version === "2024.03" && (
                        <>
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Next.js</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">性能优化</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">最佳实践</span>
                        </>
                      )}
                      {update.version === "2024.02" && (
                        <>
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">TypeScript</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">类型系统</span>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">进阶</span>
                        </>
                      )}
                      {update.version === "2024.01" && (
                        <>
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">React</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">并发特性</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">深度解析</span>
                        </>
                      )}
                      {update.version === "2023.12" && (
                        <>
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">全栈</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">架构设计</span>
                          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">DevOps</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-3">
                查看全部文章 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Upcoming Topics */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">即将发布的文章</h3>
            <p className="text-gray-700">正在创作中的技术主题</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🔮</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AI编程助手</h4>
              <p className="text-gray-700 text-sm mb-3">探索GitHub Copilot与ChatGPT在开发中的应用</p>
              <div className="mt-4 text-purple-500 text-xs">预计4月发布</div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">微前端架构</h4>
              <p className="text-gray-700 text-sm mb-3">Module Federation与微应用设计模式</p>
              <div className="mt-4 text-purple-500 text-xs">预计5月发布</div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🤖</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">WebAssembly</h4>
              <p className="text-gray-700 text-sm mb-3">Rust与WASM在Web中的高性能应用</p>
              <div className="mt-4 text-purple-500 text-xs">预计6月发布</div>
            </div>
          </div>
        </div>

        {/* Blog Stats */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">博客统计数据</h3>
            <p className="text-gray-100">记录技术成长的每一步</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Link href="/blog" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-100 font-medium">技术文章</div>
              <div className="text-sm text-gray-200">深度技术分享</div>
            </Link>
            <Link href="/blog" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">25K+</div>
              <div className="text-gray-100 font-medium">总阅读量</div>
              <div className="text-sm text-gray-200">持续增长中</div>
            </Link>
            <Link href="/about" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">1K+</div>
              <div className="text-gray-100 font-medium">订阅用户</div>
              <div className="text-sm text-gray-200">忠实读者</div>
            </Link>
            <Link href="/blog" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-gray-100 font-medium">技术主题</div>
              <div className="text-sm text-gray-200">全面覆盖</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
