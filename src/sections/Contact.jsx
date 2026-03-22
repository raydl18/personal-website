import { Box, Typography, Paper, Button, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, px: 3, maxWidth: 1100, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>
        Contact
      </Typography>
      <Typography variant="h3" sx={{ mb: 5, mt: 0.5 }}>
        Let's connect
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 6 },
          border: '1px solid #E3F2FD',
          borderRadius: 4,
          background: 'linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 100%)',
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon />}
            href="mailto:liu.raymon@northeastern.edu"
            fullWidth
            sx={{ py: 1.5, fontSize: '1rem' }}
          >
            liu.raymon@northeastern.edu
          </Button>
          <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
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

      <Typography variant="body2" color="text.secondary" sx={{ mt: 8 }}>
        Built with React + MUI · {new Date().getFullYear()} Raymond Liu
      </Typography>
    </Box>
  );
}
