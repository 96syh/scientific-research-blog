import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Microscope, BookOpen, TrendingUp, Users, Download, ExternalLink } from "lucide-react"

export default function ResearchPage() {
  const researchHighlights = [
    {
      title: "Nature Medicine发表研究成果",
      description: "EsophaCare AI在大规模多中心临床试验中展现出卓越性能",
      date: "2024年3月",
      impact: "影响因子: 87.2"
    },
    {
      title: "食道癌早期检测突破",
      description: "AI模型在早期食道鳞癌检测中达到98.5%的敏感性",
      date: "2024年1月",
      impact: "临床验证: 5万例"
    },
    {
      title: "国际医学AI大会最佳论文",
      description: "深度学习在消化内镜诊断中的创新应用获得国际认可",
      date: "2023年11月",
      impact: "引用次数: 1200+"
    }
  ]

  const clinicalStudies = [
    {
      title: "多中心前瞻性队列研究",
      participants: "15,000名患者",
      duration: "24个月",
      institutions: "50家三甲医院",
      status: "进行中"
    },
    {
      title: "AI辅助内镜筛查效果评估",
      participants: "8,500名受试者",
      duration: "18个月",
      institutions: "25家医疗中心",
      status: "已完成"
    },
    {
      title: "食道癌风险预测模型验证",
      participants: "12,000名高危人群",
      duration: "36个月",
      institutions: "30家专科医院",
      status: "数据分析中"
    }
  ]

  const publications = [
    {
      title: "Deep Learning for Early Detection of Esophageal Cancer in Endoscopic Images",
      journal: "Nature Medicine",
      year: "2024",
      citations: "156",
      impact: "87.2"
    },
    {
      title: "AI-Assisted Endoscopy Improves Detection Rate of Precancerous Lesions",
      journal: "The Lancet Oncology",
      year: "2023",
      citations: "289",
      impact: "51.1"
    },
    {
      title: "Validation of Deep Neural Networks for Esophageal Cancer Screening",
      journal: "JAMA Internal Medicine",
      year: "2023",
      citations: "432",
      impact: "44.4"
    }
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
                医学研究与创新
              </h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto">
                基于前沿AI技术的食道癌检测研究，推动医学诊断技术进步
              </p>
            </div>

            {/* Research Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Microscope className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-blue-800">发表论文</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">96.8%</div>
                <div className="text-sm text-blue-800">检测准确率</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">10万+</div>
                <div className="text-sm text-blue-800">研究样本</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
                <div className="text-sm text-blue-800">合作机构</div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              研究亮点
            </h2>

            <div className="space-y-8">
              {researchHighlights.map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                    <span className="text-sm text-blue-600 bg-white px-3 py-1 rounded-full">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-blue-700 mb-3">{item.description}</p>
                  <div className="text-sm text-blue-600 font-medium">{item.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Studies */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              临床研究项目
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {clinicalStudies.map((study, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">{study.title}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-600">参与者:</span>
                      <span className="text-blue-800">{study.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">研究周期:</span>
                      <span className="text-blue-800">{study.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">参与机构:</span>
                      <span className="text-blue-800">{study.institutions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-600">状态:</span>
                      <span className={`font-medium ${
                        study.status === '已完成' ? 'text-green-600' :
                        study.status === '进行中' ? 'text-blue-600' : 'text-yellow-600'
                      }`}>
                        {study.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              重要发表论文
            </h2>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-blue-900 flex-1 mr-4">{pub.title}</h3>
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      查看
                    </Button>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-blue-700">
                    <span><strong>期刊:</strong> {pub.journal}</span>
                    <span><strong>年份:</strong> {pub.year}</span>
                    <span><strong>引用:</strong> {pub.citations}</span>
                    <span><strong>影响因子:</strong> {pub.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Collaboration */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              加入我们的研究合作
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              与我们携手推进食道癌AI检测技术的发展，为更多患者带来希望
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-900 hover:bg-blue-50">
                <Download className="h-5 w-5 mr-2" />
                下载研究资料
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                申请合作研究
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
