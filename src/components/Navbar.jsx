import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'all 0.3s',
          borderBottom: scrolled ? '1px solid #E3F2FD' : 'none',
        }}
      >
        <Toolbar sx={{ maxWidth: 1100, mx: 'auto', width: '100%', px: { xs: 2, md: 4 } }}>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 800, cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            RL
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {navLinks.map((link) => (
              <Button key={link} onClick={() => scrollTo(link)} sx={{ color: 'text.primary', fontWeight: 500 }}>
                {link}
              </Button>
            ))}
          </Box>
          <IconButton sx={{ display: { md: 'none' }, color: 'primary.main' }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 200, pt: 4 }}>
          {navLinks.map((link) => (
            <ListItem key={link} disablePadding>
              <ListItemButton onClick={() => scrollTo(link)}>
                <ListItemText primary={link} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
