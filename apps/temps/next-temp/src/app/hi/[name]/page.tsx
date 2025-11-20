interface Props {
  name: string
}

async function page({ params }: { params: Promise<Props> }) {
  const { name } = await params

  return (
    <div>
      name:
      {name}
    </div>
  )
}

export default page
