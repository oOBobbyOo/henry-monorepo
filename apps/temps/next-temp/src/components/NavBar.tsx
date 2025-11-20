'use client'

import { cn } from '@/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBookReader, FaHome, FaRegListAlt, FaSortNumericDown } from 'react-icons/fa'

function NavBar() {
  const pathname = usePathname()

  const navLinks = [
    {
      label: 'Home',
      icon: <FaHome />,
      href: '/',
    },
    {
      label: 'Posts',
      icon: <FaRegListAlt />,
      href: '/posts',
    },
    {
      label: 'Count',
      icon: <FaSortNumericDown />,
      href: '/count',
    },
    {
      label: 'About',
      icon: <FaBookReader />,
      href: '/about',
    },
  ]

  const navClasses = `flex items-center justify-between px-2 py-1 rounded-lg hover:bg-gray-500/10`

  return (
    <div className="pb-10 flex justify-center gap-4">
      {navLinks.map((item, i) => {
        return (
          <Link
            href={item.href}
            key={i}
            className={cn(navClasses, `${pathname === item.href ? 'font-bold! bg-gray-500/10 dark:bg-gray-500/30' : ''}`)}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4 justify-between">
                {item.icon}
              </div>
              <div className="text-sm">{item.label}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default NavBar
