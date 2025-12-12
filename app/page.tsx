"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is already logged in
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user")
      if (user) {
        router.push("/home")
      }
    }
  }, [router])

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-between py-20 px-6">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <h1 className="text-7xl font-bold text-[#e63946] italic mb-8">NAMASTE</h1>
        <p className="text-3xl text-[#6c3ba3] font-semibold text-center">Welcome To College Campus</p>
      </div>

      <Button
        onClick={() => router.push("/login")}
        className="bg-[#6c3ba3] hover:bg-[#5a2f8a] text-white text-2xl font-semibold px-24 py-8 rounded-full h-auto"
      >
        START
      </Button>
    </div>
  )
}
