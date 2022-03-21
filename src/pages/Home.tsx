import React from 'react'
import Button from '../components/common/Button'
export default function Home() {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <div>
      <h2>Welcome to the homepage!</h2>
      <Button text="Click me" onClick={handleClick}></Button>
      <p>You can do this, I believe in you.</p>
    </div>
  )
}
