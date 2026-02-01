"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { SupportChat } from "./SupportChat"
import { Users, FileText, Activity, Settings, Calendar, AlertTriangle, TrendingUp, Clock } from "lucide-react"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("patients")
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "张某某",
      age: 58,
      gender: "男",
      status: "待检查",
      lastVisit: "2024-03-15",
      riskLevel: "高危",
      patientId: "EC2024001"
    },
    {
      id: 2,
      name: "李某某",
      age: 45,
      gender: "女",
      status: "已完成",
      lastVisit: "2024-03-14",
      riskLevel: "低危",
      patientId: "EC2024002"
    },
    {
      id: 3,
      name: "王某某",
      age: 62,
      gender: "男",
      status: "复查中",
      lastVisit: "2024-03-13",
      riskLevel: "中危",
      patientId: "EC2024003"
    }
  ])

  const getDashboardData = () => {
    const totalPatients = patients.length
    const pendingExams = patients.filter(p => p.status === "待检查").length
    const completedToday = patients.filter(p => p.lastVisit === "2024-03-15").length
    const highRiskPatients = patients.filter(p => p.riskLevel === "高危").length

    return { totalPatients, pendingExams, completedToday, highRiskPatients }
  }

  const { totalPatients, pendingExams, completedToday, highRiskPatients } = getDashboardData()

  const getStatusColor = (status: string) => {
    switch (status) {
      case "待检查": return "bg-yellow-100 text-yellow-800"
      case "已完成": return "bg-green-100 text-green-800"
      case "复查中": return "bg-blue-100 text-blue-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "高危": return "text-red-600"
      case "中危": return "text-yellow-600"
      case "低危": return "text-green-600"
      default: return "text-gray-600"
    }
  }

  return (
    <div className="flex h-[600px] border rounded-lg overflow-hidden bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r bg-blue-50">
        <div className="p-4 border-b border-blue-200">
          <h2 className="font-semibold text-blue-900 flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>患者管理系统</span>
          </h2>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Button
                variant={activeTab === "overview" ? "default" : "ghost"}
                className={`w-full justify-start ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white"
                    : "text-blue-700 hover:bg-blue-100"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                <Activity className="h-4 w-4 mr-2" />
                概览仪表板
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "patients" ? "default" : "ghost"}
                className={`w-full justify-start ${
                  activeTab === "patients"
                    ? "bg-blue-600 text-white"
                    : "text-blue-700 hover:bg-blue-100"
                }`}
                onClick={() => setActiveTab("patients")}
              >
                <Users className="h-4 w-4 mr-2" />
                患者管理
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "reports" ? "default" : "ghost"}
                className={`w-full justify-start ${
                  activeTab === "reports"
                    ? "bg-blue-600 text-white"
                    : "text-blue-700 hover:bg-blue-100"
                }`}
                onClick={() => setActiveTab("reports")}
              >
                <FileText className="h-4 w-4 mr-2" />
                检测报告
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "schedule" ? "default" : "ghost"}
                className={`w-full justify-start ${
                  activeTab === "schedule"
                    ? "bg-blue-600 text-white"
                    : "text-blue-700 hover:bg-blue-100"
                }`}
                onClick={() => setActiveTab("schedule")}
              >
                <Calendar className="h-4 w-4 mr-2" />
                预约安排
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "consultation" ? "default" : "ghost"}
                className={`w-full justify-start ${
                  activeTab === "consultation"
                    ? "bg-blue-600 text-white"
                    : "text-blue-700 hover:bg-blue-100"
                }`}
                onClick={() => setActiveTab("consultation")}
              >
                <FileText className="h-4 w-4 mr-2" />
                医学咨询
              </Button>
            </li>
            <li>
              <Button
                variant={activeTab === "settings" ? "default" : "ghost"}
                className={`w-full justify-start ${
                  activeTab === "settings"
                    ? "bg-blue-600 text-white"
                    : "text-blue-700 hover:bg-blue-100"
                }`}
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="h-4 w-4 mr-2" />
                系统设置
              </Button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6 overflow-auto">
          {activeTab === "overview" && (
            <div>
              <h1 className="text-2xl font-bold text-blue-900 mb-6">医疗数据概览</h1>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-blue-600 mb-1">总患者数</h3>
                      <p className="text-2xl font-bold text-blue-900">{totalPatients}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-yellow-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-yellow-600 mb-1">待检查</h3>
                      <p className="text-2xl font-bold text-yellow-800">{pendingExams}</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-green-600 mb-1">今日完成</h3>
                      <p className="text-2xl font-bold text-green-800">{completedToday}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg border border-red-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-red-600 mb-1">高危患者</h3>
                      <p className="text-2xl font-bold text-red-800">{highRiskPatients}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">今日工作摘要</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• 已完成 {completedToday} 例食道癌AI检测</li>
                  <li>• {pendingExams} 位患者等待检查</li>
                  <li>• {highRiskPatients} 位高危患者需要重点关注</li>
                  <li>• AI系统运行正常，平均分析时间: 0.8秒</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "patients" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-blue-900">患者管理</h1>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Users className="h-4 w-4 mr-2" />
                  新增患者
                </Button>
              </div>
              <div className="space-y-4">
                {patients.map((patient) => (
                  <div key={patient.id} className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-medium">{patient.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-blue-900">{patient.name}</h3>
                          <p className="text-sm text-blue-600">
                            患者ID: {patient.patientId} | {patient.age}岁 {patient.gender}
                          </p>
                          <p className="text-sm text-blue-500">最后就诊: {patient.lastVisit}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                          {patient.status}
                        </span>
                        <p className={`text-sm mt-1 font-medium ${getRiskColor(patient.riskLevel)}`}>
                          {patient.riskLevel}风险
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div>
              <h1 className="text-2xl font-bold text-blue-900 mb-6">AI检测报告</h1>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-blue-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">张某某 - 内镜AI检测报告</h3>
                      <p className="text-blue-600">患者ID: EC2024001 | 检测时间: 2024-03-15 10:30</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">
                      <FileText className="h-4 w-4 mr-1" />
                      查看详情
                    </Button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-800 mb-2">AI分析结果</h4>
                      <p className="text-sm text-blue-700">检测到疑似癌前病变，置信度: 87.3%</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-2">医学建议</h4>
                      <p className="text-sm text-blue-700">建议进一步活检确认，6个月后复查</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div>
              <h1 className="text-2xl font-bold text-blue-900 mb-6">预约安排</h1>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">今日预约</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-blue-900">09:00 - 张某某</p>
                        <p className="text-sm text-blue-600">食道癌筛查检查</p>
                      </div>
                      <span className="text-sm text-blue-500">进行中</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-blue-900">10:30 - 李某某</p>
                        <p className="text-sm text-blue-600">复查预约</p>
                      </div>
                      <span className="text-sm text-yellow-600">待检查</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h1 className="text-2xl font-bold text-blue-900 mb-6">系统设置</h1>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-medium text-blue-900 mb-3">AI检测参数</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">检测灵敏度</span>
                      <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">调整</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">图像质量要求</span>
                      <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">设置</Button>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-medium text-blue-900 mb-3">数据管理</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">患者数据备份</span>
                      <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">配置</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">报告导出格式</span>
                      <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">设置</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Medical Consultation Chat Panel */}
      {activeTab === "consultation" && (
        <div className="w-80 border-l border-blue-200">
          <SupportChat />
        </div>
      )}
    </div>
  )
}
