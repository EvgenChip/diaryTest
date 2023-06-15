import { FC } from 'react'
import { Form, FormRenderProps } from 'react-final-form'

import { useRegistration } from 'api/registration'
import { BaseForm } from 'components/Form'
import { Card } from 'components/Card'

import { LOGIN_FIELDS } from 'config'

type Properties = Pick<FormRenderProps, 'handleSubmit'>

const RegistrationForm: FC<Properties> = ({ handleSubmit }) => (
  <BaseForm
    handleSubmit={handleSubmit}
    submitLabel='Registrate'
    fields={LOGIN_FIELDS}
  />
)

export const Registration = () => {
  const { submitRegistration } = useRegistration()

  return (
    <Card title='Регистрация аккаунта'>
      <Form
        onSubmit={submitRegistration}
        render={RegistrationForm}
      />
    </Card>
  )
}
