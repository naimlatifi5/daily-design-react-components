import React from 'react'
import { ReactSVG } from 'react-svg'

import { css } from 'glamor'
type Props = {
  iconName: string
}
const styles = css({
  ' svg': {
    height: 100,
    width: 100,
  },
})

export default function Icons({ iconName }: Props) {
  return <ReactSVG {...styles} src={iconName} />
}
