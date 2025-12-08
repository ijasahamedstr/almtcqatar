// src/pages/ExpertiseAll.tsx
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
import { expertiseData } from "../Page/expertiseData";

const ExpertiseAll: React.FC = () => {
  // Pagination state
  const [page, setPage] = React.useState(1);
  const ITEMS_PER_PAGE = 8; // Show 6 items per page

  const totalPages = Math.ceil(expertiseData.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const paginatedExpertise = expertiseData.slice(
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
          Expertise
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 1,
            fontSize: { xs: "0.875rem", md: "1rem" },
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Tailor-made expertise in high-end interiors, from design and project
          management to furniture, joinery, finishes and decorative arts.
        </Typography>

        <Divider sx={{ width: 150, mx: "auto", mt: 3, borderColor: "#aaa" }} />
      </Box>

      {/* Image Gallery */}
      <ImageList
        variant="standard"
        gap={36}
        sx={{
          maxWidth: 1400,
          mx: "auto",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr) !important", // mobile
            sm: "repeat(2, 1fr) !important", // tablet
            md: "repeat(3, 1fr) !important", // mid screens
            lg: "repeat(4, 1fr) !important", // 4 cards per row on desktop
          },
        }}
      >
        {paginatedExpertise.map((item) => (
          <ImageListItem
            key={item.slug}
            sx={{
              overflow: "hidden",
              position: "relative",
              borderRadius: 2,
              height: 320,
              transition: "0.3s ease",
              "&:hover .viewBtn": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            <Box
              component={RouterLink}
              to={`/Expertise/${item.slug}`}
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
                src={item.heroImage}
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
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
                  color: "white",
                  p: 2.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    mb: 1,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {item.title}
                </Typography>

                {/* View More Button */}
                <Box
                  className="viewBtn"
                  sx={{
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "0.4s ease",
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2.5,
                      py: 0.8,
                      borderRadius: "30px",
                      border: "1px solid #d4c19b",
                      color: "#fff",
                      fontSize: "0.75rem",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      backdropFilter: "blur(4px)",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      transition: "0.3s ease",
                      fontFamily: "'Montserrat', sans-serif",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000",
                      },
                    }}
                  >
                    View More →
                  </Box>
                </Box>
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

export default ExpertiseAll;
