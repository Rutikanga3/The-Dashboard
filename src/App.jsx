import { ThemeProvider } from './components/Context/ThemeContext'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <ThemeProvider>
    <Dashboard />
    </ThemeProvider>
  )
}

export default App
