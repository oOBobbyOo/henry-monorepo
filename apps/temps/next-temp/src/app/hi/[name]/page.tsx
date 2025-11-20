interface Props {
  name: string
}

async function page({ params }: { params: Promise<Props> }) {
  const { name } = await params

  return (
    <div>
      page
      {name}
    </div>
  )
}

export default page
