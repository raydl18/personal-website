import { Box, Typography, Button, Stack, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(160deg, #E3F2FD 0%, #FFFFFF 50%, #E8F4FD 100%)',
        px: 3,
        pt: 8,
        position: 'relative',
      }}
    >

      <Typography
        variant="h1"
        sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, mb: 1, color: 'text.primary', lineHeight: 1.1 }}
      >
        Raymond Liu
      </Typography>

      <Typography
        variant="h4"
        sx={{ color: 'primary.main', fontWeight: 700, mb: 2, fontSize: { xs: '1.2rem', md: '1.6rem' } }}
      >
        CS Student @ Northeastern University
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', maxWidth: 560, mb: 4, fontSize: '1.05rem', lineHeight: 1.8 }}
      >
        Hi! I'm Raymond, a freshman CS student at NEU. I love building meaningful
        projects, learning new languages and techniques, and being efficient.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<GitHubIcon />}
          href="https://github.com/raydl18"
          target="_blank"
          sx={{ px: 3 }}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<LinkedInIcon />}
          href="https://linkedin.com/in/raymond-liu18"
          target="_blank"
          sx={{ px: 3 }}
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<EmailIcon />}
          href="mailto:liu.raymon@northeastern.edu"
          sx={{ px: 3 }}
        >
          Email Me
        </Button>
      </Stack>

      <Box
        sx={{ position: 'absolute', bottom: 32, cursor: 'pointer', color: 'primary.main', animation: 'bounce 2s infinite' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 36 }} />
      </Box>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </Box>
  );
}
