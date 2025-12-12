"use client"
import { useState } from "react"
import { ToastProps } from "@/components/ui/toast"

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  function toast(t: ToastProps) {
    const id = Math.random().toString(36).substring(2)
    setToasts((prev) => [...prev, { ...t, id }])
  }

  return { toast, toasts }
}
