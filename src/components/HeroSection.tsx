"use client"

import { Button } from "@/components/ui/button"
import { Code, FileText, GitBranch, Star, BookOpen } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("blog-post")
  const [codeLines, setCodeLines] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines(prev => (prev >= 100 ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const tabs = [
    { id: "blog-post", label: "📝 latest-post.md", icon: "📄" },
    { id: "code-snippet", label: "💻 code-snippet.tsx", icon: "⚡" },
    { id: "project", label: "🚀 project-showcase.json", icon: "📦" },
    { id: "about", label: "👤 about-me.md", icon: "ℹ️" }
  ]

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight mb-8">
            代码即艺术
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              分享技术，记录成长
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            专注全栈开发、AI技术和开源项目。用代码改变世界，用文字记录思考。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-4 text-lg font-medium inline-flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>阅读文章</span>
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-4 text-lg font-medium inline-flex items-center space-x-2">
                <GitBranch className="h-5 w-5" />
                <span>查看项目</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* VSCode-like Code Editor Interface */}
        <div className="relative">
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-6 shadow-2xl">
            {/* VSCode interface */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Title bar */}
              <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer"></div>
                </div>
                <div className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                  <Code className="h-4 w-4" />
                  <span>DevBlog - Visual Studio Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-xs text-gray-600">{codeLines}+ stars</span>
                </div>
              </div>

              {/* File tabs */}
              <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex space-x-1 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-2 rounded-t-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-white text-gray-900 border-t border-l border-r border-gray-200 transform scale-105"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <span className="text-gray-500 hover:text-gray-700 ml-1 cursor-pointer">
                        ×
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Main content area */}
              <div className="flex h-[500px]">
                {/* Sidebar */}
                <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center space-x-1">
                    <Code className="h-3 w-3" />
                    <span>文件资源管理器</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>📁</span>
                      <span>blog-posts</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-900 ml-4">
                      <span>📝</span>
                      <span>nextjs-best-practices.md</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 ml-4">
                      <span>📄</span>
                      <span>react-hooks-guide.md</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 ml-4">
                      <span>💡</span>
                      <span>typescript-tips.md</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>📁</span>
                      <span>projects</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 ml-4">
                      <span>🚀</span>
                      <span>ai-chatbot</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 ml-4">
                      <span>⚡</span>
                      <span>realtime-dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>📁</span>
                      <span>code-snippets</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 ml-4">
                      <span>💻</span>
                      <span>react-patterns.tsx</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 ml-4">
                      <span>🎨</span>
                      <span>css-animations.css</span>
                    </div>
                  </div>
                </div>

                {/* Code editor / Content */}
                <div className="flex-1 bg-white">
                  {activeTab === "blog-post" && (
                    <div className="p-6 font-mono text-sm">
                      <div className="space-y-2">
                        <div className="text-gray-400"># 最新文章：构建现代化的全栈应用</div>
                        <div></div>
                        <div className="text-blue-600">## 技术栈选择</div>
                        <div></div>
                        <div className="text-gray-700">在现代Web开发中，选择合适的技术栈至关重要。本文将分享我在构建</div>
                        <div className="text-gray-700">全栈应用时的技术选型经验。</div>
                        <div></div>
                        <div className="text-green-600">### 前端技术</div>
                        <div className="text-gray-700">- **React 18**: 并发特性和服务端组件</div>
                        <div className="text-gray-700">- **Next.js 14**: App Router和服务端渲染</div>
                        <div className="text-gray-700">- **TypeScript**: 类型安全和更好的开发体验</div>
                        <div className="text-gray-700">- **Tailwind CSS**: 快速构建响应式界面</div>
                        <div></div>
                        <div className="text-green-600">### 后端技术</div>
                        <div className="text-gray-700">- **Node.js**: 高性能JavaScript运行时</div>
                        <div className="text-gray-700">- **PostgreSQL**: 强大的关系型数据库</div>
                        <div className="text-gray-700">- **Prisma**: 现代化的ORM工具</div>
                        <div className="text-gray-700">- **Redis**: 缓存和会话管理</div>
                        <div></div>
                        <div className="text-purple-600">```typescript</div>
                        <div className="text-gray-800">export async function getData() {'{'}</div>
                        <div className="text-gray-800 ml-4">const res = await fetch('/api/data')</div>
                        <div className="text-gray-800 ml-4">return res.json()</div>
                        <div className="text-gray-800">{'}'}</div>
                        <div className="text-purple-600">```</div>
                      </div>
                    </div>
                  )}

                  {activeTab === "code-snippet" && (
                    <div className="p-6 font-mono text-sm">
                      <div className="space-y-1">
                        <div><span className="text-purple-600">import</span> <span className="text-blue-600">React</span> <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span></div>
                        <div><span className="text-purple-600">import</span> <span className="text-blue-600">{'{ useState, useEffect }'}</span> <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span></div>
                        <div></div>
                        <div><span className="text-gray-500">{'//'} 自定义Hook：实时数据同步</span></div>
                        <div><span className="text-purple-600">export function</span> <span className="text-yellow-600">useRealtime</span>{'<T>'}(url: string) {'{'}</div>
                        <div className="ml-4"><span className="text-purple-600">const</span> [data, setData] = useState{'<T | null>'}(null)</div>
                        <div className="ml-4"><span className="text-purple-600">const</span> [loading, setLoading] = useState(true)</div>
                        <div></div>
                        <div className="ml-4"><span className="text-purple-600">useEffect</span>(() =&gt; {'{'}</div>
                        <div className="ml-8"><span className="text-purple-600">const</span> ws = <span className="text-purple-600">new</span> WebSocket(url)</div>
                        <div className="ml-8">ws.onmessage = (event) =&gt; {'{'}</div>
                        <div className="ml-12">setData(JSON.parse(event.data))</div>
                        <div className="ml-12">setLoading(false)</div>
                        <div className="ml-8">{'}'}</div>
                        <div className="ml-8"><span className="text-purple-600">return</span> () =&gt; ws.close()</div>
                        <div className="ml-4">{'}'}, [url])</div>
                        <div></div>
                        <div className="ml-4"><span className="text-purple-600">return</span> {'{ data, loading }'}</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                  )}

                  {activeTab === "project" && (
                    <div className="p-6 font-mono text-sm">
                      <div className="space-y-1 text-gray-700">
                        <div>{'{'}</div>
                        <div className="ml-4"><span className="text-blue-600">"name"</span>: <span className="text-green-600">"AI聊天机器人"</span>,</div>
                        <div className="ml-4"><span className="text-blue-600">"description"</span>: <span className="text-green-600">"基于GPT-4的智能对话系统"</span>,</div>
                        <div className="ml-4"><span className="text-blue-600">"tech"</span>: [</div>
                        <div className="ml-8"><span className="text-green-600">"Next.js"</span>,</div>
                        <div className="ml-8"><span className="text-green-600">"OpenAI API"</span>,</div>
                        <div className="ml-8"><span className="text-green-600">"Tailwind CSS"</span>,</div>
                        <div className="ml-8"><span className="text-green-600">"PostgreSQL"</span></div>
                        <div className="ml-4">],</div>
                        <div className="ml-4"><span className="text-blue-600">"stars"</span>: <span className="text-orange-600">1250</span>,</div>
                        <div className="ml-4"><span className="text-blue-600">"status"</span>: <span className="text-green-600">"production"</span></div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                  )}

                  {activeTab === "about" && (
                    <div className="p-6">
                      <div className="space-y-4 text-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900"># 关于我</h3>
                        <p>全栈开发工程师，专注于Web技术和AI应用开发。</p>
                        <div>
                          <div className="font-medium text-gray-900 mb-2">## 技能</div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>✓ React / Next.js / TypeScript</div>
                            <div>✓ Node.js / Express / Nest.js</div>
                            <div>✓ PostgreSQL / MongoDB / Redis</div>
                            <div>✓ Docker / Kubernetes / CI/CD</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right panel */}
                <div className="w-80 bg-gray-50 border-l border-gray-200 p-4">
                  <div className="text-sm font-medium text-gray-900 mb-4 flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>最新动态</span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <div className="text-gray-800 font-medium mb-2">📝 新文章发布</div>
                      <div className="text-gray-600 text-xs">
                        "Next.js 14最佳实践" - 深入探讨App Router和服务端组件的使用技巧
                      </div>
                      <div className="text-gray-400 text-xs mt-2">2小时前</div>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <div className="text-gray-800 font-medium mb-2">🚀 项目更新</div>
                      <div className="text-gray-600 text-xs">
                        AI聊天机器人v2.0发布，新增流式响应和上下文记忆功能
                      </div>
                      <div className="text-gray-400 text-xs mt-2">1天前</div>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-gray-200">
                      <div className="text-gray-800 font-medium mb-2">💡 代码片段</div>
                      <div className="text-gray-600 text-xs">
                        分享了一个实用的React自定义Hook：useRealtime
                      </div>
                      <div className="text-gray-400 text-xs mt-2">3天前</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
