import { useState } from 'react';
import { Box, Typography, Tab, Tabs, Paper, Chip, Stack, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'Plant — NUACM Hackathon Education Track Winner',
    tech: ['Next.js', 'React', 'TypeScript', 'Python', 'Firebase', 'Gemini'],
    description:
      'Built a Next.js app with a team of 3 that helps students plan academic schedules with AI-powered course recommendations, requirement tracking, and drag-and-drop semester planning. Web-scraped 1000+ courses and 100+ majors; integrated Firebase Auth and Google Gemini for personalized suggestions.',
    github: 'https://github.com/raydl18',
  },
  {
    title: 'Machine Learning Essentials Bootcamp – AI Club, Northeastern',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    description:
      'Implemented linear regression, PCA, and K-means clustering from scratch on real-world datasets (Spotify, UCI Wine). Built a multi-layer perceptron neural network from scratch with backpropagation, dropout, and mini-batch gradient descent; achieved 86.5% test accuracy.',
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
    <Box id="projects" sx={{ py: { xs: 10, md: 16 }, px: 3, bgcolor: 'background.paper' }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Typography variant="overline" color="primary">
          Projects
        </Typography>
        <Typography variant="h3" sx={{ mb: 8, mt: 0.5 }}>
          Past projects
        </Typography>

        <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
          <Tabs
            orientation="vertical"
            value={selected}
            onChange={(_, v) => setSelected(v)}
            sx={{
              borderRight: { md: '1px solid #c4c6cf' },
              minWidth: { md: 270 },
              '& .MuiTab-root': {
                alignItems: 'flex-start',
                textAlign: 'left',
                fontWeight: 500,
                fontSize: '0.8rem',
                color: 'text.secondary',
                px: 2,
                py: 1.75,
                minHeight: 'unset',
                lineHeight: 1.4,
              },
              '& .Mui-selected': { color: 'primary.main', fontWeight: 600 },
              '& .MuiTabs-indicator': { right: 0, left: 'auto', width: '2px', bgcolor: 'primary.main' },
            }}
          >
            {projects.map((p, i) => (
              <Tab key={i} label={p.title} />
            ))}
          </Tabs>

          <Paper
            elevation={0}
            sx={{
              flex: 1,
              p: 4,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              minHeight: 200,
              transition: 'box-shadow 0.18s',
              '&:hover': { boxShadow: '2px 3px 0 #c4c6cf' },
            }}
          >
            <Typography variant="h6" sx={{ fontSize: '1rem', mb: 2.5 }}>{proj.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {proj.description}
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2.5 }}>
              {proj.tech.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="small"
                  sx={{ bgcolor: '#eff4ff', color: '#002045', border: '1px solid #dce9ff' }}
                />
              ))}
            </Stack>
            <Button
              size="small"
              startIcon={<GitHubIcon sx={{ fontSize: '16px !important' }} />}
              href={proj.github}
              target="_blank"
              sx={{
                color: 'primary.main',
                p: 0,
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: '0.8rem',
                '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
              }}
            >
              View on GitHub
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
