import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgIos(props: SVGProps<SVGSVGElement>) {
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
        d="M5 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8c.077 0 .153-.004.228-.013.063.009.124.014.186.014.281 0 .63-.127 1.015-.266.48-.174 1.018-.37 1.559-.37.485 0 .905.158 1.32.313.404.15.803.3 1.25.3 1.978 0 3.442-4.122 3.442-4.122s-2.094-.81-2.094-3.163c0-2.085 1.68-2.944 1.68-2.944s-.86-1.556-3.044-1.556c-.772 0-1.436.268-1.955.477-.334.135-.609.245-.814.245-.257 0-.567-.119-.926-.257-.499-.192-1.093-.421-1.777-.421-1.811 0-3.743 1.621-3.743 4.713 0 1.33.41 2.799 1.019 4.05H5V5h8v4h2V4a2 2 0 0 0-2-2H5Zm12.957 6.94c1.015-1.22.804-2.484.804-2.484s-1.42.006-2.442 1.352c-.908 1.197-.676 2.222-.676 2.222s1.231.213 2.314-1.09Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgIos)
