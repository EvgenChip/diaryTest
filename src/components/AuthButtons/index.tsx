import { observer } from 'mobx-react-lite'
import { userStore } from 'stores/user-store'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const AuthButtons = observer<{ store: typeof userStore; logout: () => void }>(({ store, logout }) => {
  return (
    <>
      {store.user ? (
        <div>
          {store.user}{' '}
          <Button
            color='inherit'
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <Link to='/login'>
          <Button color='inherit'>Login</Button>
        </Link>
      )}
    </>
  )
})
