import { FC } from 'react'
import { Form, FormRenderProps } from 'react-final-form'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { userStore } from 'stores/user-store'
import { observer } from 'mobx-react-lite'

import { useLogin } from 'api/login'
import { BaseForm } from 'components/Form'
import { Card } from 'components/Card'

import { LOGIN_FIELDS } from 'config'

type Properties = Pick<FormRenderProps, 'handleSubmit'>

const LoginForm: FC<Properties> = ({ handleSubmit }) => (
  <BaseForm
    handleSubmit={handleSubmit}
    submitLabel='Login'
    fields={LOGIN_FIELDS}
  />
)

export const DumbLogin: React.FC<{ store: typeof userStore }> = ({ store }) => {
  const { submitLogin } = useLogin(store)

  return (
    <Card title='Вход в аккаунт'>
      <Form
        onSubmit={submitLogin}
        render={LoginForm}
      />
      <Link to='/registration'>
        <Button color='inherit'>Registration</Button>
      </Link>
    </Card>
  )
}

export const Login = observer<{ store: typeof userStore }>(DumbLogin)
