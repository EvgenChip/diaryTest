import { FC, ChangeEvent } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

type Properties = {
  onChange: (event: ChangeEvent<any>) => void
  search: string
}

export const Search: FC<Properties> = ({ onChange, search }) => (
  <Paper
    component='form'
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
  >
    <IconButton
      sx={{ p: '10px' }}
      aria-label='menu'
    ></IconButton>
    <SearchIcon />
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder='Поиск...'
      inputProps={{ 'aria-label': 'Поиск' }}
      value={search}
      onChange={onChange}
    />
    <IconButton
      type='button'
      sx={{ p: '10px' }}
      aria-label='search'
    ></IconButton>
  </Paper>
)
