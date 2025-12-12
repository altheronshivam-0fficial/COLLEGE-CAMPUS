"use client"

import { User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { menuItems } from "@/lib/data"
import { useRouter } from "next/navigation"
import { clearAuthToken, getAuthToken } from "@/lib/auth"
import { useEffect, useState } from "react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = getAuthToken()
    setUser(userData)
  }, [])

  const handleLogout = () => {
    clearAuthToken()
    router.push("/login")
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <aside className="fixed left-0 top-0 h-full w-80 bg-[#5ba4d0] z-50 shadow-2xl overflow-y-auto">
        <div className="p-6 bg-[#4a8fb8]">
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-[#5ba4d0]">
              <X className="h-6 w-6" />
            </Button>
          </div>

          {user && (
            <div className="text-white space-y-1">
              <p className="font-semibold text-lg">{user.name}</p>
              <p className="text-sm">{user.studentId}</p>
              <p className="text-sm">{user.section}</p>
              <p className="text-sm">{user.enrollmentNo}</p>
            </div>
          )}
        </div>

        <nav className="py-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                router.push(item.href)
                onClose()
              }}
              className="w-full px-6 py-4 text-left text-white font-semibold hover:bg-[#4a8fb8] transition-colors border-b border-[#4a8fb8]"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="w-full px-6 py-4 text-left text-white font-semibold hover:bg-[#4a8fb8] transition-colors border-b border-[#4a8fb8]"
          >
            LOGOUT
          </button>
        </nav>
      </aside>
    </>
  )
}
