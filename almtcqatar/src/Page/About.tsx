import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

const brandColor = "#5b1c31";

type Step = { number: number; label: string };

/** AnimatedNumber: smooth count from 0 -> value with optional delay */
const AnimatedNumber: React.FC<{ value: number; delay?: number; duration?: number }> = ({
  value,
  delay = 0,
  duration = 1000,
}) => {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // EaseOutCubic
      setDisplay(Math.round(value * eased));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    const timeout = window.setTimeout(() => {
      rafRef.current = requestAnimationFrame(step);
    }, Math.max(0, delay));

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, delay, duration]);

  return <>{display}</>;
};

const About: React.FC = () => {
  const steps: Step[] = [
    { number: 55, label: "Project" },
    { number: 75, label: "Customer" },
    { number: 90, label: "Complete" },
  ];

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        p: 0,
        mt: { xs: "50px", md: "100px" }, // responsive top margin
        width: "100%",
        fontFamily: '"Montserrat", sans-serif',
      }}
    >

      <Box
        sx={{
          width: "100%",
          backgroundColor: { xs: "#FAFAFA", md: "transparent" },
          backgroundImage: {
            xs: "none",
            md: "url('https://i.ibb.co/mFrQgC9y/Gemini-Generated-Image-7ror8n7ror8n7ror-1.webp')",
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            px: { xs: 4, md: 10, lg: 0 },
            pt: { xs: 6, md: 12, lg: 12 },
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 60%" }, pl: { lg: "350px" } }}>
             <Typography
              variant="h3"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 800,
                color: brandColor,
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                lineHeight: 1.2,
              }}
            >
              Al Mubthadieen <br />
              <span style={{ color: "#222" }}>Trading & Contracting</span>
            </Typography>

              <Typography
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 600,
                color: "#555",
                mb: 4,
                fontSize: { xs: "1rem", md: "1.2rem" },
                letterSpacing: 0.5,
                borderLeft: `4px solid ${brandColor}`,
                pl: 2
              }}
            >
              Where Craftsmanship Meets Creativity in Timeless Interiors
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                mb: 2,
                color: "#444",
                fontSize: { xs: "0.85rem", md: "1.1rem" },
              }}
            >
              Al Mubthadieen Trading & Contracting (MTC) is a prestigious interior decoration company
              known for refined craftsmanship, artistic excellence, and collaboration with world-class architects.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                color: "#444",
                fontSize: { xs: "0.85rem", md: "1.1rem" },
              }}
            >
              With years of experience and passion for perfection, MTC has become synonymous with
              quality, creativity, and timeless elegance.
            </Typography>

            {/* Progress Section */}
            <Box sx={{ mt: 6, width: "100%", pb: { xs: 2, md: 10 }, px: 2 }}>
            {steps.map((step, idx) => {
              // Staggered delay for each bar
              const delayMs = 200 + idx * 220;
              
              return (
                <Box key={step.label} sx={{ mb: 5 }}>
                  {/* Label and Percentage Header */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      mb: 1.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        color: "#2d3436",
                        textTransform: "uppercase",
                      }}
                    >
                      {step.label}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        background: "linear-gradient(135deg, #6366f1 0%, #d946ef 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <AnimatedNumber value={step.number} delay={delayMs} />%
                    </Typography>
                  </Box>

                  {/* Modern Track Design */}
                  <Box
                    sx={{
                      width: "100%",
                      height: 12,
                      backgroundColor: "#f0f0f5",
                      borderRadius: "6px",
                      position: "relative",
                      // Subtle inner shadow for depth
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                      overflow: "hidden",
                    }}
                  >
                    {/* Animated Fill Layer */}
                    <Box
                      sx={{
                        height: "100%",
                        width: mounted ? `${step.number}%` : "0%",
                        // Custom cubic-bezier for a "premium" elastic feel
                        transition: `width 1.8s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                        transitionDelay: `${idx * 100}ms`,
                        background: "linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
                        borderRadius: "6px",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          // Subtle shine effect
                          background: "linear-gradient(transparent, rgba(255,255,255,0.15), transparent)",
                        }
                      }}
                    >
                      {/* Optional: Internal small glow dot at the tip */}
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#fff",
                          mr: 0.8,
                          boxShadow: "0 0 10px #fff",
                          opacity: 0.8
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
          </Box>

          {/* RIGHT SIDE (Empty) */}
          <Box sx={{ flex: { xs: "1", md: "0 0 40%" } }} />
        </Box>
      </Box>
    </Container>
  );
};

export default About;
