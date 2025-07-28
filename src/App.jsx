import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import { ThemeContext } from './components/Context/ThemeContext'


function App() {
  

  return (
    <div>
    <ThemeContext>
     <Dashboard/>
    </ThemeContext>
    </div>
  )
}

export default App
