import { useRoutes } from 'react-router-dom'
import { routes } from './routes/index'

export function Router() {
  const element = useRoutes(routes)
  return element
}
