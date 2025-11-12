import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocationOn,
  Email,
  Phone,
} from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Main Footer */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #0a5397, #5b1c31)",
          color: "#fff",
          py: { xs: 6, md: 10 },
          boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: { xs: 4, md: 0 },
            }}
          >
            {/* First Column: Logo */}
            <Box
              sx={{
                flexBasis: { xs: "100%", md: "35%" },
                pr: { md: 4 },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                component="img"
                src="https://i.ibb.co/6RkH7J3r/Small-scaled.webp"
                alt="Company Logo"
                sx={{
                  width: { xs: 220, sm: 240, md: 220 },
                  height: "auto",
                  mb: 3,
                  objectFit: "contain",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderRadius: "16px",
                  p: 1.5,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.7,
                  opacity: 0.95,
                  fontSize: "1rem",
                  textAlign: "justify",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Al Mubthadieen Trading & Contracting (MTC) is a prestigious interior decoration company distinguished by refined craftsmanship, artistic excellence, and collaboration with some of the most renowned interior architects in the region.
              </Typography>
            </Box>

            {/* Second Column: Quick Links */}
            <Box sx={{ flexBasis: { xs: "100%", md: "20%" } }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  letterSpacing: 0.5,
                  color: "#fffff",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Home", "About", "Admissions", "Contact"].map((text) => (
                  <Link
                    key={text}
                    href="#"
                    color="inherit"
                    underline="hover"
                    sx={{
                      transition: "color 0.3s ease",
                      "&:hover": { color: "#d4f7d4" },
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {text}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Third Column: Contact + Social Media */}
            <Box
              sx={{
                flexBasis: { xs: "100%", md: "35%" },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  letterSpacing: 0.5,
                  color: "#fffff",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Contact Us
              </Typography>

              {/* Contact Info */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "nowrap" }}>
                  <LocationOn fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "'Montserrat', sans-serif", whiteSpace: "nowrap" }}
                  >
                    Al Muntazah, Al Rawabi St, Doha, Qatar
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "nowrap" }}>
                  <Email fontSize="small" />
                  <Link
                    href="mailto:info@almtcqatar.com"
                    color="inherit"
                    underline="hover"
                    sx={{ "&:hover": { color: "#d4f7d4" }, whiteSpace: "nowrap" }}
                  >
                    info@almtcqatar.com
                  </Link>
                  <Typography sx={{ whiteSpace: "nowrap" }}>|</Typography>
                  <Link
                    href="mailto:almtcqatar@gmail.com"
                    color="inherit"
                    underline="hover"
                    sx={{ "&:hover": { color: "#d4f7d4" }, whiteSpace: "nowrap" }}
                  >
                    almtcqatar@gmail.com
                  </Link>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "nowrap" }}>
                  <Phone fontSize="small" />
                  <Link
                    href="tel:+94672260200"
                    color="inherit"
                    underline="hover"
                    sx={{ "&:hover": { color: "#d4f7d4" }, whiteSpace: "nowrap" }}
                  >
                    (+94) 672260200
                  </Link>
                  <Typography sx={{ whiteSpace: "nowrap" }}>|</Typography>
                  <Link
                    href="tel:+974502260200"
                    color="inherit"
                    underline="hover"
                    sx={{ "&:hover": { color: "#d4f7d4" }, whiteSpace: "nowrap" }}
                  >
                    (+974) 502260200
                  </Link>
                </Box>
              </Box>

              {/* Social Media Icons */}
              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                {[ 
                  { icon: <Facebook />, link: "https://facebook.com" },
                  { icon: <Twitter />, link: "https://twitter.com" },
                  { icon: <Instagram />, link: "https://instagram.com" },
                  { icon: <LinkedIn />, link: "https://linkedin.com" },
                ].map((item, index) => (
                  <IconButton
                    key={index}
                    href={item.link}
                    target="_blank"
                    sx={{
                      color: "#fff",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.2)",
                        backgroundColor: "#d4f7d4",
                        color: "#0a5397",
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ backgroundColor: "#28282B", py: 2 }}>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            sx={{
              fontSize: "1rem",
              textAlign: "center",
              color: "#fff",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            &copy; {new Date().getFullYear()} Al Mubthadieen Trading & Contracting. All rights
            reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
