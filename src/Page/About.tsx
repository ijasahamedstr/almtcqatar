import React from "react";
import { Box, Container, Typography } from "@mui/material";

const About: React.FC = () => {
  const steps = [
    { number: 50, label: "Project" },
    { number: 20, label: "Customer" },
    { number: 100, label: "Complete" },
  ];

  return (
    <Container maxWidth={false} disableGutters sx={{ p: 0, m: 0, width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
          backgroundColor: { xs: "#FAFAFA", sm: "#FAFAFA", md: "transparent" },
          backgroundImage: {
            xs: "none",
            sm: "none",
            md: "url('https://i.ibb.co/mFrQgC9y/Gemini-Generated-Image-7ror8n7ror8n7ror-1.webp')",
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
          mt: 0, // ✅ Top space removed
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "flex-start",
            alignItems: { xs: "flex-start", md: "flex-start" },
            textAlign: { xs: "flex-start", md: "start" },
            px: { xs: 4, md: 10, lg: 0 },
            pt: { xs: 6, md: 12, lg: 12 },
            fontFamily: '"Montserrat", sans-serif',
            color: "#000",
          }}
        >
          {/* Left Section (60%) */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 60%" },
              mb: { xs: 3, md: 0 },
              pl: { lg: "350px" },
              pr: { lg: "0px" },
              position: "relative",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                color: "#222",
                mb: 1,
                fontSize: { xs: "1.8rem", sm: "1.5rem", md: "1.8rem", lg: "2rem" },
                textShadow: "1px 1px 4px rgba(0,0,0,0.15)",
              }}
            >
              Al Mubthadieen Trading & Contracting (MTC)
            </Typography>

            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 600,
                color: "#343f52",
                mt: { xs: 1, md: 1.5, lg: 2 },
                mb: 3,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem", lg: "1.5rem" },
                lineHeight: 1.5,
              }}
            >
              Where Craftsmanship Meets Creativity in Timeless Interiors
            </Typography>

            <Typography
              variant="body1"
              mt={2}
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                mb: 2,
                fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem", lg: "1.125rem" },
                lineHeight: 1.6,
                color: "#444",
              }}
            >
              Al Mubthadieen Trading & Contracting (MTC) is a prestigious
              interior decoration company distinguished by refined
              craftsmanship, artistic excellence, and collaboration with some
              of the most renowned interior architects in the region.
            </Typography>

            <Typography
              variant="body1"
              mt={2}
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.1rem", lg: "1.125rem" },
                lineHeight: 1.6,
                color: "#444",
              }}
            >
              With years of experience and a passion for perfection, MTC
              has become synonymous with quality, creativity, and timeless
              elegance in interior design and decorative finishes.
            </Typography>

            {/* Circles Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-around", sm: "space-around", md: "flex-start" },
                mt: 6,
                gap: { xs: 3, sm: 4, md: 6 },
                pb: { xs: 0, md: 10, lg: 12 },
              }}
            >
              {steps.map((step, index) => (
                <Box
                  key={step.number}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    animation: `fadeInUp 0.8s ease forwards`,
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 90, sm: 110, md: 150 },
                      height: { xs: 90, sm: 110, md: 150 },
                      borderRadius: "50%",
                      background: "#5b1c31",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: { xs: "1rem", sm: "1.3rem", md: "2rem" },
                      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                      border: "3px solid #fff",
                      transition: "all 0.4s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.1) rotate(5deg)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.4)",
                      },
                    }}
                  >
                    {step.number}
                  </Box>
                  <Typography
                    sx={{
                      mt: 1.5,
                      fontSize: { xs: "0.6rem", sm: "0.85rem", md: "1.1rem" },
                      fontWeight: 500,
                      textAlign: "center",
                      background: "linear-gradient(135deg, #5b1c31, #8b2a46)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontFamily: '"Montserrat", sans-serif',
                    }}
                  >
                    {step.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Section (40%) */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 40%" },
              mt: { xs: 4, md: 0 },
              px: { xs: 0, md: 2 },
            }}
          />
        </Box>
      </Box>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Container>
  );
};

export default About;
