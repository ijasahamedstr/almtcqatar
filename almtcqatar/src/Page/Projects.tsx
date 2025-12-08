// src/pages/Projects.tsx
import React from "react";
import {
  Box,
  Typography,
  Divider,
  ImageList,
  ImageListItem,
  Pagination,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { projectsData } from "../Page/projectsData"; // ✅ shared data

const Projects: React.FC = () => {
  // Pagination state
  const [page, setPage] = React.useState(1);
  const ITEMS_PER_PAGE = 6; // Show 6 items per page

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const paginatedProjects = projectsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#e8e3d6",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: "center",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Header Section */}
      <Box sx={{ maxWidth: 800, margin: "0 auto", mb: { xs: 5, md: 8 } }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            letterSpacing: 5,
            fontWeight: 500,
            mb: 2,
            fontSize: { xs: "1.2rem", sm: "1.8rem" },
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          PROJECTS
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 1,
            fontSize: { xs: "0.875rem", md: "1rem" },
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Each project is a new and exciting adventure, as each project is
          unique in its location, nature and content.
        </Typography>

        <Divider sx={{ width: 150, mx: "auto", mt: 3, borderColor: "#aaa" }} />
      </Box>

      {/* Image Gallery */}
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
        {paginatedProjects.map((item) => (
          <ImageListItem
            key={item.slug}
            sx={{
              overflow: "hidden",
              position: "relative",
              borderRadius: 1,
              height: 300,
            }}
          >
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

              {/* Overlay */}
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
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  View more →
                </Typography>
              </Box>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.9rem",
                borderRadius: "10px",
                px: 2,
                py: 0.5,
              },
              "& .Mui-selected": {
                backgroundColor: "#000",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#222",
                },
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Projects;
