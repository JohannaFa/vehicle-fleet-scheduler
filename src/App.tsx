import './App.css'
import FleetScheduler from './components/FleetScheduler';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Paper, ThemeProvider, Typography } from '@mui/material';
import theme from './theme';



function App() {

  return (
    <ThemeProvider theme={theme}>
    <Paper elevation={2}>
      <Typography variant='h1' align="center">Vehicle Fleet Scheduler</Typography>

    <FleetScheduler />
    </Paper>
    </ThemeProvider>
  )
}

export default App
