import React from 'react'
import styled from 'styled-components'
import { device } from '../styles/devices'
import CategoryButton from '../components/common/CategoryButton'

const CategoryWrapper = styled.div`
  padding: 12px;
  @media ${device.lg} {
    padding: 46px;
  }
  background-color: ${({ theme }) => theme.colors.starkWhite};
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

export default function Home() {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div>
      <CategoryWrapper>
        <CategoryButton text="Vehicles" onClick={handleClick} />
        <CategoryButton text="Food" onClick={handleClick} />
        <CategoryButton text="Food" onClick={handleClick} />
        <CategoryButton text="Food" onClick={handleClick} />
      </CategoryWrapper>
    </div>
  )
}
