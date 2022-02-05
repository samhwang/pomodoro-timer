import { Grid, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { TimerBox, Footer } from './components';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container maxWidth="xs">
        <CssBaseline />
        <TimerBox />
        <Footer />
      </Grid>
    </ThemeProvider>
  );
}
