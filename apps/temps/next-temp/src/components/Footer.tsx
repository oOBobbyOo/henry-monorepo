import Link from 'next/link'
import { FaGithub, FaHome } from 'react-icons/fa'
import { MdLibraryBooks } from 'react-icons/md'

import { ThemeToggle } from './ThemeToggle'

function Footer() {
  const links = [
    {
      label: 'Home',
      icon: <FaHome />,
      to: '/',
    },
    {
      label: 'Next',
      icon: <MdLibraryBooks />,
      to: 'https://nextjs.org/docs',
    },
    {
      label: 'GitHub',
      icon: <FaGithub />,
      to: 'https://github.com/oOBobbyOo/henry-monorepo/tree/main/apps/temps/next-temp',
    },
  ]

  const linkClasses = `flex items-center justify-between group px-2 py-1 rounded-lg
   hover:bg-gray-500/10 font-black`

  return (
    <div className="text-2xl m-5 flex justify-center gap-3">
      {links.map((item, i) => {
        return (
          <Link
            href={item.to}
            key={i}
            className={linkClasses}
            target={item.to.startsWith('http') ? '_blank' : undefined}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4 justify-between">
                {item.icon}
              </div>
              <div className="hidden uppercase select-none opacity-70 text-xs">{item.label}</div>
            </div>
          </Link>
        )
      })}

      <ThemeToggle />
    </div>
  )
}

export default Footer
