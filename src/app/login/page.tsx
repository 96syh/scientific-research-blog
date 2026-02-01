"use client"

import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Shield, User, Lock, Stethoscope } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [loginType, setLoginType] = useState<'doctor' | 'admin'>('doctor')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-blue-900 mb-2">EsophaCare AI</h1>
              <p className="text-blue-700">医生登录系统</p>
            </div>

            {/* Login Type Selector */}
            <div className="flex mb-6 bg-blue-50 rounded-lg p-1">
              <button
                onClick={() => setLoginType('doctor')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  loginType === 'doctor'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-blue-600 hover:text-blue-800'
                }`}
              >
                <User className="h-4 w-4 inline mr-2" />
                医生登录
              </button>
              <button
                onClick={() => setLoginType('admin')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  loginType === 'admin'
                    ? 'bg-white text-blue-900 shadow-sm'
                    : 'text-blue-600 hover:text-blue-800'
                }`}
              >
                <Shield className="h-4 w-4 inline mr-2" />
                管理员
              </button>
            </div>

            {/* Login Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  {loginType === 'doctor' ? '医生工号' : '管理员账号'}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={loginType === 'doctor' ? '请输入医生工号' : '请输入管理员账号'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  密码
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400" />
                  <input
                    type="password"
                    className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="请输入密码"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-blue-700">记住登录状态</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  忘记密码？
                </a>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                登录系统
              </Button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">安全提示</p>
                  <p>请妥善保管您的登录凭据，确保患者信息安全。系统采用端到端加密保护所有医疗数据。</p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="mt-6 text-center">
              <p className="text-sm text-blue-600">
                需要技术支持？
                <a href="/support" className="font-medium hover:text-blue-800 ml-1">
                  联系我们
                </a>
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-1">96.8%</div>
              <div className="text-sm text-blue-800">检测准确率</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-blue-600 mb-1">0.8s</div>
              <div className="text-sm text-blue-800">分析速度</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
