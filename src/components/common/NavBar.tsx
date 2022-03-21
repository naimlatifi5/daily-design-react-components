import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Home1</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}
