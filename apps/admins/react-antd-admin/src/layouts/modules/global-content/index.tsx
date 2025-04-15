import { Outlet } from 'react-router-dom'

function GlobalContent() {
  return (
    <div>
      GlobalContent
      <Outlet />
    </div>
  )
}

export default GlobalContent
