import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Stethoscope, Users, BarChart3, Shield, Clock, Award } from "lucide-react"

export default function ClinicalPage() {
  const clinicalFeatures = [
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "早期筛查",
      description: "帮助医生识别食道癌早期病变，提高早期发现率"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "风险评估",
      description: "基于AI算法量化患者病变风险，辅助临床决策"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "患者管理",
      description: "完整的患者档案管理系统，跟踪治疗进展"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "提升效率",
      description: "减少诊断时间，提高医生工作效率"
    }
  ]

  const clinicalData = [
    { metric: "96.8%", label: "检测准确率", description: "经过大规模临床验证" },
    { metric: "0.8秒", label: "平均分析时间", description: "实时检测结果" },
    { metric: "500+", label: "合作医院", description: "覆盖全国主要医疗机构" },
    { metric: "50万+", label: "检测案例", description: "累计服务患者数量" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-900 mb-6">
                临床应用解决方案
              </h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                为医疗机构提供专业的食道癌AI检测系统，提升诊疗质量和效率
              </p>
            </div>

            {/* Clinical Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {clinicalData.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</div>
                  <div className="text-lg font-medium text-blue-900 mb-1">{item.label}</div>
                  <div className="text-sm text-blue-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              临床应用特点
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {clinicalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
                  <div className="text-blue-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
                    <p className="text-blue-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              临床工作流程
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">图像采集</h3>
                <p className="text-blue-700">使用内镜设备获取高质量图像</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">AI分析</h3>
                <p className="text-blue-700">上传图像进行智能分析处理</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">结果评估</h3>
                <p className="text-blue-700">医生结合AI结果进行诊断</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">治疗决策</h3>
                <p className="text-blue-700">制定个性化治疗方案</p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Compliance */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  安全与合规
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-green-600" />
                    <span className="text-blue-800">符合NMPA医疗器械标准</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-green-600" />
                    <span className="text-blue-800">通过ISO 13485质量体系认证</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-green-600" />
                    <span className="text-blue-800">数据加密和隐私保护</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6 text-green-600" />
                    <span className="text-blue-800">获得权威医学机构认证</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">申请临床试用</h3>
                <p className="text-blue-700 mb-6">
                  为您的医疗机构申请EsophaCare AI系统试用，体验先进的AI辅助诊断技术。
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  立即申请试用
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
