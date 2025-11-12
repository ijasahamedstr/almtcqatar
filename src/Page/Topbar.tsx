import React from "react";
import { Box, Typography, Button, Link, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const Topbar: React.FC = () => {
  const isPhone = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1366px)");

  if (isPhone) return null;

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1200,
        bgcolor: "#CAD5E2", // Updated background
        color: "#0C0A09",
        px: { sm: 3, md: 6 },
        py: 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        overflow: "hidden",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      {/* Left: Contact Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { sm: 2, md: 4 },
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            color: "#0C0A09",
            fontSize: { sm: "0.9rem", md: "1rem" },
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          Contact Us:
        </Typography>

        {isTablet ? (
          <>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.9rem",
                "&:hover": { color: "#5b1c31" },
              }}
            >
              <Phone sx={{ mr: 1, fontSize: "1rem", color: "#5b1c31" }} />
              <Link
                href="tel:+94672260200"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": { color: "#5b1c31" },
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                (+94) 672260200
              </Link>
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.9rem",
                "&:hover": { color: "#5b1c31" },
              }}
            >
              <Email sx={{ mr: 1, fontSize: "1rem", color: "#5b1c31" }} />
              <Link
                href="mailto:info@brainiacs.edu.lk"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": { color: "#5b1c31" },
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                info@brainiacs.edu.lk
              </Link>
            </Typography>
          </>
        ) : (
          <>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.9rem",
                flexWrap: "wrap",
                "&:hover": { color: "#5b1c31" },
                gap: 1,
              }}
            >
              <Phone sx={{ fontSize: "1rem", color: "#5b1c31" }} />
              <Link
                href="tel:+94672260200"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": { color: "#5b1c31" },
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                (+94) 672260200
              </Link>
              <Typography component="span">|</Typography>
              <Link
                href="tel:+974502260200"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": { color: "#5b1c31" },
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                (+974) 502260200
              </Link>
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.9rem",
                flexWrap: "wrap",
                "&:hover": { color: "#5b1c31" },
                gap: 1,
              }}
            >
              <Email sx={{ fontSize: "1rem", color: "#5b1c31" }} />
              <Link
                href="mailto:info@almtcqatar.com"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": { color: "#5b1c31" },
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                info@almtcqatar.com
              </Link>
              <Typography component="span">|</Typography>
              <Link
                href="mailto:almtcqatar@gmail.com"
                underline="none"
                color="inherit"
                sx={{
                  "&:hover": { color: "#5b1c31" },
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                almtcqatar@gmail.com
              </Link>
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.9rem",
                "&:hover": { color: "#5b1c31" },
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              <LocationOn sx={{ mr: 1, fontSize: "1rem", color: "#5b1c31" }} />
              Al Muntazah, Al Rawabi St, Doha, Qatar
            </Typography>
          </>
        )}
      </Box>

      {/* Right: Inquire Button */}
      <Button
        variant="contained"
        size="small"
        component={RouterLink}
        to="/inquiries"
        sx={{
          fontWeight: "bold",
          textTransform: "none",
          fontSize: { xs: "0.85rem", sm: "0.95rem" },
          borderRadius: "12px",
          paddingX: 3,
          paddingY: 1,
          color: "#fff",
          backgroundColor: "#5b1c31",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#461627",
          },
        }}
      >
        Inquire Here
      </Button>
    </Box>
  );
};

export default Topbar;
