import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { TimerBox, Footer } from './components';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <TimerBox />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
