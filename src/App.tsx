import './App.css'
import FleetScheduler from './components/FleetScheduler';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';



function App() {

  return (
    <ThemeProvider theme={theme}>
      <FleetScheduler />
    </ThemeProvider>
  )
}

export default App
