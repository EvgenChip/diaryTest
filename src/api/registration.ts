import { instance } from 'api'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'

const registrationProfile = async ({ email, password }: Omit<UserData, 'id'>) => {
  const { data } = await instance.get<UserData[]>('/profile', {
    params: {
      email,
    },
  })

  if (data.length > 0) {
    throw new Error('user exist!')
  }

  await instance.post('/profile', {
    email,
    password,
  })
}

export const useRegistration = () => {
  const navigate = useNavigate()

  const submitRegistration = useCallback(
    async (data: Omit<UserData, 'id'>) => {
      try {
        await registrationProfile(data)
        navigate('/login')
      } catch {
        enqueueSnackbar('Пользователь с таким именем существует', { variant: 'error' })
      }
    },
    [navigate],
  )

  return {
    submitRegistration,
  }
}
