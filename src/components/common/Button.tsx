import React from 'react'

interface buttonProps {
  onClick: () => void // nothing to return use void
  text?: string
}

const Button = ({ onClick, text }: buttonProps) => (
  <button onClick={onClick}>{text}</button>
)
export default Button
