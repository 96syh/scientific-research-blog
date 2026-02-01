"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useState } from "react"
import { FileText, Shield, Users, TrendingUp } from "lucide-react"

export default function GuidelinesPage() {
  const [activeGuide, setActiveGuide] = useState("diagnosis")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-900 mb-6">
                AI辅助诊疗指南
              </h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                基于循证医学的AI辅助食道癌诊疗规范和临床决策支持
              </p>
            </div>

            {/* VSCode风格的指南界面 */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 shadow-2xl">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-blue-50 border-b border-blue-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-blue-800 flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Clinical Guidelines - AI辅助诊疗指南</span>
                  </div>
                  <div></div>
                </div>

                <div className="bg-blue-50 border-b border-blue-200 px-4 py-2 flex space-x-1">
                  {[
                    { id: "diagnosis", label: "🔍 诊断流程", icon: "🩺" },
                    { id: "standards", label: "📏 医学标准", icon: "📋" },
                    { id: "protocols", label: "⚕️ 临床协议", icon: "📊" },
                    { id: "safety", label: "🛡️ 安全规范", icon: "🔒" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveGuide(tab.id)}
                      className={`px-3 py-2 rounded-t-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                        activeGuide === tab.id
                          ? "bg-white text-blue-900 border-t border-l border-r border-blue-200"
                          : "text-blue-600 hover:bg-blue-100"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <div className="flex h-[500px]">
                  <div className="w-64 bg-blue-50 border-r border-blue-200 p-4">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
                      指南目录
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="font-medium text-blue-900">AI诊断规范</div>
                      <div className="ml-2 space-y-1 text-blue-600">
                        <div>图像采集标准</div>
                        <div>AI结果解读</div>
                        <div>质量控制</div>
                      </div>
                      <div className="font-medium text-blue-900 mt-3">临床决策</div>
                      <div className="ml-2 space-y-1 text-blue-600">
                        <div>风险分层</div>
                        <div>治疗建议</div>
                        <div>随访计划</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-6 overflow-auto">
                    {activeGuide === "diagnosis" && (
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">AI辅助诊断流程</h3>
                        <div className="space-y-6">
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 className="font-medium text-green-900 mb-2">1. 图像采集与预处理</h4>
                            <ul className="text-sm text-green-800 space-y-1">
                              <li>• 确保内镜图像清晰度达到临床标准</li>
                              <li>• 图像分辨率不低于512×512像素</li>
                              <li>• 避免过度曝光或欠曝光</li>
                              <li>• 去除图像中的伪影和噪声</li>
                            </ul>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-medium text-blue-900 mb-2">2. AI模型分析</h4>
                            <div className="text-sm text-blue-800 space-y-2">
                              <div>模型输出包含：</div>
                              <div className="ml-4 space-y-1">
                                <div>• 病变类型预测（正常/癌前/恶性）</div>
                                <div>• 置信度评分（0-100%）</div>
                                <div>• 病变区域标注</div>
                                <div>• 风险等级评估</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-medium text-yellow-900 mb-2">3. 结果解读与验证</h4>
                            <ul className="text-sm text-yellow-800 space-y-1">
                              <li>• 置信度&gt;80%：高可信度结果</li>
                              <li>• 置信度60-80%：中等可信度，建议人工复核</li>
                              <li>• 置信度&lt;60%：低可信度，必须人工判断</li>
                              <li>• 所有阳性结果均需专家确认</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeGuide === "standards" && (
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">医学标准与认证</h3>
                        <div className="space-y-4">
                          <div className="border border-blue-200 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-900 mb-3">国际标准合规</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>ISO 13485 ✓</div>
                              <div>IEC 62304 ✓</div>
                              <div>FDA 510(k) ✓</div>
                              <div>CE Mark ✓</div>
                              <div>NMPA认证 ✓</div>
                              <div>HIPAA合规 ✓</div>
                            </div>
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
