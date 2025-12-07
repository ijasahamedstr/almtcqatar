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
} from "@mui/material";
import { projectsData } from "../Page/projectsData";

const ProjectView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find((p) => p.slug === slug);

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
        <Link component={RouterLink} to="/projects" underline="hover">
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
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          // ✅ All text in this page uses Montserrat
          "& *": {
            fontFamily: "'Montserrat', sans-serif",
          },
        }}
      >
        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
          <Link component={RouterLink} color="inherit" to="/">
            Home
          </Link>
          <Link component={RouterLink} color="inherit" to="/projects">
            Projects
          </Link>
          <Typography color="text.primary">{project.title}</Typography>
        </Breadcrumbs>

        {/* MAIN 50% / 50% LAYOUT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: { xs: "stretch", md: "flex-start" },
            mb: 6,
          }}
        >
          {/* LEFT: Big Image */}
          <Box
            sx={{
              flex: { xs: "1 1 auto", md: "0 0 50%" },
              maxWidth: { md: "50%" },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 18px 35px rgba(0,0,0,0.18)",
              position: "relative",
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

          {/* RIGHT: Details */}
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
            {/* Title + Amount */}
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
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#555",
                  }}
                >
                  Project Amount: <strong>{project.amount}</strong>
                </Typography>
              )}
            </Box>

            {/* Divider small accent */}
            <Divider
              sx={{
                width: 80,
                mb: 3,
                borderBottomWidth: 2,
                borderColor: "#b1975b",
              }}
            />

            {/* Description */}
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

        {/* Gallery */}
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

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: 2.5,
              }}
            >
              {project.gallery.map((imageUrl, idx) => (
                <Box
                  key={idx}
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
                    cursor: "pointer",
                    transform: "translateY(0)",
                    transition:
                      "transform 0.35s ease, box-shadow 0.35s ease, filter 0.35s ease",
                    "& img": {
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.45s ease, filter 0.45s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 26px rgba(0,0,0,0.22)",
                    },
                    "&:hover img": {
                      transform: "scale(1.05)",
                      filter: "brightness(1.05)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.28), rgba(0,0,0,0))",
                      opacity: 0,
                      transition: "opacity 0.4s ease",
                    },
                    "&:hover::after": {
                      opacity: 1,
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
          </Box>
        )}

        <Link component={RouterLink} to="/projects" underline="hover">
          ← Back to all projects
        </Link>
      </Container>
    </Box>
  );
};

export default ProjectView;
