import { Box, Typography, Paper, Chip, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';

const skillGroups = [
  {
    category: 'Languages',
    icon: <CodeIcon sx={{ fontSize: 18, color: 'primary.main' }} />,
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++', 'HTML/CSS', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: <WebIcon sx={{ fontSize: 18, color: 'primary.main' }} />,
    skills: ['React', 'Next.js', 'Vite', 'Material UI', 'Leaflet', 'Zustand'],
  },
  {
    category: 'Backend & DB',
    icon: <StorageIcon sx={{ fontSize: 18, color: 'primary.main' }} />,
    skills: ['Spring Boot', 'PostgreSQL', 'Supabase', 'Firebase'],
  },
  {
    category: 'ML & Data',
    icon: <PsychologyIcon sx={{ fontSize: 18, color: 'primary.main' }} />,
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Linear Regression', 'Neural Networks', 'PCA', 'K-means'],
  },
  {
    category: 'Tools',
    icon: <BuildIcon sx={{ fontSize: 18, color: 'primary.main' }} />,
    skills: ['Git', 'VS Code', 'Gradle', 'Linux/Ubuntu'],
  },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: { xs: 10, md: 16 }, px: 3, bgcolor: 'background.default' }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Typography variant="overline" color="primary">
          Skills
        </Typography>
        <Typography variant="h3" sx={{ mb: 8, mt: 0.5 }}>
          What I work with
        </Typography>

        <Paper
          elevation={0}
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          {skillGroups.map((group, i) => (
            <Box
              key={group.category}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 3,
                px: 4,
                py: 2.75,
                borderBottom: i < skillGroups.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
                flexWrap: { xs: 'wrap', sm: 'nowrap' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 130, pt: 0.25 }}>
                {group.icon}
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    color: 'primary.main',
                    letterSpacing: '0.03em',
                  }}
                >
                  {group.category}
                </Typography>
              </Box>
              <Stack direction="row" flexWrap="wrap" gap={0.75}>
                {group.skills.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    size="small"
                    sx={{ bgcolor: '#eff4ff', color: '#0b1c30', border: '1px solid #dce9ff' }}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
