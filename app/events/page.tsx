"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { BottomNav } from "@/components/bottom-nav"
import { getAuthToken } from "@/lib/auth"

export default function EventsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const user = getAuthToken()
    if (!user) {
      router.push("/login")
    }
  }, [router])

  return (
    <div className="min-h-screen bg-[#e8f4d4] pb-20">
      <Header
        onMenuClick={() => setSidebarOpen(true)}
        onSearchClick={() => router.push("/classroom")}
        onHomeClick={() => router.push("/home")}
      />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Events</h1>
        <p className="text-gray-600">No events available at the moment.</p>
      </main>

      <BottomNav />
    </div>
  )
}
