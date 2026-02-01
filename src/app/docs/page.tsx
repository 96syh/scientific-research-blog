"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useState } from "react"
import { Code, Book, FileText, Terminal, Database, Cpu } from "lucide-react"

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("api")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-900 mb-6">
                技术文档中心
              </h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                EsophaCare AI技术文档、API参考和开发指南
              </p>
            </div>

            {/* VSCode风格的文档界面 */}
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
                    <Book className="h-4 w-4" />
                    <span>Technical Documentation - EsophaCare AI</span>
                  </div>
                  <div></div>
                </div>

                {/* 文档标签页 */}
                <div className="bg-blue-50 border-b border-blue-200 px-4 py-2 flex space-x-1">
                  {[
                    { id: "api", label: "🔌 API Reference", icon: "📡" },
                    { id: "models", label: "🧠 AI Models", icon: "🤖" },
                    { id: "integration", label: "🔧 Integration", icon: "⚙️" },
                    { id: "deployment", label: "🚀 Deployment", icon: "☁️" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSection(tab.id)}
                      className={`px-3 py-2 rounded-t-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                        activeSection === tab.id
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
                      文档目录
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="font-medium text-blue-900 mb-2">快速开始</div>
                      <div className="ml-2 space-y-1">
                        <div className="text-blue-600 hover:text-blue-800 cursor-pointer">安装指南</div>
                        <div className="text-blue-600 hover:text-blue-800 cursor-pointer">认证配置</div>
                        <div className="text-blue-600 hover:text-blue-800 cursor-pointer">第一个请求</div>
                      </div>

                      <div className="font-medium text-blue-900 mb-2 mt-4">API端点</div>
                      <div className="ml-2 space-y-1">
                        <div className="text-blue-600 hover:text-blue-800 cursor-pointer">/api/v1/detect</div>
                        <div className="text-blue-600 hover:text-blue-800 cursor-pointer">/api/v1/models</div>
                        <div className="text-blue-600 hover:text-blue-800 cursor-pointer">/api/v1/reports</div>
                      </div>

                      <div className="font-medium text-blue-900 mb-2 mt-4">SDK文档</div>
                      <div className="ml-2 space-y-1">
                        <div className="text-blue-600 hover:text-blue-800 cursor-pointer">Python SDK</div>
                        <div className="text-blue-600 hover:text-blue-800 cursor-pointer">Node.js SDK</div>
                        <div className="text-blue-600 hover:text-blue-800 cursor-pointer">Java SDK</div>
                      </div>
                    </div>
                  </div>

                  {/* 文档内容 */}
                  <div className="flex-1 bg-white p-6 overflow-auto">
                    {activeSection === "api" && (
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">API参考文档</h3>

                        <div className="space-y-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-blue-900 mb-2">检测API</h4>
                            <div className="font-mono text-sm bg-gray-800 text-green-400 p-3 rounded">
                              <div className="text-blue-400">POST</div>
                              <div className="text-white">/api/v1/detect</div>
                              <div className="mt-2 text-gray-300">{`{
  "image": "base64_encoded_image",
  "model": "esophacare-v3.2",
  "options": {
    "confidence_threshold": 0.8
  }
}`}</div>
                            </div>
                          </div>

                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium text-blue-900 mb-2">响应格式</h4>
                            <div className="font-mono text-sm bg-gray-800 text-green-400 p-3 rounded">
                              <div className="text-gray-300">{`{
  "result": {
    "prediction": "precancerous_lesion",
    "confidence": 0.968,
    "processing_time": 0.8,
    "regions": [
      {
        "x": 145, "y": 230,
        "width": 50, "height": 40,
        "type": "suspicious"
      }
    ]
  }
}`}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "models" && (
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">AI模型文档</h3>

                        <div className="space-y-6">
                          <div className="border border-blue-200 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-900 mb-3">EsophaCare-V3.2</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-blue-600">架构:</span>
                                <span className="ml-2 text-blue-900">Transformer + CNN</span>
                              </div>
                              <div>
                                <span className="text-blue-600">参数量:</span>
                                <span className="ml-2 text-blue-900">1.2B</span>
                              </div>
                              <div>
                                <span className="text-blue-600">准确率:</span>
                                <span className="ml-2 text-green-600 font-bold">96.8%</span>
                              </div>
                              <div>
                                <span className="text-blue-600">推理时间:</span>
                                <span className="ml-2 text-blue-900">0.8秒</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-medium text-purple-900 mb-2">模型输入规格</h4>
                            <ul className="text-sm text-purple-700 space-y-1">
                              <li>• 图像格式: JPEG, PNG, DICOM</li>
                              <li>• 图像尺寸: 512x512 至 2048x2048</li>
                              <li>• 颜色空间: RGB, 灰度</li>
                              <li>• 文件大小: 最大10MB</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "integration" && (
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">集成指南</h3>

                        <div className="space-y-6">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium text-green-900 mb-2">Python SDK示例</h4>
                            <div className="font-mono text-sm bg-gray-800 text-green-400 p-3 rounded">
                              <div className="text-gray-300">{`from esophacare import EsophaCareClient

client = EsophaCareClient(api_key="your_api_key")

result = client.detect_image(
    image_path="endoscopy.jpg",
    model="esophacare-v3.2"
)

print(f"Confidence: {result.confidence}")
print(f"Prediction: {result.prediction}")`}</div>
                            </div>
                          </div>

                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-medium text-yellow-900 mb-2">DICOM集成</h4>
                            <p className="text-sm text-yellow-700 mb-2">
                              支持直接处理DICOM格式的医学图像文件
                            </p>
                            <div className="text-xs text-yellow-600">
                              兼容PACS系统，支持HL7 FHIR标准
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection === "deployment" && (
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">部署指南</h3>

                        <div className="space-y-6">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium text-blue-900 mb-2">云端部署</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• 支持AWS、Azure、阿里云</li>
                              <li>• GPU推荐: NVIDIA A100、V100</li>
                              <li>• 内存需求: 最小16GB</li>
                              <li>• 网络要求: 1Gbps+</li>
                            </ul>
                          </div>

                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900 mb-2">本地部署</h4>
                            <div className="font-mono text-sm bg-gray-800 text-green-400 p-3 rounded">
                              <div className="text-gray-300">{`docker run -d \\
  --gpus all \\
  -p 8080:8080 \\
  -e API_KEY=your_key \\
  esophacare/api:latest`}</div>
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
