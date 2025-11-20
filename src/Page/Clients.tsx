import React from "react";
import { Box, Typography, keyframes } from "@mui/material";

// --- ANIMATION KEYFRAMES ---
// Fade up for initial load
const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    filter: blur(6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`;

// Pulse border animation
const pulseBorder = keyframes`
  0% { box-shadow: 0 0 0 2px #ff8c00; }
  50% { box-shadow: 0 0 12px 4px rgba(255, 140, 0, 0.6); }
  100% { box-shadow: 0 0 0 2px #ff8c00; }
`;

// --- LOGO DATA ---
const clientLogos = [
  { src: "https://i.ibb.co/21kXVxLJ/acascas.png", alt: "Bader Construction" },
  { src: "https://i.ibb.co/S7dvnxyq/caasca.png", alt: "Al Amal Hospital" },
  { src: "https://i.ibb.co/8gk9pVdV/DDFQFQ.png", alt: "Care n Cure" },
  { src: "https://i.ibb.co/GQrxXc3x/QWFWEF.png", alt: "Cozmo Travel" },
  { src: "https://i.ibb.co/V0Mps2kc/QWWQFQ.png", alt: "Cozmo Travel" },
];

const Clients: React.FC = () => {
  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        maxWidth: "lg",
        mx: "auto",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          color: "#5b1c31",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Our Clients
      </Typography>

      {/* Logos */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 3, sm: 5, md: 7 },
        }}
      >
        {clientLogos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              width: 200,
              height: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              borderRadius: "15px",
              backgroundColor: "#fff3e0",

              // Initial fade-up animation
              animation: `${fadeUp} 0.9s ease-out`,
              animationDelay: `${index * 0.15}s`,
              animationFillMode: "both",

              // Hover effect with pulse
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                animation: `${pulseBorder} 2s infinite`,
              },
            }}
          >
            <Box
              component="img"
              src={logo.src}
              alt={logo.alt}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Clients;
