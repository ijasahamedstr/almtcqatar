// src/sections/ProjectsSlider.tsx

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

// ✅ import your projects data (shared)
import { projectsData } from "../Page/projectsData"; // <- important

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

// 🔹 Use first few projects from projectsData (or all if you want)
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
        <Box sx={{ ...fadeInUp(0.3) }}>
          <Swiper
            spaceBetween={24}
            slidesPerView={1.1}
            loop
            centeredSlides
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
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            modules={[Autoplay, Navigation]}
            style={{ paddingBottom: "20px" }}
          >
            {sliderProjects.map((project) => (
              <SwiperSlide key={project.slug}>
                {/* Clickable card going to /projects/:slug */}
                <Box
                  component="a"
                  href={`/projects/${project.slug}`}
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
                        "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.5s.ease, filter 0.5s ease",
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
                          "linear-gradient(to.top, rgba(0,0,0,0.9), rgba(0,0,0,0.35))",
                        transition:
                          "background 0.5s ease, opacity 0.5s ease",
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
          href="/projects" // ✅ go to Projects list
        >
          View All Projects
        </Button>
      </Container>
    </Box>
  );
};

export default ProjectsSlider;
