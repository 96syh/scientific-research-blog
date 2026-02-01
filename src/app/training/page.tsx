"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BookOpen, Play, Award } from "lucide-react"

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-blue-900 mb-6">
                AI医学培训中心
              </h1>
              <p className="text-xl text-blue-700">
                专业的AI辅助诊断培训课程和实操教程
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
                    <BookOpen className="h-4 w-4" />
                    <span>Training Center - AI医学培训</span>
                  </div>
                  <div></div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <Play className="h-8 w-8 text-blue-600 mb-4" />
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">入门课程</h3>
                      <p className="text-blue-700 text-sm mb-4">AI辅助诊断基础知识和操作流程</p>
                      <div className="text-xs text-green-600">免费课程 • 2小时</div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <Award className="h-8 w-8 text-green-600 mb-4" />
                      <h3 className="text-lg font-semibold text-green-900 mb-2">专业认证</h3>
                      <p className="text-green-700 text-sm mb-4">获得AI医学诊断专业认证证书</p>
                      <div className="text-xs text-blue-600">认证课程 • 16小时</div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <BookOpen className="h-8 w-8 text-purple-600 mb-4" />
                      <h3 className="text-lg font-semibold text-purple-900 mb-2">高级培训</h3>
                      <p className="text-purple-700 text-sm mb-4">深度学习原理和模型优化技术</p>
                      <div className="text-xs text-orange-600">高级课程 • 32小时</div>
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
