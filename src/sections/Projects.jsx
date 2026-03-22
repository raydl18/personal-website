import { useState } from 'react';
import { Box, Typography, Tab, Tabs, Paper, Chip, Stack, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'Plant — NUACM Hackathon Winner',
    tech: ['Next.js', 'React', 'TypeScript', 'Python', 'Firebase', 'Gemini'],
    description:
      'Education Track winner. Next.js course planning app for Northeastern students with AI chatbot recommendations. Web-scraped 1000+ courses and 100+ majors.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'ML Essentials Bootcamp — AINU',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    description:
      'Implemented linear regression, PCA, and K-means clustering from scratch on real datasets. Built a multi-layer perceptron neural network achieving 86.5% test accuracy.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'NU AI Club Hackathon — Evacuation Simulation',
    tech: ['React', 'TypeScript', 'Leaflet', 'Spring Boot', 'WebSockets', 'Gemini API'],
    description:
      'Real-time evacuation simulation using React, Spring Boot, and WebSockets. Streams agent movement with Gemini API-powered traffic analysis and OpenStreetMap road data.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'Elevator Simulation',
    tech: ['Java', 'JavaFX', 'MVC', 'FSM'],
    description:
      'JavaFX GUI elevator simulation using MVC and Finite State Machines. Tested elevator efficiency across large datasets of passengers.',
    github: 'https://github.com/raydl18',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const proj = projects[selected];

  return (
    <Box id="projects" sx={{ py: { xs: 6, md: 8 }, px: 3, maxWidth: 1100, mx: 'auto' }}>
      <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>
        Projects
      </Typography>
      <Typography variant="h3" sx={{ mb: 4, mt: 0.5 }}>
        Past projects
      </Typography>

      <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
        <Tabs
          orientation="vertical"
          value={selected}
          onChange={(_, v) => setSelected(v)}
          sx={{
            borderRight: { md: '2px solid #E3F2FD' },
            minWidth: { md: 260 },
            '& .MuiTab-root': {
              alignItems: 'flex-start',
              textAlign: 'left',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.85rem',
              color: 'text.secondary',
              px: 2,
              py: 1.5,
              minHeight: 'unset',
            },
            '& .Mui-selected': { color: 'primary.main' },
            '& .MuiTabs-indicator': { left: { md: 'auto' }, right: { md: 0 } },
          }}
        >
          {projects.map((p, i) => (
            <Tab key={i} label={p.title} />
          ))}
        </Tabs>

        <Paper
          elevation={0}
          sx={{ flex: 1, p: 3, border: '1px solid #E3F2FD', borderRadius: 3, minHeight: 180 }}
        >
          <Typography variant="h6" sx={{ fontSize: '1.05rem', mb: 2 }}>{proj.title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8 }}>
            {proj.description}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2 }}>
            {proj.tech.map((t) => (
              <Chip key={t} label={t} size="small" sx={{ bgcolor: '#E3F2FD', color: 'primary.dark', fontWeight: 500 }} />
            ))}
          </Stack>
          <Button
            size="small"
            startIcon={<GitHubIcon fontSize="small" />}
            href={proj.github}
            target="_blank"
            sx={{ color: 'primary.main', p: 0 }}
          >
            View on GitHub
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
