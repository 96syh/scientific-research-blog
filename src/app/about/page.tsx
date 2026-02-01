"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Code, BookOpen, Award, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl mx-auto mb-6">
                👨‍💻
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                关于我
              </h1>
              <p className="text-xl text-gray-600">
                全栈开发工程师 | 技术博主 | 开源爱好者
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Code className="h-6 w-6" />
                <span>技术栈</span>
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">前端开发</h3>
                  <p className="text-gray-700">React, Next.js, TypeScript, Tailwind CSS, Vue.js</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">后端开发</h3>
                  <p className="text-gray-700">Node.js, Express, PostgreSQL, MongoDB, Redis</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">工程实践</h3>
                  <p className="text-gray-700">Docker, Kubernetes, CI/CD, Git, AWS</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <BookOpen className="h-6 w-6" />
                <span>工作经历</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800">全栈开发工程师</h3>
                  <p className="text-gray-600 text-sm">2019 - 至今</p>
                  <p className="text-gray-700 mt-2">负责Web应用的设计、开发和部署，使用React、Next.js等现代技术栈</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">联系我</h2>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-3">
                  <Mail className="h-5 w-5 mr-2" />
                  发送邮件
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
