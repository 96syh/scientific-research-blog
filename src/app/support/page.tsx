"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useState } from "react"
import { MessageCircle, Monitor, AlertTriangle, CheckCircle, HelpCircle, Terminal } from "lucide-react"

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("chat")
  const [systemStatus] = useState({
    api: "operational",
    ai_models: "operational",
    database: "operational",
    cdn: "degraded"
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-900 mb-6">
                技术支持中心
              </h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                24/7技术支持服务，为您的医学AI应用提供全方位保障
              </p>
            </div>

            {/* VSCode风格的支持界面 */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 shadow-2xl">
              <div className="bg-white rounded-lg overflow-hidden">
                {/* VSCode标题栏 */}
                <div className="bg-blue-50 border-b border-blue-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="text-sm font-medium text-blue-800 flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Support Center - 技术支持</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600">在线</span>
                  </div>
                </div>

                {/* 支持标签页 */}
                <div className="bg-blue-50 border-b border-blue-200 px-4 py-2 flex space-x-1">
                  {[
                    { id: "chat", label: "💬 实时支持", icon: "🔄" },
                    { id: "status", label: "📊 系统状态", icon: "📈" },
                    { id: "diagnostics", label: "🔧 问题诊断", icon: "🔍" },
                    { id: "knowledge", label: "📚 知识库", icon: "📖" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-2 rounded-t-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                        activeTab === tab.id
                          ? "bg-white text-blue-900 border-t border-l border-r border-blue-200 transform scale-105"
                          : "text-blue-600 hover:bg-blue-100"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* 主要内容区域 */}
                <div className="flex h-[500px]">
                  {/* 侧边栏 */}
                  <div className="w-64 bg-blue-50 border-r border-blue-200 p-4">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
                      快速操作
                    </div>
                    <div className="space-y-2 text-sm">
                      <button className="w-full text-left px-3 py-2 bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors">
                        🚀 开启新对话
                      </button>
                      <button className="w-full text-left px-3 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors">
                        📊 查看API状态
                      </button>
                      <button className="w-full text-left px-3 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition-colors">
                        🔧 运行诊断
                      </button>
                      <button className="w-full text-left px-3 py-2 bg-purple-100 text-purple-800 rounded hover:bg-purple-200 transition-colors">
                        📞 预约通话
                      </button>
                    </div>

                    <div className="mt-6">
                      <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
                        联系方式
                      </div>
                      <div className="space-y-2 text-xs text-blue-700">
                        <div>📧 support@esophacare.ai</div>
                        <div>📱 400-888-0123</div>
                        <div>🕒 7×24小时服务</div>
                      </div>
                    </div>
                  </div>

                  {/* 支持内容 */}
                  <div className="flex-1 bg-white overflow-auto">
                    {activeTab === "chat" && (
                      <div className="h-full flex flex-col">
                        <div className="p-4 border-b border-gray-200">
                          <h3 className="text-lg font-semibold text-blue-900">实时技术支持</h3>
                          <p className="text-sm text-blue-600">专业技术团队为您提供即时帮助</p>
                        </div>

                        <div className="flex-1 p-4 space-y-4 overflow-auto">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                              🤖
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg max-w-xs">
                              <div className="text-sm text-blue-900">
                                您好！我是EsophaCare AI技术支持助手。请描述您遇到的问题，我将为您提供专业帮助。
                              </div>
                              <div className="text-xs text-blue-500 mt-1">刚刚</div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 justify-end">
                            <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                              <div className="text-sm text-gray-900">
                                API调用返回429错误，显示"Rate limit exceeded"
                              </div>
                              <div className="text-xs text-gray-500 mt-1">1分钟前</div>
                            </div>
                            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm">
                              👨‍⚕️
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                              🤖
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg max-w-xs">
                              <div className="text-sm text-blue-900">
                                已检测到您的API限流问题。当前您的账户级别为基础版（100次/分钟）。建议：
                                <br />1. 减少请求频率
                                <br />2. 升级到专业版（1000次/分钟）
                                <br />3. 实现请求缓存机制
                              </div>
                              <div className="text-xs text-blue-500 mt-1">刚刚</div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 border-t border-gray-200">
                          <div className="flex space-x-2">
                            <input
                              type="text"
                              placeholder="描述您的问题..."
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                              发送
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "status" && (
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">系统状态监控</h3>

                        <div className="space-y-4">
                          {Object.entries(systemStatus).map(([service, status]) => (
                            <div key={service} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 rounded-full ${
                                  status === 'operational' ? 'bg-green-500' :
                                  status === 'degraded' ? 'bg-yellow-500' : 'bg-red-500'
                                }`}></div>
                                <span className="font-medium text-gray-900 capitalize">
                                  {service.replace('_', ' ')}
                                </span>
                              </div>
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                status === 'operational' ? 'bg-green-100 text-green-800' :
                                status === 'degraded' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {status === 'operational' ? '正常运行' :
                                 status === 'degraded' ? '性能下降' : '服务中断'}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium text-blue-900 mb-2">性能指标</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-blue-600">API响应时间:</span>
                              <span className="ml-2 text-green-600 font-bold">0.8s</span>
                            </div>
                            <div>
                              <span className="text-blue-600">可用性:</span>
                              <span className="ml-2 text-green-600 font-bold">99.9%</span>
                            </div>
                            <div>
                              <span className="text-blue-600">错误率:</span>
                              <span className="ml-2 text-green-600 font-bold">0.01%</span>
                            </div>
                            <div>
                              <span className="text-blue-600">并发用户:</span>
                              <span className="ml-2 text-blue-900 font-bold">2,456</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "diagnostics" && (
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">问题诊断工具</h3>

                        <div className="space-y-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-3">连接测试</h4>
                            <div className="font-mono text-sm bg-gray-800 text-green-400 p-3 rounded">
                              <div className="text-green-400">[INFO] 正在测试API连接...</div>
                              <div className="text-blue-400">[TEST] ping api.esophacare.ai</div>
                              <div className="text-green-400">[OK] 连接成功 (延迟: 12ms)</div>
                              <div className="text-blue-400">[TEST] 验证API密钥</div>
                              <div className="text-green-400">[OK] API密钥有效</div>
                              <div className="text-blue-400">[TEST] 检查服务状态</div>
                              <div className="text-green-400">[OK] 所有服务正常运行</div>
                            </div>
                          </div>

                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-medium text-yellow-900 mb-2">常见问题解决</h4>
                            <ul className="text-sm text-yellow-700 space-y-1">
                              <li>• 检查API密钥是否正确配置</li>
                              <li>• 确认网络连接稳定</li>
                              <li>• 验证请求格式符合API规范</li>
                              <li>• 检查是否超过请求频率限制</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "knowledge" && (
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">知识库</h3>

                        <div className="space-y-4">
                          <div className="border border-blue-200 rounded-lg p-4">
                            <h4 className="font-medium text-blue-900 mb-2">API集成指南</h4>
                            <p className="text-sm text-blue-700 mb-2">
                              详细的API集成步骤和最佳实践
                            </p>
                            <span className="text-xs text-green-600">已解决 1,234 个问题</span>
                          </div>

                          <div className="border border-blue-200 rounded-lg p-4">
                            <h4 className="font-medium text-blue-900 mb-2">错误代码参考</h4>
                            <p className="text-sm text-blue-700 mb-2">
                              所有错误代码的含义和解决方案
                            </p>
                            <span className="text-xs text-green-600">已解决 856 个问题</span>
                          </div>

                          <div className="border border-blue-200 rounded-lg p-4">
                            <h4 className="font-medium text-blue-900 mb-2">性能优化建议</h4>
                            <p className="text-sm text-blue-700 mb-2">
                              提升AI检测性能的优化技巧
                            </p>
                            <span className="text-xs text-green-600">已解决 492 个问题</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
