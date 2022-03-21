import React, { MouseEventHandler } from 'react'

type myProps = {
  onClick: MouseEventHandler
  text: string
}

const Button = ({ onClick, text }: myProps) => (
  <button onClick={onClick}>{text}</button>
)
export default Button
