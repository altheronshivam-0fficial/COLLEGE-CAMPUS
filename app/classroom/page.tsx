"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { BottomNav } from "@/components/bottom-nav"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { subjects } from "@/lib/data"
import { getAuthToken } from "@/lib/auth"

export default function ClassroomPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    const user = getAuthToken()
    if (!user) {
      router.push("/login")
    }
  }, [router])

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.professor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-[#e8f4d4] pb-20">
      <Header
        onMenuClick={() => setSidebarOpen(true)}
        onSearchClick={() => {}}
        onHomeClick={() => router.push("/home")}
      />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by subject or subject code"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white border-2 border-[#5ba4d0] h-12"
          />
        </div>

        <div className="space-y-3">
          {filteredSubjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => router.push(`/subject/${subject.id}`)}
              className="w-full bg-white border-b-2 border-gray-300 p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-bold text-sm mb-1 text-gray-800">{subject.name}</h3>
              <p className="text-xs text-gray-600">
                {subject.code} {subject.professor}
              </p>
            </button>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
