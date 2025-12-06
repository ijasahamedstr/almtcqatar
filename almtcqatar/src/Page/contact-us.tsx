import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";
import React from "react";
// Import Icons for the Contact Details to replace emojis for better consistency
import EmailIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

// Helper component for the Contact details row
interface ContactDetailProps {
  icon: React.ReactElement; // Change icon type to ReactElement for MUI Icons
  label: string;
  value: string;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ icon, label, value }) => (
  <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
    <Box sx={{ color: "#0F172A", mr: 1.5, display: 'flex', alignItems: 'center' }}>
      {icon} {/* Render the MUI Icon component */}
    </Box>
    <Typography
      variant="body2"
      sx={{
        color: "#4B5563",
        fontSize: { xs: "14px", sm: "15px" },
        display: "flex",
        alignItems: "center",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {label}: <strong style={{ marginLeft: '4px', color: '#0F172A' }}>{value}</strong>
    </Typography>
  </Box>
);

// Helper function to create the section title with the bottom line
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="h5"
    component="h2"
    sx={{
      color: "#0F172A",
      fontWeight: 700,
      fontSize: { xs: "22px", sm: "28px" }, // More responsive font size
      mb: 1,
      borderBottom: "3px solid #E5E7EB",
      display: "inline-block",
      fontFamily: "'Montserrat', sans-serif",
      pb: 0.5,
      // Add a slight margin on small screens to prevent title from touching edge
      px: { xs: 0.5, md: 0 }, 
    }}
  >
    {children}
  </Typography>
);

const Contactus: React.FC = () => {
  // WhatsApp form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    // Safely retrieve form values
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const mobile = (form.elements.namedItem("mobile") as HTMLInputElement)?.value || "";
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLInputElement)?.value || "";

    // The current WhatsApp number in the code is a Sri Lankan number (+94), 
    // but the company is in QATAR (QARAR section). I will use the one from the handler.
    const whatsappNumber = "+94768696704"; 
    
    // Construct the message with URL-encoded line breaks (%0A)
    const whatsappMessage = `Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMobile: ${encodeURIComponent(mobile)}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(message)}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* 📍 Google Map Section */}
      <Box
        sx={{
          width: "100%",
          // Set a height that is still visible on mobile
          height: { xs: "300px", md: "500px" }, 
          overflow: "hidden",
        }}
      >
        {/* IMPORTANT: The iframe src is currently an invalid placeholder and MUST be replaced 
            with a valid Google Maps embed link for the location. */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11540.909987823437!2d51.48831968853685!3d25.2854359747585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c478d10619a9%3A0x608e9a111a68e826!2sDoha%2C%20Qatar!5e0!3m2!1sen!2ssa!4v1678284567890"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
      </Box>
        

      {/* Main Content Section */}
      <Container
        maxWidth="lg"
        // Add padding on the x-axis for small screens inside the container
        sx={{ my: 5, px: { xs: 2, sm: 3 }, fontFamily: "'Montserrat', sans-serif" }} 
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 8 },
          }}
        >
          {/* Left Column: Welcome + Contact Info */}
          <Box sx={{ flexBasis: "50%", pr: { md: 4 } }}>
            <SectionTitle>WELCOME TO Al Mubthadieen </SectionTitle>
            <Typography
              variant="body1"
              sx={{
                color: "#4B5563",
                fontSize: { xs: "14px", sm: "15px" }, // Responsive font size
                lineHeight: 1.8,
                mt: 3,
                mb: 5,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              **Al Mubthadieen Trading & Contracting (MTC)** is a prestigious interior decoration company distinguished by refined craftsmanship, artistic excellence, and collaboration with some of the most renowned interior architects in the region.
            </Typography>

            {/* Contact Details */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6" // Use h6 for slightly larger text than body2
                sx={{
                  color: "#0F172A",
                  fontWeight: 700,
                  fontSize: { xs: "16px", sm: "18px" }, // More prominent header
                  mb: 2,
                  fontFamily: "'Montserrat', sans-serif"
                }}
              >
                QARAR - Contact Information
              </Typography>
            </Box>
            
            {/* Replaced Emojis with MUI Icons for better visual consistency */}
            <ContactDetail 
              icon={<EmailIcon fontSize="small" />} 
              label="Email" 
              value="info@almtcqatar.com | almtcqatar@gmail.com" 
            />
            <ContactDetail 
              icon={<WhatsAppIcon fontSize="small" />} 
              label="Whatsapp" 
              value="(+974) 502260200" 
            />
            <ContactDetail 
              icon={<PhoneIphoneIcon fontSize="small" />} 
              label="Mobile" 
              value="(+94) 672260200" 
            />
          </Box>

          {/* Right Column: Contact Form */}
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              handleSubmit(e);
              // Clear form after submission
              (e.currentTarget as HTMLFormElement).reset();
            }}
            sx={{
              flexBasis: "50%",
              // Ensure consistent padding on all devices
              p: { xs: 3, sm: 4 }, 
              border: "1px solid #F8FAFC",
              borderRadius: 2,
              fontFamily: "'Montserrat', sans-serif",
              backgroundColor: "#fff",
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // Subtle shadow
            }}
          >
            <SectionTitle>SEND YOUR COMMENTS</SectionTitle>
            
            {/* Responsive TextFields */}
            <TextField
              fullWidth
              label="Your Name (required)"
              name="name"
              variant="standard"
              margin="normal"
              required
              sx={{ mb: 3 }}
              InputProps={{ style: { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' } }}
              InputLabelProps={{ style: { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' } }}
            />
            <TextField
              fullWidth
              label="Your Email (required)"
              name="email"
              type="email"
              variant="standard"
              margin="normal"
              required
              sx={{ mb: 3 }}
              InputProps={{ style: { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' } }}
              InputLabelProps={{ style: { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' } }}
            />
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobile"
              type="tel"
              variant="standard"
              margin="normal"
              sx={{ mb: 3 }}
              InputProps={{ style: { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' } }}
              InputLabelProps={{ style: { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' } }}
            />
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              variant="standard"
              margin="normal"
              sx={{ mb: 3 }}
              InputProps={{ style: { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' } }}
              InputLabelProps={{ style: { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' } }}
            />
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              variant="standard"
              margin="normal"
              multiline
              rows={4}
              sx={{ 
                mb: 4,
                // Ensure text area uses 'standard' variant's styling correctly
                '& .MuiInput-root:before': { borderBottom: '1px solid #9CA3AF' }, // default bottom border
                '& .MuiInput-root:hover:not(.Mui-disabled):before': { borderBottom: '2px solid #0F172A' },
                '& .MuiInput-root:after': { borderBottom: '2px solid #0F172A' }, // focused bottom border
                fontFamily: "'Montserrat', sans-serif",
              }}
              InputProps={{ style: { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' } }}
              InputLabelProps={{ style: { fontFamily: "'Montserrat', sans-serif", fontSize: '16px' } }}
            />

            <Button
              type="submit"
              variant="contained"
              // The button should be full width on small screens and min-width on large screens
              fullWidth={window.innerWidth < 600} 
              sx={{
                backgroundColor: 'black',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#333',
                },
                minWidth: { xs: '100%', sm: '250px' }, // Full width on xs, fixed width on sm+
                padding: '12px 30px',
                fontSize: '18px',
                borderRadius: '4px', // Slight rounding for modern feel
                textTransform: 'none',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
              }}
            >
              SEND
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Contactus;