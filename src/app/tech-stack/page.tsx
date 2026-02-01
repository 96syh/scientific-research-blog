"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                技术栈
              </h1>
              <p className="text-xl text-gray-600">
                我日常使用的技术栈和开发工具
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
