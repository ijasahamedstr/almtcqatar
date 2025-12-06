import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

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
      sx={{ p: 0, m: 0, width: "100%", fontFamily: '"Montserrat", sans-serif' }}
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
                fontWeight: 700,
                color: "#222",
                mb: 1,
                fontSize: { xs: "1.8rem", md: "2rem" },
              }}
            >
              Al Mubthadieen Trading & Contracting (MTC)
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 600,
                color: "#343f52",
                mb: 3,
                fontSize: { xs: "0.95rem", md: "1.35rem" },
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
            <Box sx={{ mt: 6, width: "100%", pb: { xs: 2, md: 10 } }}>
              {steps.map((step, idx) => {
                const delayMs = 200 + idx * 220;
                return (
                  <Box key={step.label} sx={{ mb: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                        fontFamily: '"Montserrat", sans-serif',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Montserrat", sans-serif',
                          fontSize: { xs: "0.85rem", md: "1.05rem" },
                          fontWeight: 600,
                          background: "linear-gradient(90deg, #5b1c31, #8b2a46)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {step.label}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: '"Montserrat", sans-serif',
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "#444",
                        }}
                      >
                        <AnimatedNumber value={step.number} delay={delayMs} />%
                      </Typography>
                    </Box>

                    {/* Track */}
                    <Box
                      sx={{
                        width: "100%",
                        height: { xs: 18, md: 20 },
                        backgroundColor: "#e8e8ee",
                        borderRadius: "9999px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      {/* Fill */}
                      <Box
                        sx={{
                          height: "100%",
                          width: mounted ? `${step.number}%` : "0%",
                          transition: "width 1.2s cubic-bezier(.22,.9,.34,1)",
                          background:
                            "linear-gradient(90deg, #a800ff 0%, #ff2aa6 60%, #ff6a6a 100%)",
                          borderRadius: "9999px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          pr: { xs: 1, md: 1.5 },
                          fontFamily: '"Montserrat", sans-serif',
                        }}
                      >
                        <Box
                          sx={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: { xs: "0.75rem", md: "0.9rem" },
                            fontFamily: '"Montserrat", sans-serif',
                          }}
                        >
                          <AnimatedNumber value={step.number} delay={delayMs} />%
                        </Box>
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
