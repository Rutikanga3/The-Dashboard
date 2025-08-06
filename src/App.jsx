import { ThemeProvider } from './components/Context/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <Router>
      <ThemeProvider>

        <AppRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;