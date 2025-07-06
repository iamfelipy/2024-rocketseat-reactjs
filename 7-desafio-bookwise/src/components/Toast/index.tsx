import { useState, useCallback } from 'react'
import { X } from 'phosphor-react'
import {
  ToastProvider as StyledToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastViewport,
} from './styles'

interface ToastProps {
  title: string
  description?: string
  duration?: number
}

// Hook for using toast
export const useToast = () => {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([])

  const showToast = useCallback((toast: ToastProps) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }

    setToasts((prev) => [...prev, newToast])

    // Auto remove after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, toast.duration || 5000)
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const ToastContainer = () => (
    <StyledToastProvider>
      {toasts.map((toast) => (
        <ToastRoot key={toast.id}>
          <ToastTitle>{toast.title}</ToastTitle>
          {toast.description && (
            <ToastDescription>{toast.description}</ToastDescription>
          )}
          <ToastAction asChild altText="Close">
            <ToastClose onClick={() => removeToast(toast.id)}>
              <X size={20} />
            </ToastClose>
          </ToastAction>
        </ToastRoot>
      ))}
      <ToastViewport />
    </StyledToastProvider>
  )

  return { showToast, ToastContainer }
}
