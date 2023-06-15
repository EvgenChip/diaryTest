import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { userStore } from 'stores/user-store'

export const GuardedRoute = observer<{ store: typeof userStore; children: React.ReactNode }>(({ store, children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!store.user) {
      navigate('/login')
    }
  }, [store.user, navigate])

  return <>{children}</>
})
