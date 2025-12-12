"use client"

import { useToast } from "@/hooks/use-toast"
import { Toast, ToastViewport } from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <>
      <ToastViewport />
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
        {toasts.map((t) => (
          <Toast key={t.id} {...t} />
        ))}
      </div>
    </>
  )
}
