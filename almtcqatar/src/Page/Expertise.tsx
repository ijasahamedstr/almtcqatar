// src/pages/Expertise.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, CardMedia, Box, Typography } from "@mui/material";
import { expertiseData } from "../Page/expertiseData";

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
          fontFamily: '"Montserrat", sans-serif',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            mb: 2,
            letterSpacing: 2,
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          Expertise
        </Typography>

        <Typography
          sx={{
            color: "white",
            mb: 4,
            fontFamily: '"Montserrat", sans-serif',
            lineHeight: 1.6,
          }}
        >
          Maison (MTC) is dedicated to the execution of high-end interiors
          projects and is proposing tailor-made expertise to match with
          the needs of our clients.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 2.5,
          }}
        >
          {expertiseData.map((item) => (
            <Link
              key={item.slug}
              to={`/Expertise/${item.slug}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.35s ease",
                  border: "2px solid rgba(212,193,155,0.3)", // soft gold outline
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 0 18px rgba(212,193,155,0.5)", // gold glow
                    borderColor: "#d4c19b", // strong gold border
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="350"
                  image={item.heroImage}
                  alt={item.title}
                  sx={{
                    objectFit: "cover",
                    filter: "brightness(50%)",
                    transition: "filter 0.3s ease, transform 0.3s ease",
                    "&:hover": {
                      filter: "brightness(65%)",
                      transform: "scale(1.03)",
                    },
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
                      letterSpacing: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Card>
            </Link>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Expertise;
