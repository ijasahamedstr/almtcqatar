import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// ✅ Swiper CSS (only this is needed)
import "swiper/css";

// ✅ Your data
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

const ProjectsSlider: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        py: { xs: 6, md: 10 },
        position: "relative",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* Heading / Description */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            mb: 2,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Projects & Creations
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 720,
            mx: "auto",
            mb: 6,
            fontFamily: "'Montserrat', sans-serif",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Each project is a new and exciting adventure, unique in its context.
          Our expertise brings the same enthusiasm and commitment to every
          creation.
        </Typography>

        {/* Custom Navigation Arrows */}
        <Box
          className="projects-prev"
          sx={{
            position: "absolute",
            left: { xs: 8, md: -24 },
            top: "50%",
            transform: "translateY(-50%)",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 2,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
            },
          }}
        >
          <Typography sx={{ fontSize: 24, lineHeight: 1 }}>‹</Typography>
        </Box>

        <Box
          className="projects-next"
          sx={{
            position: "absolute",
            right: { xs: 8, md: -24 },
            top: "50%",
            transform: "translateY(-50%)",
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 2,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)",
            },
          }}
        >
          <Typography sx={{ fontSize: 24, lineHeight: 1 }}>›</Typography>
        </Box>

        {/* Slider */}
        <Swiper
          spaceBetween={24}
          slidesPerView={1.1}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".projects-prev",
            nextEl: ".projects-next",
          }}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          modules={[Autoplay, Navigation]}
          style={{ paddingBottom: "20px" }}
        >
          {products1.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Clickable card */}
              <Box
                component="a"
                href={item.link}
                sx={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 260, sm: 320, md: 360 },
                    borderRadius: 2,
                    overflow: "hidden",
                    cursor: "pointer",
                    transform: "scale(0.98)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: 6,
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    component="img"
                    src={item.imageUrl}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Dark Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.35))",
                    }}
                  />

                  {/* Text Title */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 24,
                      left: 24,
                      right: 24,
                      textAlign: "left",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 700,
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Button */}
        <Button
          variant="outlined"
          sx={{
            mt: 4,
            px: 4,
            py: 1.2,
            borderRadius: 0,
            borderColor: "#fff",
            color: "#fff",
            fontFamily: "'Montserrat', sans-serif",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
              borderColor: "#fff",
            },
          }}
        >
          View All Projects
        </Button>
      </Container>
    </Box>
  );
};

export default ProjectsSlider;
