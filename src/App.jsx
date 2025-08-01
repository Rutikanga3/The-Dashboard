import { ThemeProvider } from './components/Context/ThemeContext'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
   <Router>
     <ThemeProvider>
    <Dashboard />
    </ThemeProvider>
   </Router>
  )
}

export default App
