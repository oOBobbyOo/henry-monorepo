'use client'

import { useTheme } from '@/provider/ThemeProvider'
import { FaMoon, FaSun } from 'react-icons/fa'

export function ThemeToggle() {
  const { toggleMode } = useTheme()

  const handleToggleMode = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault()
    e.stopPropagation()

    toggleMode()
  }

  return (
    <div
      onClick={handleToggleMode}
      className={`flex items-center justify-between px-2 py-1 rounded-lg hover:bg-gray-500/10 
        cursor-pointer transition-all text-2xl font-black`}
    >
      <div className="flex-1 flex items-center justify-between gap-1">
        <FaSun className="hidden light:block" />
        <FaMoon className="hidden dark:block" />
        <div
          className="hidden auto:block uppercase select-none opacity-70 text-xs"
        >
          Auto
        </div>
      </div>
    </div>
  )
}
