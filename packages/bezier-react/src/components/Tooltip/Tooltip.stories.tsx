/* External dependencies */
import React, { useState, useCallback } from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import Tooltip from './Tooltip'
import TooltipProps, { TooltipPosition } from './Tooltip.types'

export default {
  title: getTitle(base),
  component: Tooltip,
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    placement: {
      control: {
        type: 'radio',
        options: [
          TooltipPosition.TopCenter,
          TooltipPosition.TopLeft,
          TooltipPosition.TopRight,
          TooltipPosition.RightCenter,
          TooltipPosition.RightTop,
          TooltipPosition.RightBottom,
          TooltipPosition.BottomCenter,
          TooltipPosition.BottomLeft,
          TooltipPosition.BottomRight,
          TooltipPosition.LeftCenter,
          TooltipPosition.LeftTop,
          TooltipPosition.LeftBottom,
        ],
      },
    },
    offset: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1,
      },
    },
    delayShow: {
      control: {
        type: 'range',
        min: 0,
        max: 5000,
        step: 100,
      },
    },
    delayHide: {
      control: {
        type: 'range',
        min: 0,
        max: 5000,
        step: 100,
      },
    },
  },
} as Meta

const Target = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: ${props => props.foundation?.theme?.['bg-black-dark']};
  border-radius: 4px;
`

const Template: Story<TooltipProps> = (props) => {
  const [showTarget, setShowTarget] = useState(true)

  const handleClick = useCallback(() => {
    setShowTarget(false)
  }, [])

  return (
    <Tooltip {...props}>
      { showTarget && (
        <Target onClick={handleClick}>
          Target
        </Target>
      ) }
    </Tooltip>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  // eslint-disable-next-line max-len
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  lazy: true,
  placement: TooltipPosition.BottomCenter,
  offset: 4,
  disabled: false,
  keepInContainer: false,
  allowHover: false,
  delayShow: 0,
  delayHide: 0,
}
