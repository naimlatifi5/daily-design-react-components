import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'
type buttonProps = {
  onClick: MouseEventHandler
  text: string
}
const CategoryButtonStyle = styled.button`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  max-height: 240px;
  min-width: 240px;
  min-height: 240px;
`
const CategoryButton = ({ onClick, text }: buttonProps) => {
  return (
    <CategoryButtonStyle type="button" onClick={onClick}>
      {text}
    </CategoryButtonStyle>
  )
}

export default CategoryButton
