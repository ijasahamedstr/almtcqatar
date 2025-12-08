// src/pages/ProjectView.tsx
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { projectsData } from "../Page/projectsData";

const ProjectView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find((p) => p.slug === slug);

  // ✅ State for fullscreen popup image
  const [openImg, setOpenImg] = React.useState<string | null>(null);

  if (!project) {
    return (
      <Container
        sx={{
          py: 8,
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Project not found
        </Typography>
        <Link
          component={RouterLink}
          to="/projects"
          underline="hover"
          sx={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          ← Back to Projects
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

        // ✅ Apply Montserrat to everything inside
        fontFamily: "'Montserrat', sans-serif",
        "& *": {
          fontFamily: "'Montserrat', sans-serif !important",
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
          <Link
            component={RouterLink}
            color="inherit"
            to="/"
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            color="inherit"
            to="/projects"
            sx={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Projects
          </Link>
          <Typography color="text.primary">{project.title}</Typography>
        </Breadcrumbs>

        {/* MAIN 50/50 Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: { xs: "stretch", md: "flex-start" },
            mb: 6,
          }}
        >
          {/* LEFT IMAGE */}
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
                src={project.img}
                alt={project.title}
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

          {/* RIGHT DETAILS */}
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
            {/* Title & Amount */}
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
                Featured Project
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  letterSpacing: 2,
                  mb: 1,
                }}
              >
                {project.title}
              </Typography>

              {project.amount && (
                <Typography variant="subtitle1" sx={{ color: "#555" }}>
                  Project Amount: <strong>{project.amount}</strong>
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

            {/* DESCRIPTION */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 1.5,
                  letterSpacing: 1,
                }}
              >
                Project Description
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: "#444",
                  fontSize: 15.5,
                }}
              >
                {project.description}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* GALLERY WITH SMALL THUMBS + FULLSCREEN POPUP */}
        {project.gallery && project.gallery.length > 0 && (
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                letterSpacing: 2,
              }}
            >
              Project Gallery
            </Typography>

            <Divider
              sx={{
                width: 80,
                mb: 3,
                borderBottomWidth: 2,
                borderColor: "#b1975b",
              }}
            />

            {/* Thumbnails grid (small images) */}
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
              {project.gallery.map((imageUrl, idx) => (
                <Box
                  key={idx}
                  onClick={() => setOpenImg(imageUrl)}
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    height: 150, // ✅ small thumbnail
                    boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
                    transform: "translateY(0)",
                    transition:
                      "transform 0.35s ease, box-shadow 0.35s ease, filter 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 26px rgba(0,0,0,0.22)",
                    },
                    "& img": {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.45s ease, filter 0.45s ease",
                    },
                    "&:hover img": {
                      transform: "scale(1.05)",
                      filter: "brightness(1.05)",
                    },
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={`${project.title} ${idx + 1}`}
                    loading="lazy"
                  />
                </Box>
              ))}
            </Box>

            {/* FULLSCREEN ZOOM MODAL */}
            <Modal
              open={Boolean(openImg)}
              onClose={() => setOpenImg(null)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0,0,0,0.9)", // dark fullscreen bg
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                {/* Close Button */}
                <IconButton
                  onClick={() => setOpenImg(null)}
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: "rgba(255,255,255,0.3)",
                    color: "#fff",
                    "&:hover": { background: "rgba(255,255,255,0.6)" },
                    zIndex: 10,
                  }}
                >
                  <CloseIcon sx={{ fontSize: 30 }} />
                </IconButton>

                {/* FULLSCREEN IMAGE FIT */}
                {openImg && (
                  <img
                    src={openImg}
                    alt="Zoomed"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain", // ✅ fits screen while keeping ratio
                      display: "block",
                    }}
                  />
                )}
              </Box>
            </Modal>
          </Box>
        )}

        <Link
          component={RouterLink}
          to="/projects"
          underline="hover"
          sx={{ mt: 3, display: "inline-block" }}
        >
          ← Back to all projects
        </Link>
      </Container>
    </Box>
  );
};

export default ProjectView;
