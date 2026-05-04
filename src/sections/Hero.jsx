import { Box, Typography, Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import profilePhoto from '../assets/profile.jpg';

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        px: 3,
        pt: 8,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 5, md: 9 },
          maxWidth: 1000,
          width: '100%',
        }}
      >
        <Box
          component="img"
          src={profilePhoto}
          alt="Raymond Liu"
          sx={{
            width: { xs: 168, md: 232 },
            height: { xs: 168, md: 232 },
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            border: '1px solid #c4c6cf',
            flexShrink: 0,
          }}
        />

        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.75rem', md: '4rem' }, mb: 1.5, color: 'text.primary' }}
          >
            Raymond Liu
          </Typography>

          <Typography
            sx={{
              color: 'secondary.main',
              fontWeight: 600,
              mb: 2.5,
              fontSize: { xs: '1.05rem', md: '1.2rem' },
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '-0.01em',
            }}
          >
            CS Student @ Northeastern University
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 500, mb: 4.5 }}
          >
            Hi! I'm Raymond, a freshman CS student at Northeastern University. I love building meaningful
            projects, learning new languages and techniques, and being efficient.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
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
        </Box>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          cursor: 'pointer',
          color: 'primary.main',
          animation: 'bounce 2s infinite',
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <KeyboardArrowDownIcon sx={{ fontSize: 32 }} />
      </Box>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(7px); }
        }
      `}</style>
    </Box>
  );
}
