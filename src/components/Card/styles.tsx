import styled from 'styled-components'
import { Typography } from '@mui/material'

export const SPaper = styled.div<{ width: number }>`
  max-width: ${({ width }) => width}px;
  margin: 20px auto;
  border: 1px solid #1976d2;
  border-radius: 5px;
`

export const SFormTitle = styled(Typography)`
  padding: 20px 10px;
  text-align: center;
`
