import React from 'react'
import styled from 'styled-components'
import { device } from '../styles/devices'
import CategoryButton from '../components/common/CategoryButton'
import Car from '../assets/Icons/Car.svg'
import House from '../assets/Icons/House.svg'
import Phone from '../assets/Icons/Phone.svg'
import All from '../assets/Icons/All.svg'
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
        <CategoryButton text="Vehicles" iconName={Car} onClick={handleClick} />
        <CategoryButton text="House" iconName={House} onClick={handleClick} />
        <CategoryButton
          text="Accessories"
          iconName={Phone}
          onClick={handleClick}
        />
        <CategoryButton iconName={All} text="Food" onClick={handleClick} />
      </CategoryWrapper>
    </div>
  )
}
