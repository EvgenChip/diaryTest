import { FC } from 'react'
import { IconButton } from '@mui/material'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

import { SPost, SPostWrapper, SPostTitle, SPostContent, SDateWrap } from './styles'

type Properties = FormDataObject & {
  removePost: (id: number) => void
  changePost: (payload: Omit<FormDataObject, 'created' | 'updated'>) => void
}

export const Post: FC<Properties> = ({ id, description, title, created, updated, removePost, changePost }) => {
  return (
    <SPost>
      <SPostWrapper>
        <SPostTitle>{title}</SPostTitle>
        <SPostContent>{description}</SPostContent>
        <div>
          <IconButton onClick={() => changePost({ id, title, description })}>
            <ModeEditOutlineOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => removePost(id)}>
            <DeleteForeverOutlinedIcon />
          </IconButton>
        </div>
        <SDateWrap>
          <div>Дата создания: {created}</div>
          {updated && <div>Дата обновления: {updated}</div>}
        </SDateWrap>
      </SPostWrapper>
    </SPost>
  )
}
