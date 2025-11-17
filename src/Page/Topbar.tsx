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
                sx={{ "&:hover": { color: "#5b1c31" }, fontFamily: '"Montserrat", sans-serif' }}
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
                sx={{ "&:hover": { color: "#5b1c31" }, fontFamily: '"Montserrat", sans-serif' }}
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
                sx={{ "&:hover": { color: "#5b1c31" }, fontFamily: '"Montserrat", sans-serif' }}
              >
                (+94) 672260200
              </Link>
              <Typography component="span">|</Typography>
              <Link
                href="tel:+974502260200"
                underline="none"
                color="inherit"
                sx={{ "&:hover": { color: "#5b1c31" }, fontFamily: '"Montserrat", sans-serif' }}
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
                sx={{ "&:hover": { color: "#5b1c31" }, fontFamily: '"Montserrat", sans-serif' }}
              >
                info@almtcqatar.com
              </Link>
              <Typography component="span">|</Typography>
              <Link
                href="mailto:almtcqatar@gmail.com"
                underline="none"
                color="inherit"
                sx={{ "&:hover": { color: "#5b1c31" }, fontFamily: '"Montserrat", sans-serif' }}
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
              <LocationOn sx={{ mr: 0.5, fontSize: "0.9rem", color: "#5b1c31" }} />
              Al Muntazah, Al Rawabi St, Doha, Qatar
            </Typography>
          </>
        )}
      </Box>

      {/* Right: Social Icons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* Facebook */}
        <Tooltip title="Facebook">
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            sx={{
              backgroundColor: "#1877F2",
              color: "#fff",
              borderRadius: "50%",
              width: 30,
              height: 30,
              "&:hover": { backgroundColor: "#145DBF" },
            }}
          >
            <Facebook sx={{ fontSize: "0.95rem" }} />
          </IconButton>
        </Tooltip>

        {/* Instagram */}
        <Tooltip title="Instagram">
          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            sx={{
              background:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              color: "#fff",
              borderRadius: "50%",
              width: 30,
              height: 30,
              "&:hover": { opacity: 0.85 },
            }}
          >
            <Instagram sx={{ fontSize: "0.95rem" }} />
          </IconButton>
        </Tooltip>

        {/* LinkedIn */}
        <Tooltip title="LinkedIn">
          <IconButton
            component="a"
            href="https://linkedin.com"
            target="_blank"
            sx={{
              backgroundColor: "#0A66C2",
              color: "#fff",
              borderRadius: "50%",
              width: 30,
              height: 30,
              "&:hover": { backgroundColor: "#004182" },
            }}
          >
            <LinkedIn sx={{ fontSize: "0.95rem" }} />
          </IconButton>
        </Tooltip>

        {/* WhatsApp */}
        <Tooltip title="WhatsApp">
          <IconButton
            component="a"
            href="https://wa.me/1234567890"
            target="_blank"
            sx={{
              backgroundColor: "#25D366",
              color: "#fff",
              borderRadius: "50%",
              width: 30,
              height: 30,
              "&:hover": { backgroundColor: "#1da851" },
            }}
          >
            <WhatsApp sx={{ fontSize: "0.95rem" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Topbar;
