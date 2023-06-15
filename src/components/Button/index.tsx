import { FC } from 'react'

import { SButton } from './styles'

type Properties = {
  onClick: () => void
  label: string
  className?: string
}

export const Button: FC<Properties> = ({ onClick, label, className }) => (
  <SButton
    className={className}
    onClick={onClick}
  >
    {label}
  </SButton>
)
