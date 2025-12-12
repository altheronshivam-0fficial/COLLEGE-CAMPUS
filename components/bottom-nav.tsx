"use client"

import { LayoutGrid, FileText, Settings, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function BottomNav() {
  const router = useRouter()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-around shadow-lg z-30">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => router.push("/home")}
        className="text-gray-600 hover:text-[#5ba4d0]"
      >
        <LayoutGrid className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => router.push("/classroom")}
        className="text-gray-600 hover:text-[#5ba4d0]"
      >
        <FileText className="w-6 h-6" />
      </Button>
      <Button variant="ghost" size="icon" className="text-gray-600 hover:text-[#5ba4d0]">
        <Settings className="w-6 h-6" />
      </Button>
      <Button variant="ghost" size="icon" className="text-gray-600 hover:text-[#5ba4d0] bg-black rounded-full">
        <HelpCircle className="w-6 h-6 text-white" />
      </Button>
    </nav>
  )
}
