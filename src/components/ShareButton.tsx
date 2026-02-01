"use client"

import { useState } from "react"

export function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="text-gray-600 hover:text-purple-600 transition-colors"
      title="复制链接"
    >
      {copied ? "✅ 已复制!" : "📋 复制链接"}
    </button>
  )
}


