"use client"

import * as React from "react"

export type ToastType = {
  id: string
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

let listeners = new Set<(toast: ToastType) => void>()

export function toast(toastData: Omit<ToastType, "id">) {
  const id = Math.random().toString(36).slice(2)
  const t: ToastType = { id, ...toastData }
  listeners.forEach((l) => l(t))
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastType[]>([])

  React.useEffect(() => {
    const listener = (t: ToastType) => {
      setToasts((prev) => [...prev, t])
    }
    listeners.add(listener)
    return () => listeners.delete(listener)
  }, [])

  return { toast, toasts }
}
