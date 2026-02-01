import { Dashboard } from "@/components/Dashboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Cursor Dashboard
          </h1>
          <p className="text-gray-600">
            Interactive dashboard with support chat functionality - built with React + TypeScript + Tailwind CSS
          </p>
        </div>

        <Dashboard />

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            This demonstrates the Dashboard.tsx and SupportChat.tsx components mentioned in your requirements.
          </p>
        </div>
      </div>
    </div>
  )
}
