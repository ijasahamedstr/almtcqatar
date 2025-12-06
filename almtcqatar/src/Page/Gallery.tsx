import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

const galleryImages = [
  "https://maisonrandf.com/wp-content/uploads/2023/09/maisonrandf_index_saudi_-16-768x1024.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/07/Durat-Lounge-10.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/09/maisonrandf_index_saudi_-24-768x1024.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/03/armchair_rattan-768x1024.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/04/DURAT-RESTAURANT-7-min-768x576.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/09/maisonrandf_index_saudi_-24-768x1024.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/03/armchair_rattan-768x1024.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/04/Sofa_marble_table-1-min-768x432.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/09/maisonrandf_index_saudi_-16-768x1024.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/07/Durat-Lounge-10.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/04/Straw-marquetry-panel-768x1024.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/07/Najd-Artwork-2.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/04/DURAT-RESTAURANT-7-min-768x576.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/03/Wood-carving-768x961.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/05/Qatar_decorative_paint-55.jpg",
  "https://maisonrandf.com/wp-content/uploads/2023/05/Qatar_decorative_paint-23-768x660.jpg",
];

function GalleryPage() {
  const [visibleImages, setVisibleImages] = useState(6); // start with 6

  const handleLoadMore = () => {
    setVisibleImages((prev) =>
      Math.min(prev + 6, galleryImages.length)
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F8FAFC", // full-width background
        py: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          // Keep it clean; Box already has the padding/background
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 6,
            color: "#5b1c31",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Our Projects Gallery
        </Typography>

        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {galleryImages.slice(0, visibleImages).map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="e-gallery-masonry e-gallery--ltr e-gallery--lazyload"
              loading="lazy"
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 2,
                display: "block",
              }}
            />
          ))}
        </Masonry>

        {visibleImages < galleryImages.length && (
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              onClick={handleLoadMore}
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333",
                },
                minWidth: "250px",
                padding: "12px 30px",
                fontSize: "18px",
                borderRadius: "0px",
                textTransform: "none",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default GalleryPage;
