'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

function InputEntry() {
  const [name, setName] = useState('')

  const router = useRouter()

  const go = () => {
    if (name) {
      router.push(`/hi/${encodeURIComponent(name)}`)
    }
  }

  return (
    <>
      <input
        className="w-[250px] mt-5 px-4 py-2 rounded text-center border border-gray-200 dark:border-gray-700 bg-transparent outline-none"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="What's your name?"
      />
      <div>
        <button className="btn text-sm m-3" disabled={!name} onClick={go}>
          GO
        </button>
      </div>
    </>
  )
}

export default InputEntry
