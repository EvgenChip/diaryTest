import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

import { DumbLogin } from '.'

test('renders login page', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <DumbLogin store={{} as any} />
      </BrowserRouter>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
