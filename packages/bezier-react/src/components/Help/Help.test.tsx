/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import Help, { HELP_TEST_ID } from './Help'
import HelpProps from './Help.types'

describe('Help >', () => {
  let props: HelpProps

  beforeEach(() => {
    props = {
      children: 'Lorem ipsum',
    }
  })

  const renderComponent = (otherProps?: Partial<HelpProps>) =>
    render(<Help {...props} {...otherProps} />)

  it('Snapshot >', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(HELP_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })

  it('renders text when children prop is not empty', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(HELP_TEST_ID)

    expect(rendered).toBeInTheDocument()
  })

  it('renders nothing when children prop is empty', () => {
    const { queryByTestId } = renderComponent({ children: '' })
    const rendered = queryByTestId(HELP_TEST_ID)

    expect(rendered).toBeNull()
  })
})
