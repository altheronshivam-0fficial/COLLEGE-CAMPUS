"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Upload, Download } from "lucide-react"
import { subjects } from "@/lib/data"
import { getAuthToken } from "@/lib/auth"

const resources = [
  { id: "lectures", label: "LECTURES", color: "bg-[#c8e6c9]" },
  { id: "assignments", label: "ASSIGNMENTS", color: "bg-[#c8e6c9]" },
  { id: "lab-files", label: "LAB FILES", color: "bg-[#c8e6c9]" },
  { id: "events", label: "EVENT PHOTOS & VIDEOS", color: "bg-[#a5d6a7]" },
  { id: "notes", label: "NOTES", color: "bg-[#c8e6c9]" },
  { id: "papers", label: "PREV. YEAR Q. PAPER", color: "bg-[#a5d6a7]" },
]

export default function SubjectPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const params = useParams()
  const subjectId = params.id as string

  useEffect(() => {
    const user = getAuthToken()
    if (!user) {
      router.push("/login")
    }
  }, [router])

  const subject = subjects.find((s) => s.id === subjectId)

  if (!subject) {
    return <div>Subject not found</div>
  }

  return (
    <div className="min-h-screen bg-[#e8f4d4] pb-20">
      <Header
        onMenuClick={() => setSidebarOpen(true)}
        onSearchClick={() => router.push("/classroom")}
        onHomeClick={() => router.push("/home")}
      />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="p-4">
        <div className="bg-white p-4 mb-4 border-b-2 border-gray-300">
          <h2 className="font-bold text-sm mb-1 text-gray-800">{subject.name}</h2>
          <p className="text-xs text-gray-600">
            {subject.code} {subject.professor}
          </p>
        </div>

        <div className="flex gap-2 mb-4">
          <Button variant="outline" className="flex-1 bg-white border-2 border-gray-300 hover:bg-gray-50 h-12 gap-2">
            <Upload className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">UPLOAD</span>
          </Button>
          <Button
            variant="outline"
            className="flex-1 bg-[#c8e6c9] border-2 border-gray-300 hover:bg-[#a5d6a7] h-12 gap-2"
          >
            <Download className="w-5 h-5 text-blue-600" />
            <span className="font-semibold">DOWNLOAD</span>
          </Button>
        </div>

        <div className="space-y-3">
          {resources.map((resource) => (
            <Button
              key={resource.id}
              className={`w-full ${resource.color} hover:opacity-90 h-16 text-black font-bold text-lg border-2 border-gray-400 shadow-md`}
            >
              {resource.label}
            </Button>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
