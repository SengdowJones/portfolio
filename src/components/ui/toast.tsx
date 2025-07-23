'use client'

import { createContext, useContext, useCallback, useState, useEffect } from 'react'
import { clsx } from 'clsx'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: string
  type: ToastType
  title: string
  description?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { ...toast, id }
    
    setToasts(prev => [...prev, newToast])

    // Auto remove after duration
    const duration = toast.duration ?? 5000
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

function ToastContainer() {
  const { toasts } = useToast()

  if (toasts.length === 0) return null

  return (
    <div 
      className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full"
      role="region" 
      aria-label="Notifications"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  )
}

function ToastItem({ toast }: { toast: Toast }) {
  const { removeToast } = useToast()
  const [isVisible, setIsVisible] = useState(false)
  const [isRemoving, setIsRemoving] = useState(false)

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => setIsVisible(true))
  }, [])

  const handleRemove = () => {
    setIsRemoving(true)
    setTimeout(() => removeToast(toast.id), 300)
  }

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case 'info':
        return <Info className="w-5 h-5 text-blue-400" />
    }
  }

  const getColorClasses = () => {
    switch (toast.type) {
      case 'success':
        return 'border-green-500/20 bg-green-950/80 text-green-100'
      case 'error':
        return 'border-red-500/20 bg-red-950/80 text-red-100'
      case 'warning':
        return 'border-yellow-500/20 bg-yellow-950/80 text-yellow-100'
      case 'info':
        return 'border-blue-500/20 bg-blue-950/80 text-blue-100'
    }
  }

  return (
    <div
      className={clsx(
        'relative rounded-lg border backdrop-blur-sm shadow-lg transition-all duration-300 ease-out',
        'transform translate-x-full opacity-0',
        isVisible && !isRemoving && 'translate-x-0 opacity-100',
        isRemoving && 'translate-x-full opacity-0 scale-95',
        getColorClasses()
      )}
      role="alert"
      aria-atomic="true"
    >
      <div className="flex items-start gap-3 p-4">
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm">
            {toast.title}
          </div>
          {toast.description && (
            <div className="text-sm opacity-90 mt-1">
              {toast.description}
            </div>
          )}
          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className="text-sm font-medium underline mt-2 hover:no-underline transition-all duration-200"
            >
              {toast.action.label}
            </button>
          )}
        </div>

        <button
          onClick={handleRemove}
          className="flex-shrink-0 p-1 rounded-md hover:bg-black/20 transition-colors duration-200
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export { Toast }