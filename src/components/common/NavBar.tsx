import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  list-style: none;

  li {
    padding: 12px;
    a {
      text-decoration: none;
    }
  }
`

export default function NavBar() {
  return (
    <Navigation className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/add-category">Add category</Link>
      </li>
      <li>
        <Link to="/components">React components</Link>
      </li>
      <li>
        <Link to="/skeletonLoading">Skeleton Loading</Link>
      </li>
    </Navigation>
  )
}
