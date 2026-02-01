"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{'</>'}</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">DevBlog</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              文章
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              项目
            </Link>
            <Link href="/tech-stack" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              技术栈
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              关于
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium">
                更多
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/snippets" className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                    代码片段
                  </Link>
                  <Link href="/resources" className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                    资源分享
                  </Link>
                  <Link href="/docs" className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                    开发文档
                  </Link>
                  <Link href="/community" className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                    开发者社区
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                    联系我
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/search" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              搜索
            </Link>
            <Link href="/subscribe">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-6 font-medium">
                订阅博客
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
