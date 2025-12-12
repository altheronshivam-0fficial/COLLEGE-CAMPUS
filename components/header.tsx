"use client"

import { Menu, Search, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onMenuClick?: () => void
  onSearchClick?: () => void
  onHomeClick?: () => void
}

export function Header({ onMenuClick, onSearchClick, onHomeClick }: HeaderProps) {
  return (
    <header className="bg-[#5ba4d0] p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="text-white hover:bg-[#4a8fb8]">
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-white text-2xl font-bold">CC</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onSearchClick} className="text-white hover:bg-[#4a8fb8]">
          <Search className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onHomeClick}
          className="text-white hover:bg-[#4a8fb8] bg-[#4a8fb8]"
        >
          <Home className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}
