import React from "react";
import {
  Box,
  Typography,
  Link,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Instagram,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";

const Topbar: React.FC = () => {
  const isPhone = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1366px)");

  if (isPhone) return null;

  // Shared icon container style
  const iconWrapBase = {
    width: 36,
    height: 36,
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 200ms ease, box-shadow 200ms ease, background 250ms ease",
    // subtle translucent background and thin border to separate from bar
    bgcolor: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.12)",
    "&:focus": { outline: "none", boxShadow: (theme: any) => `0 0 0 3px ${theme.palette.primary.light}` },
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1200,
        bgcolor: "#CAD5E2",
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
            fontSize: { sm: "0.85rem", md: "0.9rem" },
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          Need Assistance? Contact Us:
        </Typography>

        {isTablet ? (
          <>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.85rem",
                "&:hover": { color: "#5b1c31" },
              }}
            >
              <Phone sx={{ mr: 0.5, fontSize: "0.9rem", color: "#5b1c31" }} />
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
                fontSize: "0.85rem",
                "&:hover": { color: "#5b1c31" },
              }}
            >
              <Email sx={{ mr: 0.5, fontSize: "0.9rem", color: "#5b1c31" }} />
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
                fontSize: "0.85rem",
                flexWrap: "wrap",
                "&:hover": { color: "#5b1c31" },
                gap: 0.5,
              }}
            >
              <Phone sx={{ fontSize: "0.9rem", color: "#5b1c31" }} />
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
                fontSize: "0.85rem",
                flexWrap: "wrap",
                "&:hover": { color: "#5b1c31" },
                gap: 0.5,
              }}
            >
              <Email sx={{ fontSize: "0.9rem", color: "#5b1c31" }} />
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
                fontSize: "0.85rem",
                "&:hover": { color: "#5b1c31" },
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              <LocationOn
                sx={{ mr: 0.5, fontSize: "0.9rem", color: "#5b1c31" }}
              />
              Al Muntazah, Al Rawabi St, Doha, Qatar
            </Typography>
          </>
        )}
      </Box>

      {/* Right: Social Icons - Fresh styles & effects */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* Facebook */}
        <Tooltip title="Facebook">
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            sx={{
              ...iconWrapBase,
              color: "#1877F2",
              // hover: lift, scale and slight rotate
              "&:hover": {
                transform: "translateY(-4px) scale(1.12) rotate(-6deg)",
                boxShadow: "0 6px 18px rgba(24,119,242,0.18)",
                bgcolor: "rgba(24,119,242,0.06)",
                borderColor: "rgba(24,119,242,0.16)",
              },
            }}
          >
            <Facebook sx={{ fontSize: "1.25rem" }} />
          </IconButton>
        </Tooltip>

        {/* Instagram - gradient pop on hover */}
        <Tooltip title="Instagram">
          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            sx={{
              ...iconWrapBase,
              color: "#fff",
              // keep icon neutral by default, add subtle warm bg
              bgcolor: "rgba(255,255,255,0.06)",
              borderColor: "rgba(255,255,255,0.06)",
              // on hover show a gradient background and lift
              "&:hover": {
                transform: "translateY(-4px) scale(1.12)",
                boxShadow: "0 8px 22px rgba(206,75,150,0.18)",
                background:
                  "linear-gradient(45deg, #fdf497 0%, #fd5949 30%, #d6249f 60%, #285AEB 100%)",
                borderColor: "rgba(0,0,0,0.08)",
              },
              "& svg": { transition: "transform 200ms ease" },
            }}
          >
            <Instagram sx={{ fontSize: "1.25rem" }} />
          </IconButton>
        </Tooltip>

        {/* LinkedIn */}
        <Tooltip title="LinkedIn">
          <IconButton
            component="a"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            sx={{
              ...iconWrapBase,
              color: "#0A66C2",
              "&:hover": {
                transform: "translateY(-3px) scale(1.08) rotate(4deg)",
                boxShadow: "0 6px 18px rgba(10,102,194,0.14)",
                bgcolor: "rgba(10,102,194,0.06)",
                borderColor: "rgba(10,102,194,0.12)",
              },
            }}
          >
            <LinkedIn sx={{ fontSize: "1.25rem" }} />
          </IconButton>
        </Tooltip>

        {/* WhatsApp - friendly bounce on hover */}
        <Tooltip title="WhatsApp">
          <IconButton
            component="a"
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            sx={{
              ...iconWrapBase,
              color: "#25D366",
              "&:hover": {
                transform: "translateY(-5px) scale(1.14)",
                boxShadow: "0 8px 20px rgba(37,211,102,0.16)",
                bgcolor: "rgba(37,211,102,0.06)",
                borderColor: "rgba(37,211,102,0.14)",
              },
            }}
          >
            <WhatsApp sx={{ fontSize: "1.25rem" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Topbar;
