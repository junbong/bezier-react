/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { RoundAbsoluteNumber } from 'Foundation'
import { render } from 'Utils/testUtils'
import {
  TagBadgeSize,
  getProperTagBadgePadding,
} from 'Components/TagBadge/TagBadgeCommon'
import { TAGBADGE_VERTICAL_PADDING } from 'Components/TagBadge/TagBadgeCommon/constants/TagBadgeStyle'
import Tag, { TAG_TEST_ID } from './Tag'
import TagProps from './Tag.types'

describe('Tag test >', () => {
  let props: TagProps

  beforeEach(() => {
    props = {}
  })

  const renderTag = (optionProps?: TagProps) => render(<Tag {...props} {...optionProps} />)

  it('Snapshot >', () => {
    const { getByTestId } = renderTag()
    const tag = getByTestId(TAG_TEST_ID)

    expect(tag).toMatchSnapshot()
  })

  describe('Size Test >', () => {
    it('xs', () => {
      const size = TagBadgeSize.XS
      const { getByTestId } = renderTag({ size })
      const xsTag = getByTestId(TAG_TEST_ID)

      expect(xsTag).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(xsTag).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R4}px`)
    })

    it('s', () => {
      const size = TagBadgeSize.S
      const { getByTestId } = renderTag({ size })
      const sTag = getByTestId(TAG_TEST_ID)

      expect(sTag).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(sTag).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R6}px`)
    })
    it('m', () => {
      const size = TagBadgeSize.M
      const { getByTestId } = renderTag({ size })
      const mTag = getByTestId(TAG_TEST_ID)

      expect(mTag).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(mTag).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R6}px`)
    })
    it('l', () => {
      const size = TagBadgeSize.L
      const { getByTestId } = renderTag({ size })
      const lTag = getByTestId(TAG_TEST_ID)

      expect(lTag).toHaveStyle(`padding: ${TAGBADGE_VERTICAL_PADDING}px ${getProperTagBadgePadding(size)}px`)
      expect(lTag).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R6}px`)
    })
  })
})
