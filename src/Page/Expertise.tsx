import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardMedia, Box, Typography } from "@mui/material";

const products1 = [
  { id: 1, imageUrl: "https://maisonrandf.com/wp-content/uploads/2023/04/Durat-Lobby-19.jpg.avif", link: "/Web-Media-Video", title: "Design & Project Management" },
  { id: 2, imageUrl: "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_customized-furniture-_1__1-1536x2048.jpg.webp", link: "/vr-videos", title: "Furniture" },
  { id: 3, imageUrl: "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_curtaining.jpg.avif", link: "/Web-Media-photo", title: "Curtaining & upholstery" },
  { id: 4, imageUrl: "https://maisonrandf.com/wp-content/uploads/2023/04/expertise_complex-joinery-work-_1__1-2048x1536.jpg.webp", link: "/Motion-graphics", title: "Joinery work" },
  { id: 5, imageUrl: "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_special-finishes-min-1147x2048.jpg.webp", link: "/AIVideos", title: "Special finishes" },
  { id: 6, imageUrl: "https://maisonrandf.com/wp-content/uploads/2023/04/Expertise_Straw-marquetry-min-1147x2048.jpg.webp", link: "/3D-Animation", title: "Straw marquetry" },
];

const Expertise: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: "#040404",
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "150px",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          paddingX: { xs: 2, sm: 3, md: 5 },
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", marginBottom: "20px", fontFamily: '"Montserrat", sans-serif' }}>Expertise</h1>
        <p style={{ color: "white", marginBottom: "30px", fontFamily: '"Montserrat", sans-serif' }}>
          Maison (MTC) is dedicated to the execution of high-end interior’s <br />
          project and is proposing tailor-made expertise to match with <br />
          the needs of our clients.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {products1.map((product) => (
            <Link key={product.id} to={product.link} style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="350"
                  image={product.imageUrl}
                  alt={product.title}
                  sx={{
                    objectFit: "cover",
                    filter: "brightness(50%)",
                    transition: "filter 0.3s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#fff",
                    textAlign: "center",
                    px: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Montserrat", sans-serif',
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
        </div>
      </Container>
    </section>
  );
};

export default Expertise;
