import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const Aboutus: React.FC = () => {
  return (
    <>
      {/* ✅ Header Banner */}
      <Box
        component="img"
        src="https://i.ibb.co/sp6c4m7f/Gemini-Generated-Image-8rjw9x8rjw9x8rjw-1.webp"
        alt="About Us Banner"
        sx={{
          width: "100%",
          height: { xs: "220px", md: "400px" },
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
        {/* ✅ Left Text */}
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
            Al Mubthadieen Trading & Contracting (MTC) is a prestigious interior decoration company distinguished by refined craftsmanship, artistic excellence, and collaboration with some of the most renowned interior architects in the region.
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
            With years of experience and a passion for perfection, MTC has become synonymous with quality, creativity, and timeless elegance in interior design and decorative finishes.
          </Typography>

          <Typography
            sx={{
              color: "#475569",
              fontSize: "16px",
              lineHeight: 1.8,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Al Mubthadieen Trading & Contracting, Qatar executes high-end interior projects for private clients, boutiques, luxury hotels, and unique restaurants.Thanks to our extensive experience and French know-how, we cultivate a special and unique relationship with our clients, built on listening, trust, rigor, and exceptional craftsmanship.

          Being established in the Middle East allows us to provide flexibility, responsiveness, and strong support throughout the region.
          </Typography>
        </Box>

        {/* ✅ Right Side Image Collage */}
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
      
      
    </>
  );
};

export default Aboutus;
