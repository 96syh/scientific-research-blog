import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Brain, Upload, FileText, Activity } from "lucide-react"

export default function DetectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-900 mb-6">
                AI智能检测系统
              </h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                上传内镜图像，获得精准的食道癌AI检测结果
              </p>
            </div>

            {/* Detection Interface */}
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Upload Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-blue-900 flex items-center space-x-2">
                    <Upload className="h-6 w-6" />
                    <span>上传内镜图像</span>
                  </h2>

                  <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                    <Upload className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <p className="text-blue-700 mb-2">点击上传或拖拽图像文件</p>
                    <p className="text-sm text-blue-500">支持 JPG、PNG、DICOM 格式</p>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Brain className="h-5 w-5 mr-2" />
                    开始AI分析
                  </Button>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-blue-900 flex items-center space-x-2">
                    <Activity className="h-6 w-6" />
                    <span>检测结果</span>
                  </h2>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="text-center text-blue-600 mb-4">
                      等待上传图像进行分析...
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border">
                        <h3 className="font-medium text-blue-900 mb-2">检测状态</h3>
                        <div className="text-blue-700">准备就绪</div>
                      </div>

                      <div className="bg-white p-4 rounded border">
                        <h3 className="font-medium text-blue-900 mb-2">预期结果</h3>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• 组织病理分类</li>
                          <li>• 病变位置标注</li>
                          <li>• 恶性程度评估</li>
                          <li>• 临床建议</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              AI检测功能特点
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">深度学习算法</h3>
                <p className="text-blue-700">基于大规模医学数据训练的深度神经网络，检测准确率达96.8%</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Activity className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">实时分析</h3>
                <p className="text-blue-700">亚秒级图像处理速度，为临床诊断提供即时反馈</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">详细报告</h3>
                <p className="text-blue-700">生成标准化的医学检测报告，便于临床记录和跟踪</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
