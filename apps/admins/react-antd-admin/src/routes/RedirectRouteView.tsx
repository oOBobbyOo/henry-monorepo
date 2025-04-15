import type { To } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router-dom'

function RedirectRouteView({ to }: { to: To }) {
  return (
    <>
      <Navigate to={to} replace />
      <Outlet />
    </>
  )
}

export default RedirectRouteView
