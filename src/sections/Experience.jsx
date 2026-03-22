import { Box, Typography, Paper, Chip, Stack, Grid } from '@mui/material';

const experiences = [
  {
    role: 'Software Developer',
    company: 'OASIS @ Northeastern',
    date: 'Feb 2026 – Present',
    tech: ['React', 'Vite', 'MUI', 'Zustand', 'Supabase', 'PostgreSQL'],
    bullets: [
      'Building a Goodreads-style book tracking app with Open Library API integration, search, trending books, and recently viewed recommendations.',
      'Implemented Supabase authentication and user profiles with reading stats, shelves, and a page progress tracker.',
    ],
  },
  {
    role: 'App Developer',
    company: 'RefClock (Self-employed)',
    date: 'Mar 2026 – Present',
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    bullets: [
      'Built and shipped a progressive web app to the Android / Google Play Store.',
      'Self-promoted to adoption by fellow Northeastern Intramural Soccer officials.',
    ],
  },
  {
    role: 'Developer',
    company: 'Dragon Boat Seating App',
    date: 'Jan 2026 – Present',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    bullets: [
      'Building a Spring Boot MVC app for managing paddler rosters with an interactive drag-and-drop boat layout.',
      "Integrating with a local San Francisco dragon boat team's website, with CSV import/export for paddler data.",
    ],
  },
  {
    role: 'Soccer Referee',
    company: 'Fremont Youth → NU Intramural',
    date: 'Oct 2021 – Present',
    tech: [],
    bullets: [
      '5 years certified by the California North State Referee Committee.',
      '150+ hours officiating youth and adult soccer games as Assistant and Center Referee.',
    ],
  },
];

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: { xs: 6, md: 8 }, px: 3, bgcolor: 'background.paper' }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>
          Currently
        </Typography>
        <Typography variant="h3" sx={{ mb: 4, mt: 0.5 }}>
          What I'm working on
        </Typography>

        <Grid container spacing={2}>
          {experiences.map((exp) => (
            <Grid item xs={12} sm={6} key={exp.company}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid #E3F2FD',
                  borderLeft: '4px solid',
                  borderLeftColor: 'primary.main',
                  borderRadius: 3,
                  transition: 'box-shadow 0.2s',
                  '&:hover': { boxShadow: '0 4px 20px rgba(21,101,192,0.1)' },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 0.5, mb: 0.5 }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem' }}>{exp.role}</Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight={500}>{exp.date}</Typography>
                </Box>
                <Typography variant="body2" color="primary.main" fontWeight={600} sx={{ mb: 1.5 }}>
                  {exp.company}
                </Typography>
                <Box component="ul" sx={{ pl: 2.5, mb: exp.tech.length ? 1.5 : 0, mt: 0 }}>
                  {exp.bullets.map((b, i) => (
                    <Typography component="li" variant="body2" color="text.secondary" key={i} sx={{ lineHeight: 1.7 }}>
                      {b}
                    </Typography>
                  ))}
                </Box>
                {exp.tech.length > 0 && (
                  <Stack direction="row" flexWrap="wrap" gap={0.75}>
                    {exp.tech.map((t) => (
                      <Chip key={t} label={t} size="small" color="primary" variant="outlined" />
                    ))}
                  </Stack>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
