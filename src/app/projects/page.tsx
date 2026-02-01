"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Star, GitBranch, Eye, Code } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      name: "AI聊天机器人",
      description: "基于GPT-4的智能对话系统，支持上下文记忆和流式响应",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
      stars: "1.2K",
      forks: "156",
      views: "8.5K",
      status: "production"
    },
    {
      name: "实时数据仪表板",
      description: "支持WebSocket实时更新的数据可视化平台",
      tech: ["React", "WebSocket", "Chart.js", "Node.js"],
      stars: "856",
      forks: "92",
      views: "5.3K",
      status: "active"
    },
    {
      name: "代码片段管理器",
      description: "个人代码片段管理和分享工具，支持多语言语法高亮",
      tech: ["Electron", "TypeScript", "Monaco Editor"],
      stars: "492",
      forks: "45",
      views: "3.2K",
      status: "beta"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                开源项目
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                从实战中学习，用代码记录成长
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      project.status === 'production' ? 'bg-green-100 text-green-800' :
                      project.status === 'active' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-600 fill-current" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch className="h-4 w-4" />
                        <span>{project.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
