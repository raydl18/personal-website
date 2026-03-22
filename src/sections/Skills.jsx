import { Box, Typography, Paper, Chip, Stack } from '@mui/material';

const skillGroups = [
  { category: 'Languages', skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++', 'HTML/CSS', 'SQL'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'Vite', 'Material UI', 'Leaflet', 'Zustand'] },
  { category: 'Backend & DB', skills: ['Spring Boot', 'PostgreSQL', 'Supabase', 'Firebase'] },
  { category: 'ML & Data', skills: ['NumPy', 'Pandas', 'Matplotlib', 'Linear Regression', 'Neural Networks', 'PCA', 'K-means'] },
  { category: 'Tools', skills: ['Git', 'VS Code', 'Gradle', 'Linux/Ubuntu'] },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: { xs: 6, md: 8 }, px: 3, bgcolor: 'background.paper' }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Typography variant="overline" color="primary" fontWeight={700} letterSpacing={2}>
          Skills
        </Typography>
        <Typography variant="h3" sx={{ mb: 4, mt: 0.5 }}>
          What I work with
        </Typography>

        <Paper elevation={0} sx={{ p: 3, border: '1px solid #E3F2FD', borderRadius: 3 }}>
          <Stack spacing={2}>
            {skillGroups.map((group) => (
              <Box key={group.category} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                <Typography variant="body2" fontWeight={700} color="primary.main" sx={{ minWidth: 110 }}>
                  {group.category}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={0.75}>
                  {group.skills.map((s) => (
                    <Chip key={s} label={s} size="small" sx={{ bgcolor: '#E3F2FD', color: 'primary.dark', fontWeight: 500 }} />
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
