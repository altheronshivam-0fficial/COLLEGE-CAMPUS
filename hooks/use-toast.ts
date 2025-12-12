/* hooks/use-toast.ts */
import * as React from "react"
import { ToastActionElement, type ToastProps } from "@/components/ui/toast"

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const TOAST_LIMIT = 1
let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toastListeners = new Set<(toast: ToasterToast) => void>()

export function toast(props: ToastProps) {
  const newToast: ToasterToast = { id: genId(), ...props }
  toastListeners.forEach((listener) => listener(newToast))
  return newToast
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([])

  React.useEffect(() => {
    function handleAdd(toast: ToasterToast) {
      setToasts((prev) => [...prev, toast].slice(-TOAST_LIMIT))
    }

    toastListeners.add(handleAdd)
    return () => {
      toastListeners.delete(handleAdd)
    }
  }, [])

  return { toasts }
}
