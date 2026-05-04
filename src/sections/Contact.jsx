import { Box, Typography, Paper, Button, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 16 }, px: 3, bgcolor: 'background.paper' }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto', textAlign: 'center' }}>
        <Typography variant="overline" color="primary">
          Contact
        </Typography>
        <Typography variant="h3" sx={{ mb: 2, mt: 0.5 }}>
          Let's connect
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 8, maxWidth: 480, mx: 'auto' }}>
          Open to software engineering internships, research, and interesting projects.
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 5 },
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            maxWidth: 520,
            mx: 'auto',
            transition: 'box-shadow 0.18s',
            '&:hover': { boxShadow: '2px 3px 0 #c4c6cf' },
          }}
        >
          <Stack spacing={1.5}>
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:liu.raymon@northeastern.edu"
              fullWidth
              sx={{ py: 1.5, fontSize: '0.9rem' }}
            >
              liu.raymon@northeastern.edu
            </Button>
            <Stack direction="row" spacing={1.5}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                href="https://github.com/raydl18"
                target="_blank"
                fullWidth
                sx={{ py: 1.5 }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<LinkedInIcon />}
                href="https://linkedin.com/in/raymond-liu18"
                target="_blank"
                fullWidth
                sx={{ py: 1.5 }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Stack>
        </Paper>

        <Typography
          sx={{
            mt: 10,
            fontFamily: '"Inter", sans-serif',
            fontSize: '0.75rem',
            color: 'text.secondary',
            letterSpacing: '0.03em',
          }}
        >
          Built with React + MUI · {new Date().getFullYear()} Raymond Liu
        </Typography>
      </Box>
    </Box>
  );
}
