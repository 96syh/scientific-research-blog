"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                搜索
              </h1>
              <input
                type="text"
                placeholder="搜索文章..."
                className="max-w-2xl w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
