import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1565C0',
      light: '#1E88E5',
      dark: '#0D47A1',
    },
    secondary: {
      main: '#E3F2FD',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F9FF',
    },
    text: {
      primary: '#0D1B2A',
      secondary: '#455A64',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: 8 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
  },
});

export default theme;
