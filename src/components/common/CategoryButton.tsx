import React from 'react'
import NotificationToolTip from './NotificationToolTip'
import styled from 'styled-components'
import { device } from '../../styles/devices'
import Icon from './Icon'

interface buttonProps {
  onClick: () => void
  text: string
  iconName: string
}
const ColumnWrapper = styled.div`
  flex-basis: 50%;
  max-width: 50%;
  padding: 0 0.5rem 1rem;
  position: relative;
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
  cursor: pointer;
`
const CategoryButton: React.FC<buttonProps> = ({
  onClick,
  text,
  iconName = 'Close',
}) => {
  return (
    <ColumnWrapper>
      <CategoryButtonStyle type="button" onClick={onClick}>
        <Icon iconName={iconName} />
        {text}
      </CategoryButtonStyle>
      <NotificationToolTip color="white" value={3} />
    </ColumnWrapper>
  )
}

export default CategoryButton
