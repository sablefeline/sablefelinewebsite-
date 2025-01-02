import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Analytics } from "@vercel/analytics/react"
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0063ff',
    },
    secondary: {
      main: '#34495e',
    },
    background: {
      default: '#484995'
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
      <Analytics/>
    </ThemeProvider>
  );
}

export default MyApp;
