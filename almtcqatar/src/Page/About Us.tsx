import React, { useState } from "react";
import { Box, Breadcrumbs, Link, Typography, Container,Button } from "@mui/material";
import Masonry from "@mui/lab/Masonry"; // ✅ Only one import
import { galleryImages } from "../Page/galleryData"; // ⬅️ adjust path if needed 


const managementMembers = [
  {
    name: "Dr. John Smith",
    title: "Chief Academic Officer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
    bio: "Oversees academic programs and drives innovation in teaching and learning.",
  },
  {
    name: "Ms. Sarah Johnson",
    title: "Director of Student Affairs",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    bio: "Ensures student engagement and fosters a vibrant campus community.",
  },
];


const Aboutus: React.FC = () => {
  const IMAGES_PER_LOAD = 4; // Number of images to show per click
  const [visibleImages, setVisibleImages] = useState(IMAGES_PER_LOAD);

  const handleLoadMore = () => {
    setVisibleImages((prev) => prev + IMAGES_PER_LOAD);
  };

  return (
    <>
      {/* ✅ Header Banner (Fixed Height for All Screens) */}
      <Box
        component="img"
        src="https://i.ibb.co/sp6c4m7f/Gemini-Generated-Image-8rjw9x8rjw9x8rjw-1.webp"
        alt="About Us Banner"
        sx={{
          width: "100%",
          objectFit: "cover",
        }}
      />

      {/* ✅ Breadcrumb Section */}
      <Box
        sx={{
          bgcolor: "#F1F5F9",
          fontFamily: "'Montserrat', sans-serif",
          py: 2,
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "1300px",
            mx: "auto",
          }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            separator="›"
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 500,
            }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{
                color: "#1E293B",
                fontFamily: "'Montserrat', sans-serif",
                "&:hover": { color: "#0F172A" },
              }}
            >
              Home
            </Link>
            <Typography
              sx={{
                color: "#0F172A",
                fontWeight: 600,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              About Us
            </Typography>
          </Breadcrumbs>
        </Box>
      </Box>

      {/* ✅ About Section (Text + Image Collage) */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "1300px",
          mx: "auto",
          mt: { xs: 10, md: 12 },
          mb: 10,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Left Text */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: "#475569",
              fontSize: "16px",
              lineHeight: 1.8,
              fontFamily: "'Montserrat', sans-serif",
              mb: 2,
            }}
          >
            Al Mubthadieen Trading & Contracting (MTC) is a prestigious interior
            decoration company distinguished by refined craftsmanship, artistic
            excellence, and collaboration with some of the most renowned
            interior architects in the region.
          </Typography>

          <Typography
            sx={{
              color: "#475569",
              fontSize: "16px",
              lineHeight: 1.8,
              fontFamily: "'Montserrat', sans-serif",
              mb: 2,
            }}
          >
            With years of experience and a passion for perfection, MTC has
            become synonymous with quality, creativity, and timeless elegance in
            interior design and decorative finishes.
          </Typography>

          <Typography
            sx={{
              color: "#475569",
              fontSize: "16px",
              lineHeight: 1.8,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Al Mubthadieen Trading & Contracting, Qatar executes high-end
            interior projects for private clients, boutiques, luxury hotels, and
            unique restaurants. Thanks to our extensive experience and French
            know-how, we cultivate a special and unique relationship with our
            clients, built on listening, trust, rigor, and exceptional
            craftsmanship. Being established in the Middle East allows us to
            provide flexibility, responsiveness, and strong support throughout
            the region.
          </Typography>
        </Box>

        {/* Right Side Image Collage */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 4, md: 0 },
          }}
        >
          {/* Decorative Dots - Only XL */}
          <Box
            sx={{
              display: { xs: "none", xl: "block" },
              position: "absolute",
              top: "-50px",
              left: "90px",
              width: "260px",
              height: "260px",
              backgroundImage: "radial-gradient(#1E40AF 2px, transparent 2px)",
              backgroundSize: "18px 18px",
              borderRadius: "12px",
              opacity: 0.6,
              zIndex: 1,
              filter: "contrast(1.2) brightness(0.9)",
            }}
          />

          {/* Background Image - Only XL */}
          <Box
            component="img"
            src="https://i.ibb.co/7dw3xSDY/expertise-complex-joinery-work-1-1-2048x1536-jpg.webp"
            alt="Lyceum Campus Background"
            sx={{
              display: { xs: "none", xl: "block" },
              position: "absolute",
              top: "-60px",
              right: "-90px",
              width: "350px",
              borderRadius: "16px",
              zIndex: 2,
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            }}
          />

          {/* Main Image */}
          <Box
            component="img"
            src="https://i.ibb.co/v6VsQkZ0/p22-Gait-Lyrique-2.webp"
            alt="Lyceum Campus Students"
            sx={{
              position: "relative",
              width: { xs: "90%", md: "85%" },
              maxWidth: "350px",
              borderRadius: "16px",
              zIndex: 3,
              boxShadow: "0 10px 26px rgba(0,0,0,0.25)",
            }}
          />
        </Box>
      </Box>

      {/* ✅ Management Members */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          justifyContent: "center",
          pb: 10,
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "text.secondary",
            mb: 1,
            fontWeight: 500,
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: 1,
          }}
        >
          Management Members
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 6,
            color: "#5b1c31",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Where Vision Meets Leadership
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {managementMembers.map((member, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                p: 3,
                borderRadius: 3,
                transition: "transform 0.3s ease",
                width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <Box
                component="img"
                src={member.image}
                alt={member.name}
                sx={{
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  objectFit: "cover",
                  mx: "auto",
                  mb: 2,
                  boxShadow: 3,
                }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  mb: 1,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {member.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontFamily: "'Montserrat', sans-serif",
                  maxWidth: 280,
                  mx: "auto",
                }}
              >
                {member.bio}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
 <Box
      sx={{
        backgroundColor: "#F8FAFC", // full-width background
        py: 4, // vertical padding
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          // No extra background/padding here to avoid conflict
        }}
      >
        {/* ✅ Masonry Gallery Section */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 6,
            color: "#5b1c31",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Our Projects Gallery
        </Typography>

        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {galleryImages.slice(0, visibleImages).map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="e-gallery-masonry e-gallery--ltr e-gallery--lazyload"
              loading="lazy"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 2,
                display: "block",
              }}
            />
          ))}
        </Masonry>

        {visibleImages < galleryImages.length && (
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              onClick={handleLoadMore}
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333",
                },
                minWidth: "250px",
                padding: "12px 30px",
                fontSize: "18px",
                borderRadius: "0px",
                textTransform: "none",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Container>
    </Box>
      


    </>
  );
};

export default Aboutus;
