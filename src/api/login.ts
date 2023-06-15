import { instance } from 'api'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { userStore } from 'stores/user-store'
import { enqueueSnackbar } from 'notistack'

import { USER_STORAGE_KEY } from 'config'

// тут нет проверки пароля, просто проверяем есть ли юзер с таким юзернеймом и все.
// так как хардкод апи
const loginProfile = async ({ email }: Pick<UserData, 'email'>) => {
  const { data }: { data: UserData[] } = await instance.get('/profile', {
    params: {
      email,
    },
  })

  if (data.length === 0) {
    // ошибка если юзера нет
    throw new Error('login failed')
  }

  return data[0]
}

export const useLogin = (store: typeof userStore) => {
  const navigate = useNavigate()

  const submitLogin = useCallback(
    async (data: Pick<UserData, 'email'>) => {
      try {
        await loginProfile(data)
        localStorage.setItem(USER_STORAGE_KEY, data.email)
        store.addUser(data.email)
        navigate('/')
      } catch {
        enqueueSnackbar('Нет такого пользователя', { variant: 'error' })
      }
    },
    [navigate, store],
  )

  const logout = useCallback(() => {
    localStorage.setItem(USER_STORAGE_KEY, '')
    store.removeUser()
  }, [store])

  return {
    logout,
    submitLogin,
  }
}
