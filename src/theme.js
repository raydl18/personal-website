import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#002045',
      light: '#2d476f',
      dark: '#001b3c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3d57b6',
      light: '#829bfe',
      dark: '#082d8d',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8f9ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#0b1c30',
      secondary: '#43474e',
    },
    divider: '#c4c6cf',
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.2 },
    h3: { fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.2 },
    h4: { fontWeight: 600, lineHeight: 1.3 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600, letterSpacing: '-0.005em' },
    body1: {
      fontFamily: '"Newsreader", Georgia, serif',
      fontSize: '1.0625rem',
      lineHeight: 1.65,
    },
    body2: {
      fontFamily: '"Newsreader", Georgia, serif',
      fontSize: '0.9375rem',
      lineHeight: 1.65,
    },
    overline: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.1em',
      fontSize: '0.7rem',
    },
    caption: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: '"Inter", sans-serif',
          borderRadius: 4,
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        containedPrimary: {
          backgroundColor: '#002045',
          '&:hover': { backgroundColor: '#1a365d' },
        },
        outlinedPrimary: {
          borderColor: '#002045',
          color: '#002045',
          '&:hover': { borderColor: '#002045', backgroundColor: '#eff4ff' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
          fontSize: '0.7rem',
          borderRadius: 2,
          height: 24,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
