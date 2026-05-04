import { Box, Typography, Chip, Stack } from '@mui/material';

const experiences = [
  {
    role: 'Software Developer',
    company: 'OASIS @ Northeastern',
    date: 'Feb 2026 – Present',
    tech: ['React', 'Zustand', 'Supabase', 'PostgreSQL'],
    bullets: [
      'Built a fully deployed Goodreads-style book tracking app with Open Library API integration, search, trending books, and recently viewed recommendations.',
      'Implemented Supabase authentication and user profiles with reading stats, shelves (read/reading), and a page progress tracker.',
    ],
  },
  {
    role: 'Founder & Developer',
    company: 'RefClock (Mobile App)',
    date: 'Mar 2026 – Present',
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA'],
    bullets: [
      'Built a progressive web app with HTML/CSS/JavaScript, published for production on Android/Google Play Store.',
      'Soccer referee timer/scorekeeper that logs live game data (goals, cards, player numbers).',
      'Self-promoted the app to adoption by Northeastern Intramural Soccer officials.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Dragon Boat Seating App',
    date: 'Jan 2026 – Present',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    bullets: [
      'Built a Spring Boot MVC app for managing paddler rosters with an interactive drag-and-drop boat layout visualization.',
      "Integrated with a local SF dragon boat team's website; supports CSV import/export for paddler data.",
    ],
  },
  {
    role: 'Soccer Referee',
    company: 'Fremont Youth Soccer Club → Northeastern Intramural Official',
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
    <Box id="experience" sx={{ py: { xs: 10, md: 16 }, px: 3, bgcolor: 'background.default' }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Typography variant="overline" color="primary">
          Currently
        </Typography>
        <Typography variant="h3" sx={{ mb: 8, mt: 0.5 }}>
          What I'm working on
        </Typography>

        {/* Timeline */}
        <Box sx={{ position: 'relative' }}>
          {/* Hairline */}
          <Box sx={{
            position: 'absolute',
            left: '6px',
            top: '8px',
            bottom: '8px',
            width: '1px',
            bgcolor: 'divider',
          }} />

          {experiences.map((exp, i) => (
            <Box
              key={exp.company}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '28px',
                mb: i < experiences.length - 1 ? 7 : 0,
              }}
            >
              {/* Dot */}
              <Box sx={{
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                bgcolor: 'primary.main',
                flexShrink: 0,
                mt: '3px',
                zIndex: 1,
              }} />

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 0.5,
                }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                    {exp.role}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                    }}
                  >
                    {exp.date}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: 'secondary.main',
                    mb: 1.5,
                  }}
                >
                  {exp.company}
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, mb: exp.tech.length ? 2 : 0, mt: 0 }}>
                  {exp.bullets.map((b, j) => (
                    <Typography
                      component="li"
                      variant="body2"
                      color="text.secondary"
                      key={j}
                      sx={{ mb: 0.5 }}
                    >
                      {b}
                    </Typography>
                  ))}
                </Box>

                {exp.tech.length > 0 && (
                  <Stack direction="row" flexWrap="wrap" gap={0.75}>
                    {exp.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{ bgcolor: '#eff4ff', color: '#002045', border: '1px solid #dce9ff' }}
                      />
                    ))}
                  </Stack>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
