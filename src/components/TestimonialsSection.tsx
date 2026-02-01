"use client"

import { useState } from "react"
import { TrendingUp, Zap, Database, Brain, Cpu, BarChart3, Code, Star, GitBranch } from "lucide-react"
import Link from "next/link"

export function TestimonialsSection() {
  const [activeMetric, setActiveMetric] = useState("featured")

  const projects = [
    {
      name: "AI聊天机器人",
      type: "全栈应用",
      tech: "Next.js + OpenAI API",
      stars: "1.2K",
      status: "production",
      description: "基于GPT-4的智能对话系统"
    },
    {
      name: "实时数据仪表板",
      type: "前端应用",
      tech: "React + WebSocket",
      stars: "856",
      status: "active",
      description: "实时数据可视化和分析平台"
    },
    {
      name: "代码片段管理器",
      type: "开发工具",
      tech: "TypeScript + Electron",
      stars: "492",
      status: "beta",
      description: "个人代码片段管理和分享工具"
    }
  ]

  const featuredProjects = [
    { name: "AI聊天机器人", desc: "智能对话系统", tech: "Next.js", stars: 1200 },
    { name: "实时仪表板", desc: "数据可视化平台", tech: "React", stars: 856 },
    { name: "博客系统", desc: "个人技术博客", tech: "Next.js + MDX", stars: 492 },
    { name: "API服务", desc: "RESTful API", tech: "Node.js", stars: 320 }
  ]

  const techStack = [
    { name: "React 18", usage: "95%", projects: "15个项目" },
    { name: "TypeScript", usage: "90%", projects: "18个项目" },
    { name: "Next.js", usage: "85%", projects: "12个项目" },
    { name: "Node.js", usage: "80%", projects: "10个项目" }
  ]

  const achievements = [
    { platform: "GitHub", repos: 25, stars: 3200, status: "active" },
    { platform: "npm", packages: 8, downloads: "15K", status: "published" },
    { platform: "技术博客", articles: 50, views: "50K", status: "writing" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            精选项目展示
          </h2>
          <p className="text-xl text-gray-600">
            从实战中学习，用代码记录成长的每一步
          </p>
        </div>

        {/* VSCode风格的项目监控界面 */}
        <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-6 shadow-2xl mb-16">
          <div className="bg-white rounded-lg overflow-hidden">
            {/* VSCode标题栏 */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer"></div>
              </div>
              <div className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                <Code className="h-4 w-4" />
                <span>Project Dashboard - 项目展示</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600">在线</span>
              </div>
            </div>

            {/* 项目标签页 */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex space-x-1">
              {[
                { id: "featured", label: "⭐ 精选项目", icon: "🌟" },
                { id: "tech", label: "🔧 技术栈", icon: "💻" },
                { id: "achievements", label: "🏆 成就", icon: "📊" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveMetric(tab.id)}
                  className={`px-3 py-2 rounded-t-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeMetric === tab.id
                      ? "bg-white text-gray-900 border-t border-l border-r border-gray-200 transform scale-105"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* 项目数据显示区域 */}
            <div className="p-6">
              {activeMetric === "featured" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">开源项目</h3>
                    <Link href="/projects" className="text-purple-600 text-sm font-medium hover:text-purple-700">
                      查看全部 →
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featuredProjects.map((item, index) => (
                      <Link
                        key={index}
                        href="/projects"
                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="flex items-center space-x-1 text-yellow-600">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-sm font-bold">{item.stars}</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{item.desc}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">{item.tech}</span>
                          <GitBranch className="h-4 w-4 text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {activeMetric === "tech" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">技术栈使用统计</h3>
                    <Link href="/tech-stack" className="text-purple-600 text-sm">
                      详细信息 →
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {techStack.map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-800 font-medium">{item.name}</span>
                          <span className="text-2xl font-bold text-purple-600">{item.usage}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div
                            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: item.usage }}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-600">{item.projects}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeMetric === "achievements" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">开发者成就</h3>
                    <div className="text-green-600 text-sm font-medium">持续增长</div>
                  </div>

                  <div className="space-y-3">
                    {achievements.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            item.status === 'active' ? 'bg-green-500' :
                            item.status === 'published' ? 'bg-blue-500' : 'bg-purple-500'
                          }`}></div>
                          <div>
                            <div className="font-medium text-gray-900">{item.platform}</div>
                            <div className="text-sm text-gray-600">
                              {item.repos && `${item.repos} 仓库`}
                              {item.packages && `${item.packages} 包`}
                              {item.articles && `${item.articles} 文章`}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-900">
                            {item.stars && `${item.stars} Stars`}
                            {item.downloads && `${item.downloads} 下载`}
                            {item.views && `${item.views} 阅读`}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 项目卡片 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Link
              key={index}
              href="/projects"
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 text-sm">{project.type}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'production' ? 'bg-green-100 text-green-800' :
                  project.status === 'active' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status === 'production' ? '生产环境' :
                   project.status === 'active' ? '活跃开发' : '测试版'}
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4">{project.description}</p>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center space-x-1 text-sm">
                    <Code className="h-4 w-4" />
                    <span>技术栈</span>
                  </span>
                  <span className="font-medium text-purple-600 text-sm">{project.tech}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center space-x-1 text-sm">
                    <Star className="h-4 w-4" />
                    <span>GitHub Stars</span>
                  </span>
                  <span className="font-bold text-yellow-600">{project.stars}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 统计汇总 */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">开发者统计</h3>
            <p className="text-purple-100">代码改变世界，技术驱动未来</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Link href="/projects" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-purple-100 font-medium">开源项目</div>
              <div className="text-sm text-purple-200">GitHub仓库</div>
            </Link>
            <Link href="/blog" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-purple-100 font-medium">技术文章</div>
              <div className="text-sm text-purple-200">博客分享</div>
            </Link>
            <Link href="/snippets" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-purple-100 font-medium">代码片段</div>
              <div className="text-sm text-purple-200">实用工具</div>
            </Link>
            <Link href="/tech-stack" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">3.2K</div>
              <div className="text-purple-100 font-medium">GitHub Stars</div>
              <div className="text-sm text-purple-200">社区认可</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
