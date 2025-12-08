// src/sections/Clients.tsx
import React from "react";
import { Box, Typography, keyframes } from "@mui/material";

// --- ANIMATION KEYFRAMES ---
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

const pulseBorder = keyframes`
  0% { box-shadow: 0 0 0 2px #ff8c00; }
  50% { box-shadow: 0 0 12px 4px rgba(255, 140, 0, 0.6); }
  100% { box-shadow: 0 0 0 2px #ff8c00; }
`;

// LOGOS
const clientLogos = [
  { src: "https://i.ibb.co/21kXVxLJ/acascas.png", alt: "Bader Construction" },
  { src: "https://i.ibb.co/S7dvnxyq/caasca.png", alt: "Al Amal Hospital" },
  { src: "https://i.ibb.co/8gk9pVdV/DDFQFQ.png", alt: "Care n Cure" },
  { src: "https://i.ibb.co/GQrxXc3x/QWFWEF.png", alt: "Cozmo Travel 1" },
  { src: "https://i.ibb.co/V0Mps2kc/QWWQFQ.png", alt: "Cozmo Travel 2" },
];

const Clients: React.FC = () => {
  return (
    <Box sx={{ py: 6, px: 2, maxWidth: "1200px", mx: "auto" }}>
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

      {/* Logos Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))", // ✅ exactly 2 columns on mobile
            sm: "repeat(3, minmax(0, 1fr))", // 3 columns on small tablets
            md: "repeat(4, minmax(0, 1fr))", // 4 columns on desktop
          },
          gap: { xs: 2, sm: 3, md: 4 },
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {clientLogos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              width: "100%", // fill the grid cell
              height: 160,
              minHeight: 160,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              p: 1.5,
              borderRadius: "15px",
              backgroundColor: "#fff3e0",

              animation: `${fadeUp} 0.9s ease-out`,
              animationDelay: `${index * 0.15}s`,
              animationFillMode: "both",

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
                maxWidth: "90%",
                maxHeight: "90%",
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
