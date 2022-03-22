import React from 'react'
import styled from 'styled-components'
import Button from '../components/common/Button'
import CategoryButton from '../components/common/CategoryButton'
const CategoryWrapper = styled.div`
  padding: 46px;
  background-color: ${({ theme }) => theme.colors.starkWhite};
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
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
      </CategoryWrapper>
    </div>
  )
}
