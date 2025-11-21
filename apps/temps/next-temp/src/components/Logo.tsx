import Image from 'next/image'

function Logo() {
  return (
    <div className="text-2xl font-300 inline-flex cursor-default">
      <Image
        className="logo"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
      />
    </div>
  )
}

export default Logo
