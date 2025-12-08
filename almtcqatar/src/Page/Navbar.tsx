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

/* --- Pages --- */
const pages = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/Portfolio' },
  { label: 'Project', path: '/project' },
  { label: 'Expertise', path: '/Expertise' },
  { label: 'Contact Us', path: '/contact-us' },
 
];

/* --- Styled Search --- */
const Search = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  border: `1px solid ${alpha(theme.palette.common.white, 0.3)}`,
  flexShrink: 0,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#999',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: { width: '18ch' },
    [theme.breakpoints.up('md')]: { width: '25ch' },
    borderRadius: '50px',
  },
}));

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const location = useLocation();

  const isDesktop = useMediaQuery('(min-width:1024px)');
  const isMarginTop57px = useMediaQuery(
    '(min-width:768px) and (max-width:1024px), (min-width:820px) and (max-width:1180px), (min-width:853px) and (max-width:1280px), (min-width:912px) and (max-width:1368px)'
  );
  const isRemoveSearch = useMediaQuery('(width:1024px) and (height:1366px), (width:1024px) and (height:600px)');

  React.useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const marginTopValue = isDesktop || isMarginTop57px ? '57px' : '0px';
  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#D0D3D4',
        color: 'black',
        transition: 'margin-top 0.3s ease',
        marginTop: marginTopValue,
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, flexWrap: 'wrap' }}>
          {/* Logo */}
          <Box component={Link} to="/" sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="https://i.ibb.co/yn0gbKdZ/Gemini-Generated-Image-pua0mbpua0mbpua0-removebg-preview.png"
              alt="Logo"
              sx={{ maxHeight: { xs: 60, sm: 80, md: 100 }, width: 'auto' }}
            />
          </Box>

          {isDesktop ? (
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              {pages.map(({ label, path }) => (
                <Button
                  key={label}
                  component={Link}
                  to={path}
                  sx={{
                    color: 'black',
                    fontWeight: 500,
                    textTransform: 'none',
                    minWidth: 'auto',
                    fontFamily: '"Montserrat", sans-serif',
                  }}
                >
                  {label}
                </Button>
              ))}

              {/* Search */}
              {!isRemoveSearch && (
                <Search onSubmit={handleSearchSubmit} sx={{ ml: 2, flexShrink: 1, minWidth: 120, maxWidth: 250 }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Search…" value={searchQuery} onChange={handleSearchChange} />
                </Search>
              )}
            </Box>
          ) : (
            <IconButton onClick={handleDrawerToggle} color="inherit">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: '80%', maxWidth: 280, py: 1 } }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <Box sx={{ px: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
              <Box component={Link} to="/" onClick={handleDrawerToggle}>
                <img
                  src="https://i.ibb.co/yn0gbKdZ/Gemini-Generated-Image-pua0mbpua0mbpua0-removebg-preview.png"
                  alt="Logo"
                  style={{ maxHeight: 80, width: 'auto' }}
                />
              </Box>
            </Box>

            <List>
              {pages.map(({ label, path }) => (
                <ListItemButton key={label} component={Link} to={path} onClick={handleDrawerToggle}>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 500,
                      fontSize: '15px',
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>

          {/* Bottom Info */}
          <Box
            sx={{
              borderTop: '1px solid #ddd',
              py: 1,
              textAlign: 'center',
              bgcolor: '#f8f8f8',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <PhoneIcon sx={{ fontSize: 11 }} />
              <Typography component="span" sx={{ fontFamily: '"Montserrat", sans-serif', fontSize: '11px' }}>
                (+94) 672260200
              </Typography>
              <Typography component="span" sx={{ fontFamily: '"Montserrat", sans-serif', fontSize: '11px' }}>
                |
              </Typography>
              <EmailIcon sx={{ fontSize: 11 }} />
              <Typography component="span" sx={{ fontFamily: '"Montserrat", sans-serif', fontSize: '11px' }}>
                info@brainiacs.edu.lk
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 0.5 }}>
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{ bgcolor: '#fff', '&:hover': { bgcolor: '#000', color: '#fff' } }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
