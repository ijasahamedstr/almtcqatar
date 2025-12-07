// src/pages/Projects.tsx
import React from "react";
import {
  Box,
  Typography,
  Divider,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { projectsData } from "../Page/projectsData";

const Projects: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#e8e3d6",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: "center",
      }}
    >
      {/* Text Content Section */}
      <Box sx={{ maxWidth: 800, margin: "0 auto", mb: { xs: 5, md: 8 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            letterSpacing: 5,
            fontWeight: 500,
            mb: 2,
            fontSize: { xs: "1.2rem", sm: "1.8rem" },
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          PROJECTS
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 1,
            fontSize: { xs: "0.875rem", md: "1rem" },
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          Each project is a new and exciting adventure, as each project is
          unique in its location, nature and content.
        </Typography>
        <Divider sx={{ width: 150, mx: "auto", mt: 3, borderColor: "#aaa" }} />
      </Box>

      {/* Image Gallery Section */}
      <ImageList
        variant="standard"
        gap={36}
        sx={{
          maxWidth: 1200,
          mx: "auto",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr) !important",
            sm: "repeat(2, 1fr) !important",
            lg: "repeat(3, 1fr) !important",
          },
        }}
      >
        {projectsData.map((item) => (
          <ImageListItem
            key={item.slug}
            sx={{
              overflow: "hidden",
              position: "relative",
              borderRadius: 1,
              height: 300,
            }}
          >
            {/* Make the whole card clickable via Box + RouterLink */}
            <Box
              component={RouterLink}
              to={`/projects/${item.slug}`}
              sx={{
                display: "block",
                height: "100%",
                width: "100%",
                position: "relative",
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
              />

              {/* Dark Title + View More Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  p: 2,
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 400 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  View more →
                </Typography>
              </Box>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Projects;
