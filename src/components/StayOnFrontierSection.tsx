"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Database, Stethoscope, BookOpen, Code, Lightbulb } from "lucide-react"
import Link from "next/link"

export function StayOnFrontierSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            技术学习资源
          </h2>
          <p className="text-xl text-gray-600">
            持续学习最新技术，分享优质开发资源和实践经验
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Learning Resources */}
          <div className="space-y-6">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-4 shadow-xl">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-gray-600">学习资源</div>
                    <div></div>
                  </div>

                  <div className="p-6">
                    <div className="space-y-3">
                      <Link href="/resources" className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-400 transition-all cursor-pointer">
                        <span className="font-medium text-gray-900 flex items-center space-x-2">
                          <BookOpen className="h-4 w-4 text-purple-600" />
                          <span>官方文档</span>
                        </span>
                        <span className="text-xs text-purple-500 bg-purple-100 px-2 py-1 rounded">推荐</span>
                      </Link>

                      <Link href="/resources" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <span className="text-gray-700 flex items-center space-x-2">
                          <span>📚</span>
                          <span>React 18 新特性</span>
                        </span>
                        <span className="text-xs text-purple-500">最新</span>
                      </Link>

                      <Link href="/resources" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <span className="text-gray-700 flex items-center space-x-2">
                          <span>🎓</span>
                          <span>TypeScript 高级技巧</span>
                        </span>
                        <span className="text-xs text-purple-500">进阶</span>
                      </Link>

                      <Link href="/resources" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <span className="text-gray-700 flex items-center space-x-2">
                          <span>💡</span>
                          <span>Next.js 14 最佳实践</span>
                        </span>
                        <span className="text-xs text-purple-500">实战</span>
                      </Link>

                      <Link href="/resources" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <span className="text-gray-700 flex items-center space-x-2">
                          <span>🎨</span>
                          <span>CSS 动画教程</span>
                        </span>
                        <span className="text-xs text-purple-500">创意</span>
                      </Link>

                      <Link href="/resources" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <span className="text-gray-700 flex items-center space-x-2">
                          <span>⚡</span>
                          <span>性能优化指南</span>
                        </span>
                        <span className="text-xs text-purple-500">优化</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                精选学习资源
              </h3>
              <p className="text-gray-600 mb-4">
                整理了前端、后端和全栈开发的优质学习资源，帮助开发者快速成长。
              </p>
              <Link href="/resources">
                <Button variant="outline" className="rounded-full px-6 py-2 text-purple-600 border-purple-600 hover:bg-purple-50">
                  查看全部资源 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Tech Trends & Blog */}
          <div className="space-y-6">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-4 shadow-xl">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-gray-600">技术趋势</div>
                    <div></div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-900 mb-3">
                        2024年前端技术趋势？
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-600">已研究</span>
                          <span className="text-gray-700">React Server Components</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-600">已分析</span>
                          <span className="text-gray-700">AI辅助编程工具</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-600">正在学习</span>
                          <span className="text-gray-700">Rust与WebAssembly</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-600">已掌握</span>
                          <span className="text-gray-700">全栈TypeScript开发</span>
                        </div>
                      </div>
                    </div>

                    <Link href="/blog" className="block bg-green-50 p-3 rounded-lg border border-green-200 hover:border-green-300 transition-all">
                      <div className="text-green-800 font-medium text-sm mb-1">✓ 已发布文章</div>
                      <div className="text-green-700 text-xs">《2024前端技术趋势分析》</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                技术博客文章
              </h3>
              <p className="text-gray-600 mb-4">
                深入探讨前端技术趋势、最佳实践和实战经验分享。
              </p>
              <Link href="/blog">
                <Button variant="outline" className="rounded-full px-6 py-2 text-purple-600 border-purple-600 hover:bg-purple-50">
                  阅读技术文章 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Code Snippets */}
          <div className="space-y-6">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-4 shadow-xl">
                <div className="bg-white rounded-lg overflow-hidden h-64">
                  <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-gray-600">代码片段</div>
                    <div></div>
                  </div>

                  <div className="p-4 h-full bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="text-center space-y-4">
                      <div className="text-4xl">💻</div>
                      <div className="text-sm text-gray-800 font-medium">100+ 代码片段</div>
                      <div className="text-xs text-gray-600">实用工具和函数库</div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <Link href="/snippets" className="bg-white p-2 rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                          <div className="text-gray-800 font-medium">React Hooks</div>
                          <div className="text-gray-600">25个片段</div>
                        </Link>
                        <Link href="/snippets" className="bg-white p-2 rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                          <div className="text-gray-800 font-medium">TypeScript</div>
                          <div className="text-gray-600">30个片段</div>
                        </Link>
                        <Link href="/snippets" className="bg-white p-2 rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                          <div className="text-gray-800 font-medium">CSS技巧</div>
                          <div className="text-gray-600">20个片段</div>
                        </Link>
                        <Link href="/snippets" className="bg-white p-2 rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                          <div className="text-gray-800 font-medium">Node.js</div>
                          <div className="text-gray-600">25个片段</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                代码片段库
              </h3>
              <p className="text-gray-600 mb-4">
                收集整理的实用代码片段，涵盖React、TypeScript、CSS等多个领域。
              </p>
              <Link href="/snippets">
                <Button variant="outline" className="rounded-full px-6 py-2 text-purple-600 border-purple-600 hover:bg-purple-50">
                  浏览代码片段 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">学习与分享统计</h3>
            <p className="text-purple-100">持续学习，持续输出，持续成长</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <Link href="/blog" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-purple-100 font-medium">技术文章</div>
              <div className="text-sm text-purple-200">深度技术分享</div>
            </Link>
            <Link href="/snippets" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-purple-100 font-medium">代码片段</div>
              <div className="text-sm text-purple-200">实用工具函数</div>
            </Link>
            <Link href="/resources" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-purple-100 font-medium">学习资源</div>
              <div className="text-sm text-purple-200">精选优质内容</div>
            </Link>
            <Link href="/about" className="hover:opacity-80 transition-opacity">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-purple-100 font-medium">学习年限</div>
              <div className="text-sm text-purple-200">持续精进技术</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
