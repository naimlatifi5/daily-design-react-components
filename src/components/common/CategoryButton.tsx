import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { device } from '../../styles/devices'
type buttonProps = {
  onClick: MouseEventHandler
  text: string
}
const ColumnWrapper = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  padding: 0 0.5rem 1rem;
  @media ${device.lg} {
    flex-basis: 25%;
    max-width: 25%;
  }
`
const CategoryButtonStyle = styled.button`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  opacity: 0.7;
  border: none;
  min-height: 230px;
`
const CategoryButton = ({ onClick, text }: buttonProps) => {
  return (
    <ColumnWrapper>
      <CategoryButtonStyle type="button" onClick={onClick}>
        {text}
      </CategoryButtonStyle>
    </ColumnWrapper>
  )
}

export default CategoryButton
