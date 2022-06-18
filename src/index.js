import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

// global styles
import GlobalStyles from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { COLORS } from './styles/colors.ts'

// css style 

import "./styles/css/Card.css";

// components
import NavBar from './components/common/NavBar'
// pages
import Home from './pages/Home.tsx'
import AddCategory from './pages/AddCategory.tsx'
import Notfound from './pages/NotFound.tsx'
import Components from './pages/Components.tsx'
import SkeletonLoading from './pages/SkeletonLoading.tsx'

const Main = styled.main`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

const theme = {
  colors: COLORS,
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-category" element={<AddCategory />} />
              <Route path="/components" element={<Components />} />
              <Route path="/skeletonLoading" element={<SkeletonLoading />} />
              <Route element={Notfound} />
            </Routes>
          </Main>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
