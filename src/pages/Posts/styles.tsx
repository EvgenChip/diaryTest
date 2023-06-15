import styled from 'styled-components'
import { TextField } from '@mui/material'

export const SAddPostInputTitle = styled(TextField)`
  &&& {
    margin-bottom: 10px;
  }
`

export const PostCard = styled.div`
  border-bottom: 1px solid #1976d2;
  padding: 20px;
`

export const PostCardWrap = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
