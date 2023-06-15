import { FC } from 'react'

import { SPaper, SFormTitle } from './styles'

type Properties = { title: string; children: React.ReactNode; width?: number }

export const Card: FC<Properties> = ({ title, children, width = 400 }) => (
  <SPaper width={width}>
    <SFormTitle>{title}</SFormTitle>
    {children}
  </SPaper>
)
