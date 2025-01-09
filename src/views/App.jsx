// import { useState } from 'react'
import reactLogo from '../views/react.svg'
import viteLogo from '/vite.svg'
import '../styles/global.scss'
import './App.scss'
import MyComponent from './Example/MyComponent'

/**
 * 2 components: class component / function component (function, arrow)
 */


function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MyComponent/>
    </>
  )
}

export default App
