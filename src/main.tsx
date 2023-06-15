import { Container, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { SnackbarProvider } from 'notistack'

import { Routes, Route } from 'react-router-dom'
import { Login } from 'pages/Login'
import { Registration } from 'pages/Registration'
import { Posts } from 'pages/Posts'
import { AuthButtons } from 'components/AuthButtons'

import { GuardedRoute } from 'components/GuardedRoute'
import { useLogin } from 'api/login'

import { postsStore } from 'stores/posts-store'
import { userStore } from 'stores/user-store'

export const App = () => {
  const { logout } = useLogin(userStore)

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            Diary
          </Typography>
          <AuthButtons
            store={userStore}
            logout={logout}
          />
        </Toolbar>
      </AppBar>
      <Container>
        <SnackbarProvider>
          <Routes>
            <Route
              path='login'
              element={<Login store={userStore} />}
            />
            <Route
              path='registration'
              element={<Registration />}
            />
            <Route
              index
              path='/'
              element={
                <GuardedRoute store={userStore}>
                  <Posts store={postsStore} />
                </GuardedRoute>
              }
            />
          </Routes>
        </SnackbarProvider>
      </Container>
    </>
  )
}
