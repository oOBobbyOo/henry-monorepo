function HiLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      {children}
      <div className="text-sm mx-auto mt-5 text-center opacity-25">
        [Hi Layout]
      </div>
    </div>
  )
}

export default HiLayout
