// src/sections/ProjectsSlider.tsx
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { Link as RouterLink } from "react-router-dom";

import { projectsData } from "../Page/projectsData";

// 🔹 Simple fade-in-up animation helper
const fadeInUp = (delay = 0) => ({
  opacity: 0,
  transform: "translateY(20px)",
  animation: `fadeInUp 0.8s ease-out forwards`,
  animationDelay: `${delay}s`,
  "@keyframes fadeInUp": {
    "0%": { opacity: 0, transform: "translateY(20px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
});

// 🔹 Use first few projects from projectsData
const sliderProjects = projectsData.slice(0, 6);

const ProjectsSlider: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle gradient glow background */}
      <Box
        sx={{
          position: "absolute",
          inset: "-30%",
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 55%)",
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />

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
            ...fadeInUp(0),
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
            ...fadeInUp(0.15),
          }}
        >
          Each project is a new and exciting adventure, unique in its context.
          Our expertise brings the same enthusiasm and commitment to every
          creation.
        </Typography>

        {/* 🔹 Slider wrapper so arrows center on the cards, not the whole section */}
        <Box
          sx={{
            position: "relative",
            ...fadeInUp(0.3),
          }}
        >
          {/* Custom Navigation Arrows - centered to slider area */}
          <Box
            className="projects-prev"
            sx={{
              position: "absolute",
              left: { xs: -4, sm: -8, md: -24 },
              top: "50%",
              transform: "translateY(-50%)",
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.7)",
              display: { xs: "none", sm: "flex" }, // hide on very small mobile if you want
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 2,
              backdropFilter: "blur(6px)",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.15)",
                transform: "translateY(-50%) scale(1.05)",
              },
            }}
          >
            <Typography sx={{ fontSize: 24, lineHeight: 1 }}>‹</Typography>
          </Box>

          <Box
            className="projects-next"
            sx={{
              position: "absolute",
              right: { xs: -4, sm: -8, md: -24 },
              top: "50%",
              transform: "translateY(-50%)",
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.7)",
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 2,
              backdropFilter: "blur(6px)",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.15)",
                transform: "translateY(-50%) scale(1.05)",
              },
            }}
          >
            <Typography sx={{ fontSize: 24, lineHeight: 1 }}>›</Typography>
          </Box>

          {/* Slider */}
          <Swiper
            spaceBetween={24}
            slidesPerView={1}        // 🔹 mobile: one card fully visible
            centeredSlides           // 🔹 card centered on mobile
            loop
            grabCursor
            speed={800}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".projects-prev",
              nextEl: ".projects-next",
            }}
            breakpoints={{
              600: { slidesPerView: 2, centeredSlides: false },
              900: { slidesPerView: 3, centeredSlides: false },
              1200: { slidesPerView: 4, centeredSlides: false },
            }}
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: "20px" }}
          >
            {sliderProjects.map((project) => (
              <SwiperSlide key={project.slug}>
                <Box
                  component={RouterLink}
                  to={`/projects/${project.slug}`}
                  sx={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 260, sm: 320, md: 360 },
                      borderRadius: 2.5,
                      overflow: "hidden",
                      cursor: "pointer",
                      transform: "scale(0.96)",
                      transition:
                        "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.5s ease, filter 0.5s ease",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
                      "&:hover": {
                        transform: "scale(1.03) translateY(-8px)",
                        boxShadow: "0 22px 55px rgba(0,0,0,0.9)",
                        filter: "saturate(1.1)",
                      },
                    }}
                  >
                    {/* Image */}
                    <Box
                      component="img"
                      src={project.img}
                      alt={project.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "scale(1.02)",
                        transition: "transform 0.5s ease",
                        "&:hover": {
                          transform: "scale(1.06)",
                        },
                      }}
                    />

                    {/* Dark Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.35))",
                        transition:
                          "background 0.5s ease, opacity 0.5s.ease",
                      }}
                    />

                    {/* Border glow */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 2.5,
                        border: "1px solid rgba(255,255,255,0.08)",
                        pointerEvents: "none",
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
                          letterSpacing: 0.5,
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Bottom Button */}
        <Button
          variant="outlined"
          component={RouterLink}
          to="/projects"
          sx={{
            mt: 4,
            px: 4,
            py: 1.2,
            borderRadius: 0,
            borderColor: "#fff",
            color: "#fff",
            fontFamily: "'Montserrat', sans-serif",
            textTransform: "none",
            letterSpacing: 1,
            ...fadeInUp(0.45),
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
