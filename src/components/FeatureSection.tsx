"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Database, BarChart3, Code, Terminal, FileText, Activity, TrendingUp } from "lucide-react"
import { useState } from "react"

export function FeatureSection() {
  const [activeDataTab, setActiveDataTab] = useState("frontend")
  const [activeProjectTab, setActiveProjectTab] = useState("ai-chatbot")
  const [activeToolTab, setActiveToolTab] = useState("vscode")

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              我的技术栈
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              专注现代Web开发技术，从前端到后端，构建高性能的全栈应用。
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">React 18 / Next.js 14 / TypeScript</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Node.js / Express / PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Docker / AWS / CI/CD</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-4 shadow-2xl">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                    <Code className="h-4 w-4" />
                    <span>Tech Stack - package.json</span>
                  </div>
                  <div></div>
                </div>

                <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex space-x-1">
                  {[
                    { id: "frontend", label: "⚛️ Frontend", icon: "🎨" },
                    { id: "backend", label: "🔧 Backend", icon: "⚙️" },
                    { id: "tools", label: "🛠️ DevOps", icon: "☁️" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDataTab(tab.id)}
                      className={`px-3 py-2 rounded-t-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                        activeDataTab === tab.id
                          ? "bg-white text-gray-900 border-t border-l border-r border-gray-200 transform scale-105"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {activeDataTab === "frontend" && (
                    <div className="space-y-4">
                      <div className="font-mono text-sm">
                        <div className="text-gray-700">{'{'}</div>
                        <div className="ml-4 text-blue-600">"dependencies"</div>
                        <div className="ml-4 text-gray-700">: {'{'}</div>
                        <div className="ml-8"><span className="text-green-600">"react"</span>: <span className="text-orange-600">"^18.2.0"</span>,</div>
                        <div className="ml-8"><span className="text-green-600">"next"</span>: <span className="text-orange-600">"14.0.0"</span>,</div>
                        <div className="ml-8"><span className="text-green-600">"typescript"</span>: <span className="text-orange-600">"^5.3.0"</span>,</div>
                        <div className="ml-8"><span className="text-green-600">"tailwindcss"</span>: <span className="text-orange-600">"^3.4.0"</span></div>
                        <div className="ml-4 text-gray-700">{'}'}</div>
                        <div className="text-gray-700">{'}'}</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded border border-green-200">
                        <div className="text-green-800 font-medium text-sm">✓ 所有依赖已安装</div>
                        <div className="text-green-700 text-xs">21 packages, 156 MB</div>
                      </div>
                    </div>
                  )}

                  {activeDataTab === "backend" && (
                    <div className="space-y-4">
                      <div className="bg-blue-100 p-4 rounded">
                        <div className="text-blue-800 font-medium mb-2">后端技术栈</div>
                        <div className="text-sm text-blue-700">
                          <div>• Node.js 20 LTS</div>
                          <div>• Express / Nest.js</div>
                          <div>• PostgreSQL + Prisma ORM</div>
                          <div>• Redis缓存</div>
                        </div>
                      </div>
                      <div className="text-center text-blue-600 text-sm">RESTful API + GraphQL</div>
                    </div>
                  )}

                  {activeDataTab === "tools" && (
                    <div className="space-y-4">
                      <div className="bg-purple-100 p-4 rounded">
                        <div className="text-purple-800 font-medium mb-2">DevOps工具链</div>
                        <div className="text-sm text-purple-700">
                          <div>• Docker容器化</div>
                          <div>• AWS / Vercel部署</div>
                          <div>• GitHub Actions CI/CD</div>
                          <div>• Nginx反向代理</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              精选项目
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              从实战中学习，从项目中成长。这里展示我的开源项目和个人作品。
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-4 rounded border border-gray-200">
                <div className="font-semibold text-gray-900">AI聊天机器人</div>
                <div className="text-gray-600">Next.js + OpenAI</div>
              </div>
              <div className="bg-white p-4 rounded border border-gray-200">
                <div className="font-semibold text-gray-900">实时仪表板</div>
                <div className="text-gray-600">React + WebSocket</div>
              </div>
              <div className="bg-white p-4 rounded border border-gray-200">
                <div className="font-semibold text-gray-900">代码片段库</div>
                <div className="text-gray-600">TypeScript</div>
              </div>
              <div className="bg-white p-4 rounded border border-gray-200">
                <div className="font-semibold text-gray-900">博客系统</div>
                <div className="text-gray-600">Next.js + MDX</div>
              </div>
            </div>
          </div>

          <div className="lg:order-1 relative">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-4 shadow-2xl">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                    <Terminal className="h-4 w-4" />
                    <span>项目终端</span>
                  </div>
                  <div></div>
                </div>

                <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex space-x-1">
                  {[
                    { id: "ai-chatbot", label: "🤖 ai-chatbot", icon: "💬" },
                    { id: "dashboard", label: "📊 dashboard", icon: "📈" },
                    { id: "blog", label: "📝 blog-system", icon: "✍️" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveProjectTab(tab.id)}
                      className={`px-3 py-2 rounded-t-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                        activeProjectTab === tab.id
                          ? "bg-white text-gray-900 border-t border-l border-r border-gray-200"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  <div className="font-mono text-xs space-y-2 bg-gray-900 text-green-400 p-4 rounded">
                    <div>[INFO] 正在启动开发服务器...</div>
                    <div className="text-blue-400">[BUILD] 编译 TypeScript...</div>
                    <div className="text-green-400">[SUCCESS] ✓ 编译完成</div>
                    <div className="text-yellow-400">[SERVER] 监听端口 3000</div>
                    <div className="text-green-400">[READY] ✓ 就绪 - 访问 http://localhost:3000</div>
                    <div className="text-blue-400 animate-pulse">[WATCH] 监听文件变化中...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              开发工具
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              工欲善其事，必先利其器。这些是我日常使用的开发工具和编辑器配置。
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                <span className="text-gray-700">主编辑器</span>
                <span className="text-blue-600 font-bold">VS Code</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                <span className="text-gray-700">终端工具</span>
                <span className="text-green-600 font-bold">iTerm2 + Zsh</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-gray-200">
                <span className="text-gray-700">版本控制</span>
                <span className="text-purple-600 font-bold">Git + GitHub</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-4 shadow-2xl">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700 flex items-center space-x-2">
                    <Code className="h-4 w-4" />
                    <span>VS Code配置</span>
                  </div>
                  <div></div>
                </div>

                <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex space-x-1">
                  {[
                    { id: "vscode", label: "⚙️ settings.json", icon: "📝" },
                    { id: "extensions", label: "🧩 extensions", icon: "🔌" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveToolTab(tab.id)}
                      className={`px-3 py-2 rounded-t-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                        activeToolTab === tab.id
                          ? "bg-white text-gray-900 border-t border-l border-r border-gray-200"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {activeToolTab === "vscode" && (
                    <div className="font-mono text-xs space-y-1 text-gray-700">
                      <div>{'{'}</div>
                      <div className="ml-4"><span className="text-blue-600">"editor.fontSize"</span>: <span className="text-orange-600">14</span>,</div>
                      <div className="ml-4"><span className="text-blue-600">"editor.tabSize"</span>: <span className="text-orange-600">2</span>,</div>
                      <div className="ml-4"><span className="text-blue-600">"editor.formatOnSave"</span>: <span className="text-purple-600">true</span>,</div>
                      <div className="ml-4"><span className="text-blue-600">"workbench.colorTheme"</span>: <span className="text-green-600">"One Dark Pro"</span></div>
                      <div>{'}'}</div>
                    </div>
                  )}

                  {activeToolTab === "extensions" && (
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <span>✓</span>
                        <span>ESLint</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <span>✓</span>
                        <span>Prettier</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <span>✓</span>
                        <span>GitLens</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <span>✓</span>
                        <span>Tailwind CSS IntelliSense</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
