import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// global styles
import GlobalStyles from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { COLORS } from './styles/colors.ts'

// components
import NavBar from './components/common/NavBar'
// pages
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Notfound from './pages/NotFound.tsx'
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
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route element={Notfound} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
