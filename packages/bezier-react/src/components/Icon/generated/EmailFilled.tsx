import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgEmailFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.436 6.184C2 7.04 2 8.16 2 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 20 6.16 20 8.4 20h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 16.96 22 15.84 22 13.6v-3.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 4 17.84 4 15.6 4H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748Zm3.011 3.422a1 1 0 0 0-.894 1.788l6.105 3.053a3 3 0 0 0 2.684 0l6.105-3.053a1 1 0 1 0-.894-1.788l-6.106 3.052a1 1 0 0 1-.894 0L5.447 9.606Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgEmailFilled)
