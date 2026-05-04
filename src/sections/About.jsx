import { Box, Typography, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const highlights = [
  {
    icon: <SchoolIcon sx={{ fontSize: 26, color: 'primary.main' }} />,
    title: 'Northeastern University',
    body: 'B.S. Computer Science · GPA 3.97\nClass of 2028 · Boston, MA',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 26, color: 'primary.main' }} />,
    title: 'What I Build',
    body: 'Full-stack web apps, ML models, and mobile apps. I like making meaningful projects about topics that interest me.',
  },
  {
    icon: <SportsSoccerIcon sx={{ fontSize: 26, color: 'primary.main' }} />,
    title: 'Outside of Code',
    body: "I am part of the Northeastern Club badminton team, I weightlift, and I'm also a certified soccer referee with 150+ hours officiated.",
  },
];

const cardSx = {
  p: 4,
  border: '1px solid',
  borderColor: 'divider',
  bgcolor: 'background.paper',
  borderRadius: 2,
  transition: 'box-shadow 0.18s',
  '&:hover': { boxShadow: '2px 3px 0 #c4c6cf' },
};

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 10, md: 16 }, px: 3, maxWidth: 1100, mx: 'auto' }}>
      <Typography variant="overline" color="primary">
        About Me
      </Typography>
      <Typography variant="h3" sx={{ mb: 2, mt: 0.5 }}>
        A bit about me
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mb: 7 }}>
        I'm a freshman CS student at Northeastern looking for work opportunities in software engineering,
        AI, or data science. I enjoy working on projects that challenge me and picking up new
        skills along the way.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box sx={{ display: 'flex', gap: 2.5, flexDirection: { xs: 'column', sm: 'row' } }}>
          {highlights.slice(0, 2).map((h) => (
            <Paper key={h.title} elevation={0} sx={{ ...cardSx, flex: 1 }}>
              <Box sx={{ mb: 2 }}>{h.icon}</Box>
              <Typography variant="h6" sx={{ mb: 1 }}>{h.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                {h.body}
              </Typography>
            </Paper>
          ))}
        </Box>
        <Paper elevation={0} sx={cardSx}>
          <Box sx={{ mb: 2 }}>{highlights[2].icon}</Box>
          <Typography variant="h6" sx={{ mb: 1 }}>{highlights[2].title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {highlights[2].body}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
