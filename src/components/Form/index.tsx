import { FC } from 'react'
import { TextField } from 'mui-rff'
import { Button } from '@mui/material'
import { FormRenderProps } from 'react-final-form'

import { SForm, SFormItem } from './styles'

type FormProperties = Pick<FormRenderProps, 'handleSubmit'> & {
  submitLabel: string
  fields: LoginFields[]
}

export const BaseForm: FC<FormProperties> = ({ handleSubmit, submitLabel, fields }) => (
  <SForm onSubmit={handleSubmit}>
    {fields.map(({ label, name, type }) => (
      <SFormItem key={name}>
        <TextField
          label={label}
          name={name}
          type={type}
          required
          fullWidth
        />
      </SFormItem>
    ))}
    <SFormItem>
      <Button
        variant='contained'
        type='submit'
      >
        {submitLabel}
      </Button>
    </SFormItem>
  </SForm>
)
