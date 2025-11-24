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

  return (
    <div className="text-2xl m-5 flex justify-center gap-4">
      {links.map((item, i) => {
        return (
          <Link
            href={item.to}
            key={i}
            target={item.to.startsWith('http') ? '_blank' : undefined}
          >
            {item.icon}
          </Link>
        )
      })}

      <ThemeToggle />
    </div>
  )
}

export default Footer
