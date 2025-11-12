import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Guidance: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    inquiry: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    if (!form.name || !form.mobile || !form.email || !form.inquiry) {
      alert("Please fill all the fields before submitting.");
      return;
    }

    const message = `Hello! I Need Guidance.
    Name: ${form.name}
    Qatar Mobile: ${form.mobile}
    Email: ${form.email}
    Inquiry: ${form.inquiry}`;

    const phoneNumber = "+97477006456"; // WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setForm({
    name: "",
    mobile: "",
    email: "",
    inquiry: "",
  });

  };
  

  return (
    <Box component="section" sx={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Container maxWidth="xl" sx={{ pt: 10, pb: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "stretch",
            overflow: "hidden",
            borderRadius: "16px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          }}
        >
          {/* Left Column (Image + Heading) */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              flexBasis: "30%",
              position: "relative",
              overflow: "hidden",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0))",
                color: "#fff",
                textAlign: "center",
                p: 2,
                pt: 4,
                pb: 2,
                zIndex: 2,
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 600, fontSize: "2.8rem" }}>
                Need Guidance & Support?
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.85, fontSize: "1rem", lineHeight: 1.6 }}>
                Let's talk about your future. Fill out the form & we'll reach out to guide you.
              </Typography>
            </Box>
            <Box
              component="img"
              src="https://i.ibb.co/ynPqgtGS/form-image.png"
              alt="Brainiacs Campus"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
                background: "linear-gradient(135deg, #0a5397, #35b74b)",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
          </Box>

          {/* Right Column (Form) */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "70%" },
              backgroundColor: "#f7f9fb",
              borderRadius: { xs: "16px", md: "0 16px 16px 0" },
              p: { xs: 2, md: 3 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Mobile Heading */}
            <Box sx={{ display: { xs: "block", md: "none" }, textAlign: "center", mb: 3 }}>
              <Typography variant="h3" sx={{ fontWeight: 600, fontSize: "2rem",fontFamily: "'Montserrat', sans-serif", }}>
                Need Guidance & Support?
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.85, fontSize: "1rem", lineHeight: 1.6 ,fontFamily: "'Montserrat', sans-serif", }}>
                Let's talk about your future. Fill out the form & we'll reach out to guide you.
              </Typography>
            </Box>

            {/* Form */}
            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Row 1: Full Name */}
              <TextField
                fullWidth
                required
                name="name"
                label="Full Name"
                variant="outlined"
                size="medium"
                value={form.name}
                onChange={handleChange}
                InputProps={{ style: { fontFamily: "'Montserrat', sans-serif" } }}
                InputLabelProps={{ style: { fontFamily: "'Montserrat', sans-serif" } }}
              />

              {/* Row 2: Mobile & Email side by side */}
              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
                <TextField
                  sx={{ flex: 1 }}
                  required
                  name="mobile"
                  label="Qatar Mobile Number"
                  variant="outlined"
                  size="medium"
                  value={form.mobile}
                  onChange={handleChange}
                  InputProps={{ style: { fontFamily: "'Montserrat', sans-serif" } }}
                  InputLabelProps={{ style: { fontFamily: "'Montserrat', sans-serif" } }}
                />
                <TextField
                  sx={{ flex: 1 }}
                  required
                  name="email"
                  label="Email"
                  variant="outlined"
                  size="medium"
                  value={form.email}
                  onChange={handleChange}
                  InputProps={{ style: { fontFamily: "'Montserrat', sans-serif" } }}
                  InputLabelProps={{ style: { fontFamily: "'Montserrat', sans-serif" } }}
                />
              </Box>

              {/* Row 3: Text Area for Inquiry */}
              <TextField
                fullWidth
                required
                name="inquiry"
                label="Inquiry / Programme Details"
                variant="outlined"
                multiline
                rows={4}
                value={form.inquiry}
                onChange={handleChange}
                InputProps={{ style: { fontFamily: "'Montserrat', sans-serif" } }}
                InputLabelProps={{ style: { fontFamily: "'Montserrat', sans-serif" } }}
              />

              <Button
                variant="contained"
                sx={{
                  mt: 1,
                  backgroundColor: "#5b1c31",
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  px: 4,
                  py: 1,
                  alignSelf: { xs: "center", md: "flex-start" },
                  "&:hover": { backgroundColor: "#5b1c31" },
                  fontFamily: "'Montserrat', sans-serif",
                }}
                onClick={handleWhatsApp}
              >
                Contact via WhatsApp
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Guidance;
