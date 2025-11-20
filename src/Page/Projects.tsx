import React from 'react';
import { Box, Typography, Divider, ImageList, ImageListItem } from '@mui/material';

// --- Project Data ---
const projectsData = [
  { title: 'Art work - Clay design', img: 'https://maisonrandf.com/wp-content/uploads/2024/09/maisonrandf_clay-design_3.jpg.avif' },
  { title: 'Dior - Maintenance work', img: 'https://maisonrandf.com/wp-content/uploads/2024/09/maisonrandf_dior_maintenance_4.jpg.avif' },
  { title: 'Najd Artwork', img: 'https://maisonrandf.com/wp-content/uploads/2023/06/Najd-Artwork.jpg.avif' },
  { title: 'Hotel restaurant refurbishment', img: 'https://maisonrandf.com/wp-content/uploads/2023/04/photo-principale-du-projet-min-1536x2048.jpg.webp' },
  { title: 'Private Palace', img: 'https://maisonrandf.com/wp-content/uploads/2023/05/Qatar_decorative_paint-50.jpg.avif' },
  { title: 'Hotel lounge refurbishment', img: 'https://maisonrandf.com/wp-content/uploads/2023/04/Durat-Lounge-1536x2048.jpg.webp' },
  // Add more projects here...
];

const Projects: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        // Background color matching the design
        backgroundColor: '#e8e3d6',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: 'center',
      }}
    >
      {/* Text Content Section */}
      <Box sx={{ maxWidth: 800, margin: '0 auto', mb: { xs: 5, md: 8 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            letterSpacing: 5,
            fontWeight: 500,
            mb: 2,
            fontSize: { xs: '1.2rem', sm: '1.8rem' },
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          PROJECTS
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, fontSize: { xs: '0.875rem', md: '1rem' }, fontFamily: '"Montserrat", sans-serif' }}>
          Each project is a new and exciting adventure, as each project is unique in its location, nature and content.
        </Typography>
        <Divider sx={{ width: 150, mx: 'auto', mt: 3, borderColor: '#aaa' }} />
      </Box>

      {/* Image Gallery Section */}
      <ImageList
        variant="standard"
        // Gap for spacing between images
        gap={36} 
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          // Responsive Grid Columns (1 column on mobile, 2 on tablet, 3 on desktop)
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr) !important', 
            sm: 'repeat(2, 1fr) !important', 
            lg: 'repeat(3, 1fr) !important', 
          },
        }}
      >
        {projectsData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              overflow: 'hidden',
              position: 'relative',
              borderRadius: 1,
              // Fixed height for uniform image blocks
              height: 300, 
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                // Critical for responsiveness: ensures image fills the column width
                width: '100%', 
                height: 350,
                objectFit: 'cover', // Ensures the image crops to fill the 300px height
                display: 'block',
              }}
            />
            {/* Dark Title Overlay */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                p: 2,
                textAlign: 'left',
                pointerEvents: 'none',
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 400, fontFamily: '"Montserrat", sans-serif' }}>
                {item.title}
              </Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Projects;