import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  InputBase,
  Typography,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

/* --- Configuration --- */
const brandColor = "#5b1c31";

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/Portfolio' },
  { label: 'Projects', path: '/projects' },
  { label: 'Expertise', path: '/Expertise' },
  { label: 'Contact Us', path: '/contact-us' },
];

/* --- Styled Components --- */
const Search = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': { backgroundColor: alpha(theme.palette.common.black, 0.08) },
  border: `1px solid ${alpha(theme.palette.common.black, 0.1)}`,
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.up('lg')]: { marginLeft: theme.spacing(2), width: 'auto' },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: brandColor,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('lg')]: { width: '12ch', '&:focus': { width: '20ch' } },
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '0.85rem',
  },
}));

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const location = useLocation();

  /* --- Responsive Logic --- */
  const isDesktop = useMediaQuery('(min-width:1100px)'); // Slightly wider to prevent menu crowding
  const isMarginTopActive = useMediaQuery('(min-width:768px)');
  const marginTopValue = isMarginTopActive ? '57px' : '0px';

  React.useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <AppBar
      position="fixed" // Keeps nav available on scroll
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        top: 0,
        transition: 'all 0.3s ease',
        marginTop: marginTopValue,
        width: '100%',
        borderBottom: `1px solid ${alpha(brandColor, 0.1)}`,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: { xs: 0.5, md: 1.5 } }}>
          
          {/* Logo Section */}
          <Box 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              display: 'flex', 
              alignItems: 'center',
              flexShrink: 0 
            }}
          >
            <Box
              component="img"
              src="https://i.ibb.co/cK5RvPG7/Gemini-Generated-Image-70xztx70xztx70xz-removebg-preview.png"
              alt="MTC Logo"
              sx={{ 
                maxHeight: { xs: 45, sm: 60, md: 80, lg: 90 }, 
                width: 'auto',
                transition: '0.3s'
              }}
            />
          </Box>

          {/* DESKTOP NAVIGATION */}
          {isDesktop ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { lg: 0.5, xl: 2 } }}>
              {pages.map(({ label, path }) => (
                <Button
                  key={label}
                  component={Link}
                  to={path}
                  sx={{
                    color: location.pathname === path ? brandColor : '#333',
                    fontWeight: location.pathname === path ? 700 : 500,
                    textTransform: 'uppercase',
                    px: { lg: 1.2, xl: 2 },
                    fontSize: { lg: '0.75rem', xl: '0.85rem' },
                    letterSpacing: '0.5px',
                    whiteSpace: 'nowrap',
                    fontFamily: '"Montserrat", sans-serif',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 5,
                        left: '15%',
                        width: location.pathname === path ? '70%' : '0%',
                        height: '2px',
                        backgroundColor: brandColor,
                        transition: '0.3s',
                    },
                    '&:hover': { color: brandColor, bgcolor: 'transparent', '&:after': { width: '70%' } },
                  }}
                >
                  {label}
                </Button>
              ))}

              <Search onSubmit={handleSearchSubmit}>
                <SearchIconWrapper>
                  <SearchIcon fontSize="small" />
                </SearchIconWrapper>
                <StyledInputBase 
                  placeholder="Search…" 
                  value={searchQuery} 
                  onChange={handleSearchChange} 
                />
              </Search>
            </Box>
          ) : (
            /* MOBILE/TABLET MENU ICON */
            <IconButton 
              onClick={handleDrawerToggle} 
              sx={{ color: brandColor, p: 1 }}
              aria-label="open drawer"
            >
              <MenuIcon sx={{ fontSize: { xs: 30, sm: 35 } }} />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* --- Mobile Drawer --- */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ 
          sx: { width: '85%', maxWidth: 320, bgcolor: '#fff' } 
        }}
      >
        <Box sx={{ p: 4, textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
           <img
            src="https://i.ibb.co/cK5RvPG7/Gemini-Generated-Image-70xztx70xztx70xz-removebg-preview.png"
            alt="Logo"
            style={{ maxHeight: 70, width: 'auto' }}
          />
        </Box>

        <List sx={{ pt: 2, px: 1 }}>
          {pages.map(({ label, path }) => (
            <ListItemButton 
              key={label} 
              component={Link} 
              to={path} 
              sx={{
                borderRadius: '8px',
                mb: 0.5,
                color: location.pathname === path ? brandColor : '#555',
                bgcolor: location.pathname === path ? alpha(brandColor, 0.05) : 'transparent',
              }}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ mt: 'auto', p: 3, bgcolor: '#fafafa' }}>
          <Typography variant="overline" sx={{ color: '#999', fontWeight: 700, mb: 2, display: 'block',fontFamily: 'Montserrat' }}>
            Contact Info
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <PhoneIcon sx={{ fontSize: 18, color: brandColor }} />
            <Typography sx={{ fontSize: '0.8rem', fontFamily: 'Montserrat', fontWeight: 500 }}>
              (+94) 672260200
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <EmailIcon sx={{ fontSize: 18, color: brandColor }} />
            <Typography sx={{ fontSize: '0.8rem', fontFamily: 'Montserrat', fontWeight: 500 }}>
              info@brainiacs.edu.lk
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1.5 }}>
            {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map((Icon, i) => (
              <IconButton 
                key={i} 
                size="small" 
                sx={{ 
                  color: brandColor, 
                  border: `1px solid ${alpha(brandColor, 0.2)}`,
                  '&:hover': { bgcolor: brandColor, color: 'white' } 
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}