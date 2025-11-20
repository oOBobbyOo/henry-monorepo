import Link from 'next/link'
import { FaHandsClapping } from 'react-icons/fa6'

interface Props {
  name: string
}

async function page({ params }: { params: Promise<Props> }) {
  const { name } = await params

  return (
    <div>
      <div className="text-yellow-300 text-4xl inline-block animate-shake-x duration-5000">
        <FaHandsClapping />
      </div>
      <h3 className="py-2 text-2xl font-500">Hi,</h3>
      <div className="text-xl">
        {name}
        {' '}
        :）
      </div>
      <div>
        <Link className="btn text-sm m-3" href="/">
          Back
        </Link>
      </div>
    </div>
  )
}

export default page
