"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Users, MessageSquare, TrendingUp } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-900 mb-6">
                医学AI社区
              </h1>
              <p className="text-xl text-blue-700">
                医学专家、AI研究者和临床医生的交流平台
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 shadow-2xl">
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-blue-50 border-b border-blue-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-blue-800 flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Medical AI Community - 医学AI社区</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600">1,256 在线</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <MessageSquare className="h-8 w-8 text-blue-600 mb-4" />
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">学术讨论</h3>
                      <p className="text-blue-700 text-sm mb-4">最新AI医学研究成果和临床应用讨论</p>
                      <div className="text-xs text-green-600">活跃话题: 156个</div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <Users className="h-8 w-8 text-green-600 mb-4" />
                      <h3 className="text-lg font-semibold text-green-900 mb-2">专家网络</h3>
                      <p className="text-green-700 text-sm mb-4">连接全球医学AI领域的顶尖专家</p>
                      <div className="text-xs text-blue-600">专家成员: 1,250+</div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <TrendingUp className="h-8 w-8 text-purple-600 mb-4" />
                      <h3 className="text-lg font-semibold text-purple-900 mb-2">前沿资讯</h3>
                      <p className="text-purple-700 text-sm mb-4">医学AI技术发展趋势和行业动态</p>
                      <div className="text-xs text-orange-600">每日更新</div>
                    </div>
                  </div>

                  <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">最新讨论</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white rounded border border-blue-200">
                        <div>
                          <div className="font-medium text-blue-900">AI模型在多中心验证中的性能差异</div>
                          <div className="text-sm text-blue-600">张教授 • 2小时前 • 23条回复</div>
                        </div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded border border-blue-200">
                        <div>
                          <div className="font-medium text-blue-900">DICOM图像预处理的最佳实践</div>
                          <div className="text-sm text-blue-600">李博士 • 4小时前 • 15条回复</div>
                        </div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
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
