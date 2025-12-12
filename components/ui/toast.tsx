"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

const toastVariants = cva(
  "pointer-events-auto relative flex w-full items-center space-x-4 rounded-md border p-4 shadow-md",
  {
    variants: {
      variant: {
        default: "bg-white text-black border-gray-200",
        destructive: "bg-red-600 text-white border-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ToastProps extends VariantProps<typeof toastVariants> {
  id?: string
  title?: string
  description?: string
}

export function Toast({ id, title, description, variant }: ToastProps) {
  return (
    <div className={toastVariants({ variant })}>
      <div className="flex flex-col">
        {title && <p className="font-semibold">{title}</p>}
        {description && <p className="text-sm">{description}</p>}
      </div>
    </div>
  )
}

export function ToastViewport() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50" />
  )
}
