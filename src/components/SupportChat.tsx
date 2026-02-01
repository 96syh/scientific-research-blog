"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send, Paperclip, FileText, Stethoscope } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "doctor" | "consultant"
  timestamp: string
  avatar?: string
  type?: "medical" | "normal"
}

export function SupportChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "您好！我是EsophaCare AI医学顾问。请问有什么医学问题需要咨询？",
      sender: "consultant",
      timestamp: "10:30",
      avatar: "🩺",
      type: "medical"
    },
    {
      id: 2,
      text: "我刚完成了一例食道癌AI检测，结果显示87.3%的置信度检测到癌前病变，请帮我分析一下。",
      sender: "doctor",
      timestamp: "10:32"
    },
    {
      id: 3,
      text: "根据您提供的信息，87.3%的置信度是相当高的检测结果。建议您：\n1. 结合患者临床症状\n2. 查看病理活检结果\n3. 考虑内镜下精确定位\n\n请问患者有相关症状吗？",
      sender: "consultant",
      timestamp: "10:33",
      avatar: "🩺",
      type: "medical"
    },
    {
      id: 4,
      text: "患者主诉吞咽困难约2个月，体重下降5kg。既往有胃食管反流病史。",
      sender: "doctor",
      timestamp: "10:35"
    },
    {
      id: 5,
      text: "基于这些临床表现和AI检测结果，强烈建议：\n\n📋 立即安排病理活检\n🔬 胸腹部CT增强扫描\n📊 肿瘤标志物检查\n⚠️ 多学科会诊（MDT）\n\n这是典型的食道癌高危表现，需要紧急处理。",
      sender: "consultant",
      timestamp: "10:36",
      avatar: "🩺",
      type: "medical"
    }
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "doctor",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, message])
      setNewMessage("")

      // Simulate medical consultant response
      setTimeout(() => {
        const consultantResponse: Message = {
          id: messages.length + 2,
          text: "我已收到您的问题。正在分析相关医学文献和临床指南，请稍候...",
          sender: "consultant",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: "🩺",
          type: "medical"
        }
        setMessages(prev => [...prev, consultantResponse])
      }, 1500)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b bg-blue-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg">
            🩺
          </div>
          <div>
            <h3 className="font-medium text-blue-900">医学AI顾问</h3>
            <p className="text-xs text-blue-600 flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>24/7在线服务</span>
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "doctor" ? "justify-end" : "justify-start"}`}
          >
            <div className={`flex space-x-2 max-w-xs lg:max-w-md ${
              message.sender === "doctor" ? "flex-row-reverse space-x-reverse" : ""
            }`}>
              {message.sender === "consultant" && (
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  {message.avatar}
                </div>
              )}
              <div>
                <div className={`rounded-lg px-4 py-3 ${
                  message.sender === "doctor"
                    ? "bg-blue-600 text-white"
                    : message.type === "medical"
                    ? "bg-blue-50 text-blue-900 border border-blue-200"
                    : "bg-gray-100 text-gray-900"
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
                <p className="text-xs text-blue-500 mt-1 px-1">
                  {message.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 bg-blue-50 border-t">
        <div className="flex space-x-2 text-xs">
          <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 h-7">
            <Stethoscope className="h-3 w-3 mr-1" />
            诊断建议
          </Button>
          <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 h-7">
            <FileText className="h-3 w-3 mr-1" />
            治疗方案
          </Button>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <div className="relative">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="请描述您的医学问题或患者情况..."
                className="w-full p-3 border border-blue-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                rows={3}
              />
              <div className="absolute bottom-2 right-2 flex items-center space-x-1">
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Paperclip className="h-4 w-4 text-blue-400" />
                </Button>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <FileText className="h-4 w-4 text-blue-400" />
                </Button>
              </div>
            </div>
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white"
            size="sm"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between mt-2 text-xs text-blue-500">
          <span>输入医学问题，Enter发送，Shift+Enter换行</span>
          <span className="flex items-center space-x-1">
            <Stethoscope className="h-3 w-3" />
            <span>EsophaCare AI医学顾问</span>
          </span>
        </div>
      </div>
    </div>
  )
}
