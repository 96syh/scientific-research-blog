"use client"

import Link from "next/link"

export function TrustedBySection() {
  const skills = [
    {
      category: "前端开发",
      icon: "⚛️",
      level: "精通"
    },
    {
      category: "React / Next.js",
      icon: "🔷",
      level: "精通"
    },
    {
      category: "TypeScript",
      icon: "💙",
      level: "精通"
    },
    {
      category: "Tailwind CSS",
      icon: "🎨",
      level: "熟练"
    },
    {
      category: "Node.js",
      icon: "🟢",
      level: "精通"
    },
    {
      category: "PostgreSQL",
      icon: "🐘",
      level: "熟练"
    },
    {
      category: "Docker",
      icon: "🐳",
      level: "熟练"
    },
    {
      category: "Git / GitHub",
      icon: "🌿",
      level: "精通"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            技能栈 & 开发工具
          </h2>
          <p className="text-gray-600">
            这些是我日常使用的技术栈和工具
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {skills.map((skill, index) => (
            <Link
              key={index}
              href="/tech-stack"
              className="flex flex-col justify-center items-center p-4 bg-gray-50 rounded-lg hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <div className="text-xs text-center text-gray-800 font-medium leading-tight">
                {skill.category}
              </div>
              <div className="text-xs text-gray-500 mt-1">{skill.level}</div>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <Link href="/about" className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:shadow-lg cursor-pointer">
            <div className="text-2xl mb-2">💻</div>
            <div className="text-sm font-medium text-gray-900">5+ 年经验</div>
            <div className="text-xs text-gray-600">全栈开发</div>
          </Link>
          <Link href="/projects" className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:shadow-lg cursor-pointer">
            <div className="text-2xl mb-2">🚀</div>
            <div className="text-sm font-medium text-gray-900">20+ 项目</div>
            <div className="text-xs text-gray-600">开源与商业项目</div>
          </Link>
          <Link href="/blog" className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:shadow-lg cursor-pointer">
            <div className="text-2xl mb-2">✍️</div>
            <div className="text-sm font-medium text-gray-900">50+ 文章</div>
            <div className="text-xs text-gray-600">技术博客</div>
          </Link>
          <Link href="/projects" className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:shadow-lg cursor-pointer">
            <div className="text-2xl mb-2">⭐</div>
            <div className="text-sm font-medium text-gray-900">1K+ Stars</div>
            <div className="text-xs text-gray-600">GitHub开源项目</div>
          </Link>
        </div>
      </div>
    </section>
  )
}
