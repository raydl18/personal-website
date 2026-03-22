import { Box, Typography, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const highlights = [
  {
    icon: <SchoolIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Northeastern University',
    body: 'B.S. Computer Science · GPA 3.94\nClass of 2029 · Boston, MA',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'What I Build',
    body: 'Full-stack web apps, ML models, and mobile apps. I like making meaningful projects about topics that interest me.',
  },
  {
    icon: <SportsSoccerIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Outside of Code',
    body: 'I am part of the Northeastern Club badminton team, I weightlift, and I\'m also a certified soccer referee with 150+ hours officiated.',
  },
];

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, px: 3, maxWidth: 1100, mx: 'auto' }}>
      <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>
        About Me
      </Typography>
      <Typography variant="h3" sx={{ mb: 2, mt: 0.5 }}>
        A bit about me
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mb: 6, fontSize: '1.05rem', lineHeight: 1.9 }}>
        I'm a freshman CS student at Northeastern looking for work opportunities in software engineering,
        AI, or data science. I enjoy working on projects that challenge me and picking up new
        skills along the way.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Top row: Northeastern + What I Build */}
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
          {highlights.slice(0, 2).map((h) => (
            <Paper
              key={h.title}
              elevation={0}
              sx={{
                p: 3,
                flex: 1,
                border: '1px solid #E3F2FD',
                bgcolor: 'background.paper',
                borderRadius: 3,
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: '0 4px 20px rgba(21,101,192,0.1)' },
              }}
            >
              <Box sx={{ mb: 1.5 }}>{h.icon}</Box>
              <Typography variant="h6" sx={{ mb: 1 }}>{h.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
                {h.body}
              </Typography>
            </Paper>
          ))}
        </Box>
        {/* Bottom row: Outside of Code */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            border: '1px solid #E3F2FD',
            bgcolor: 'background.paper',
            borderRadius: 3,
            transition: 'box-shadow 0.2s',
            '&:hover': { boxShadow: '0 4px 20px rgba(21,101,192,0.1)' },
          }}
        >
          <Box sx={{ mb: 1.5 }}>{highlights[2].icon}</Box>
          <Typography variant="h6" sx={{ mb: 1 }}>{highlights[2].title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            {highlights[2].body}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
