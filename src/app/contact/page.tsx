"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Mail, Github, Twitter, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                联系我
              </h1>
              <p className="text-xl text-gray-600">
                欢迎技术交流、项目合作或职位机会
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-lg mb-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">留言</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="请输入您的留言..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg px-8 py-3">
                  发送消息
                </Button>
              </form>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <a href="mailto:dev@example.com" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-300 transition-all text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <div className="font-medium text-gray-900">邮箱</div>
                <div className="text-sm text-gray-600">dev@example.com</div>
              </a>
              <a href="https://github.com" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-300 transition-all text-center">
                <Github className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <div className="font-medium text-gray-900">GitHub</div>
                <div className="text-sm text-gray-600">@username</div>
              </a>
              <a href="https://twitter.com" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-300 transition-all text-center">
                <Twitter className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <div className="font-medium text-gray-900">Twitter</div>
                <div className="text-sm text-gray-600">@username</div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
