import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from './components/common/NavBar'
// pages
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Notfound from './pages/NotFound.tsx'

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
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
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
