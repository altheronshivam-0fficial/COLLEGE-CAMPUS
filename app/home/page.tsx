"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { PostCard } from "@/components/post-card"
import { BottomNav } from "@/components/bottom-nav"
import { posts } from "@/lib/data"
import { getAuthToken } from "@/lib/auth"

export default function HomePage() {
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

      <main className="p-4 space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>

      <BottomNav />
    </div>
  )
}
