import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { App } from './main'

test('renders', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  )
  const linkElement = screen.getByText(/diary/i)
  expect(linkElement).toBeInTheDocument()
})
