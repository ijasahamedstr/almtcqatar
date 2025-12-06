import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardMedia, Box, Typography } from "@mui/material";

const products1 = [
  {
    id: 1,
    imageUrl:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Durat-Lobby-19.jpg.avif",
    link: "/Web-Media-Video",
    title: "Design & Project Management",
  },
  {
    id: 2,
    imageUrl:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_customized-furniture-_1__1-1536x2048.jpg.webp",
    link: "/vr-videos",
    title: "Furniture",
  },
  {
    id: 3,
    imageUrl:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_curtaining.jpg.avif",
    link: "/Web-Media-photo",
    title: "Curtaining & upholstery",
  },
  {
    id: 4,
    imageUrl:
      "https://maisonrandf.com/wp-content/uploads/2023/04/expertise_complex-joinery-work-_1__1-2048x1536.jpg.webp",
    link: "/Motion-graphics",
    title: "Joinery work",
  },
  {
    id: 5,
    imageUrl:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_special-finishes-min-1147x2048.jpg.webp",
    link: "/AIVideos",
    title: "Special finishes",
  },
  {
    id: 6,
    imageUrl:
      "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_Straw-marquetry-min-1147x2048.jpg.webp",
    link: "/3D-Animation",
    title: "Straw marquetry",
  },
];

const Expertise: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#040404",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 6, sm: 8, md: 10 }, // top + bottom padding responsive
        px: { xs: 2, sm: 0 },
        mt: 0,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          px: { xs: 0, sm: 3, md: 5 },
        }}
      >
        {/* Title */}
        <Typography
          component="h1"
          sx={{
            color: "white",
            mb: 2,
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
            fontSize: { xs: "26px", sm: "32px", md: "36px" },
          }}
        >
          Expertise
        </Typography>

        {/* Subtitle */}
        <Typography
          component="p"
          sx={{
            color: "white",
            mb: { xs: 4, sm: 5 },
            fontFamily: '"Montserrat", sans-serif',
            fontSize: { xs: "13px", sm: "14px", md: "15px" },
            lineHeight: 1.7,
          }}
        >
          Maison (MTC) is dedicated to the execution of high-end interior’s
          project and is proposing tailor-made expertise to match with
          the needs of our clients.
        </Typography>

        {/* Grid of cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 1 column on phones
              sm: "repeat(2, minmax(0, 1fr))", // 2 columns on tablets
              md: "repeat(3, minmax(0, 1fr))", // 3 columns on desktops
            },
            gap: { xs: 2.5, sm: 3, md: 4 },
          }}
        >
          {products1.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              style={{ textDecoration: "none", display: "block" }}
            >
              <Card
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  height: "100%",
                  transform: "translateY(0)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
                  transition: "transform 0.3s ease, boxShadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.5)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.imageUrl}
                  alt={product.title}
                  sx={{
                    height: { xs: 220, sm: 260, md: 320 },
                    width: "100%",
                    objectFit: "cover",
                    filter: "brightness(55%)",
                    transition: "transform 0.4s ease, filter 0.4s ease",
                    "&:hover": {
                      filter: "brightness(70%)",
                      transform: "scale(1.03)",
                    },
                  }}
                />

                {/* Centered title overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 500,
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                        lg: "20px",
                      },
                    }}
                  >
                    {product.title}
                  </Typography>
                </Box>
              </Card>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Expertise;
