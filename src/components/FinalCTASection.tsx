"use client"

import { Button } from "@/components/ui/button"
import { Mail, Github, Twitter, Linkedin, Code, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
  const recentAchievements = [
    {
      title: "Next.js 14 最佳实践文章获5K+阅读",
      description: "深入探讨App Router、Server Components等核心特性，帮助开发者快速上手Next.js 14最新版本。",
      type: "热门文章",
      date: "2024年3月",
      impact: "5.2K阅读"
    },
    {
      title: "开源项目AI聊天机器人突破1K Stars",
      description: "基于GPT-4的智能对话系统，集成Next.js、OpenAI API、Tailwind CSS等现代技术栈。",
      type: "GitHub项目",
      date: "2024年2月",
      impact: "1.2K Stars"
    },
    {
      title: "TypeScript高级类型系统完全指南",
      description: "从泛型约束到类型体操，全面讲解TypeScript类型系统的高级特性和实战应用。",
      type: "技术教程",
      date: "2024年2月",
      impact: "4.8K阅读"
    }
  ]

  const skills = [
    {
      category: "前端开发",
      tech: "React, Next.js, TypeScript",
      level: "精通",
      emoji: "⚛️"
    },
    {
      category: "后端开发",
      tech: "Node.js, Express, PostgreSQL",
      level: "熟练",
      emoji: "🔧"
    },
    {
      category: "工程实践",
      tech: "Docker, CI/CD, Git",
      level: "熟练",
      emoji: "🛠️"
    },
    {
      category: "AI应用",
      tech: "OpenAI API, LangChain",
      level: "研究中",
      emoji: "🤖"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            关于我
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            全栈开发工程师，专注于现代Web技术和AI应用开发。热爱分享技术，记录成长。
          </p>
        </div>

        {/* Recent Achievements */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span>近期成就</span>
            </h3>

            <div className="space-y-6">
              {recentAchievements.map((achievement, index) => (
                <Link
                  key={index}
                  href={achievement.type === "GitHub项目" ? "/projects" : "/blog"}
                  className="block bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-medium text-gray-900 flex-1 mr-4">
                      {achievement.title}
                    </h4>
                    <div className="text-right">
                      <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">
                        {achievement.type}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">{achievement.date}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="text-sm font-medium text-green-600">
                    {achievement.impact}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/about">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-6 py-3">
                  查看完整简历 →
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg p-6 shadow-xl">
              <div className="bg-white rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4">
                    👨‍💻
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    全栈开发工程师
                  </h4>
                  <p className="text-gray-700 mb-6">
                    5年+开发经验 | 技术博主 | 开源爱好者
                  </p>

                  <div className="flex justify-center space-x-4 mb-6">
                    <Link href="https://github.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
                      <Github className="h-5 w-5 text-gray-700" />
                    </Link>
                    <Link href="https://twitter.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
                      <Twitter className="h-5 w-5 text-gray-700" />
                    </Link>
                    <Link href="https://linkedin.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors">
                      <Linkedin className="h-5 w-5 text-gray-700" />
                    </Link>
                  </div>
                </div>

                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 flex items-center space-x-2">
                          <span>{skill.emoji}</span>
                          <span>{skill.category}</span>
                        </span>
                        <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">{skill.level}</span>
                      </div>
                      <div className="text-sm text-gray-600">{skill.tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">联系方式</h3>
            <p className="text-purple-100">欢迎技术交流、项目合作或职位机会</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link href="/contact" className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <div className="text-purple-100 font-medium mb-1">邮箱联系</div>
              <div className="text-sm text-purple-200">dev@example.com</div>
            </Link>
            <Link href="https://github.com" className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all">
              <Github className="h-8 w-8 mx-auto mb-3" />
              <div className="text-purple-100 font-medium mb-1">GitHub</div>
              <div className="text-sm text-purple-200">@yourusername</div>
            </Link>
            <Link href="/contact" className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all">
              <MessageCircle className="h-8 w-8 mx-auto mb-3" />
              <div className="text-purple-100 font-medium mb-1">留言板</div>
              <div className="text-sm text-purple-200">在线留言</div>
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            一起探索技术的无限可能
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            关注我的博客，获取最新的前端技术、全栈开发和软件工程最佳实践
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/subscribe">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 py-4 text-lg font-medium inline-flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>订阅博客</span>
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-4 text-lg font-medium inline-flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>联系我</span>
              </Button>
            </Link>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            让我们一起在代码的世界中探索、学习和成长
          </div>
        </div>
      </div>
    </section>
  )
}
