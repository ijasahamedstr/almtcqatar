// src/pages/ExpertiseDetails.tsx
import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Divider,
  Modal,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { expertiseData } from "../Page/expertiseData";

const ExpertiseDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const expertise = expertiseData.find((e) => e.slug === slug);

  const [openImg, setOpenImg] = React.useState<string | null>(null);

  // ✅ Scroll page to top when opening this view
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [slug]);

  if (!expertise) {
    return (
      <Container
        sx={{
          py: 8,
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Expertise not found
        </Typography>
        <Link
          component={RouterLink}
          to="/Expertise"
          underline="hover"
          sx={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          ← Back to Expertise
        </Link>
      </Container>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f5f2ea",
        py: { xs: 6, md: 10 },
        fontFamily: "'Montserrat', sans-serif",
        "& *": {
          fontFamily: "'Montserrat', sans-serif !important",
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
          <Link component={RouterLink} color="inherit" to="/">
            Home
          </Link>
          <Link component={RouterLink} color="inherit" to="/Expertise">
            Expertise
          </Link>
          <Typography color="text.primary">{expertise.title}</Typography>
        </Breadcrumbs>

        {/* MAIN 50/50 layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: { xs: "stretch", md: "flex-start" },
            mb: 6,
          }}
        >
          {/* LEFT: main image */}
          <Box
            sx={{
              flex: { xs: "1 1 auto", md: "0 0 50%" },
              maxWidth: { md: "50%" },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 18px 35px rgba(0,0,0,0.18)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                "& img": {
                  transition: "transform 0.6s ease, filter 0.6s ease",
                  transformOrigin: "center center",
                },
                "&:hover img": {
                  transform: "scale(1.04)",
                  filter: "brightness(1.03)",
                },
              }}
            >
              <img
                src={expertise.heroImage}
                alt={expertise.title}
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: 520,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Box>

          {/* RIGHT: text details */}
          <Box
            sx={{
              flex: { xs: "1 1 auto", md: "0 0 50%" },
              maxWidth: { md: "50%" },
              backgroundColor: "#ffffff",
              borderRadius: 3,
              boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
              p: { xs: 3, md: 4 },
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="overline"
                sx={{
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#999",
                  fontSize: 12,
                }}
              >
                Expertise
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  letterSpacing: 2,
                  mb: 1,
                }}
              >
                {expertise.title}
              </Typography>

              {expertise.subtitle && (
                <Typography variant="subtitle1" sx={{ color: "#777", mb: 1 }}>
                  {expertise.subtitle}
                </Typography>
              )}
            </Box>

            <Divider
              sx={{
                width: 80,
                mb: 3,
                borderBottomWidth: 2,
                borderColor: "#b1975b",
              }}
            />

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "#444",
                fontSize: 15.5,
                mb: 2,
              }}
            >
              {expertise.description}
            </Typography>

            {expertise.bullets && expertise.bullets.length > 0 && (
              <List
                dense
                sx={{
                  listStyleType: "disc",
                  pl: 3,
                  "& .MuiListItem-root": {
                    display: "list-item",
                    py: 0.3,
                  },
                }}
              >
                {expertise.bullets.map((item, idx) => (
                  <ListItem key={idx}>{item}</ListItem>
                ))}
              </List>
            )}
          </Box>
        </Box>

        {/* Gallery */}
        {expertise.gallery && expertise.gallery.length > 0 && (
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                letterSpacing: 2,
              }}
            >
              Gallery
            </Typography>

            <Divider
              sx={{
                width: 80,
                mb: 3,
                borderBottomWidth: 2,
                borderColor: "#b1975b",
              }}
            />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 2,
              }}
            >
              {expertise.gallery.map((img, idx) => (
                <Box
                  key={idx}
                  onClick={() => setOpenImg(img)}
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    cursor: "pointer",
                    height: 150,
                    boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
                    transition:
                      "transform .35s, box-shadow .35s, filter .35s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 26px rgba(0,0,0,0.22)",
                    },
                  }}
                >
                  <img
                    src={img}
                    alt={expertise.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>

            <Modal
              open={Boolean(openImg)}
              onClose={() => setOpenImg(null)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100vw",
                  height: "100vh",
                }}
              >
                <IconButton
                  onClick={() => setOpenImg(null)}
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: "rgba(255,255,255,0.3)",
                    color: "#fff",
                    "&:hover": { background: "rgba(255,255,255,0.6)" },
                  }}
                >
                  <CloseIcon sx={{ fontSize: 30 }} />
                </IconButton>

                {openImg && (
                  <img
                    src={openImg}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                )}
              </Box>
            </Modal>
          </Box>
        )}

        <Link
          component={RouterLink}
          to="/Expertise"
          underline="hover"
          sx={{ mt: 3, display: "inline-block" }}
        >
          ← Back to all expertise
        </Link>
      </Container>
    </Box>
  );
};

export default ExpertiseDetails;
