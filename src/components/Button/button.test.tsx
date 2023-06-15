import { render } from '@testing-library/react'
import { Button } from '.'

test('renders button', () => {
  render(
    <Button
      label='test'
      onClick={() => {}}
    />,
  )
})
