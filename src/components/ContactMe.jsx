import { Box, Button, Typography, Link } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ResumePDF from "../assets/Karthik_FrontEnd.Resume.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import CallIcon from "@mui/icons-material/Call";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
const ContactSection = () => {
  return (
    <Box
      container
      // ref={ref}
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
        padding: "40px",
        flexDirection: "row", // Ensure horizontal arrangement
      }}
    >
      {/* Left Half - Image */}
      <Box
        item
        xs={6}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src="https://portfolio-main-liart-two.vercel.app/_next/image?url=%2Fimages%2Flogo1.png&w=384&q=100"
          alt="Web Development Illustration"
          style={{ maxWidth: "50vw", height: "auto" }}
        />
      </Box>

      {/* Right Half - Content */}
      <Box
        item
        xs={6}
        md={6}
        sx={{
          textAlign: "center",
          paddingLeft: { md: "40px" },
          marginTop: { xs: "20px", md: 0 },
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Get in touch with me
        </Typography>
        <Typography variant="body1" paragraph>
          Hi, I'm Karthik Parani, a passionate Front-end Developer with a strong
          foundation in HTML, CSS, JavaScript, and React.js. As a fresher, I’m
          highly motivated to apply my knowledge and skills in a professional
          setting. I’m eager to learn from experienced developers, contribute to
          exciting projects, and grow in the tech industry. I’ve worked on
          several personal and academic projects that demonstrate my ability to
          build responsive and user-friendly interfaces. I'm always open to
          feedback and looking for opportunities to improve and innovate. If
          you're looking for a dedicated and enthusiastic developer to join your
          team — let's connect!
        </Typography>
        <Box sx={{ mt: 3, pb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            href="mailto:karthikparani2001@gmail.com"
            sx={{
              "&:hover": { transform: "scale(1.05)" },
              transition: "all 0.3s ease",
              boxShadow: [7],
            }}
          >
            <MailIcon sx={{ marginRight: "3px" }} />
            Contact
          </Button>

          <Button
            style={{ margin: "15px" }}
            variant="contained"
            href={ResumePDF}
            download="Karthik_FrontEnd.Resume.pdf"
            color="success"
            sx={{
              "&:hover": { transform: "scale(1.05)" },
              transition: "all 0.3s ease",
            }}
          >
            <AttachEmailIcon style={{ marginRight: "4px" }} />
            Hire me
          </Button>

          <Box sx={{ mt: 4, textAlign: "left", textAlignLast: "initial" }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              KARTHIK PARANI
            </Typography>
            <Typography variant="body2" gutterBottom>
              Front-end Developer (Fresher) — India
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CallIcon color="success" sx={{ margin: "4px" }} />
              <Typography variant="body2" gutterBottom>
                +91 6303714692
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GoogleIcon
                color="error"
                sx={{ margin: "4px", marginLeft: "3px", marginBottom: "5px" }}
              />
              <Typography variant="body2" gutterBottom>
                karthikparani2001@gmail.com
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LinkedInIcon color="primary" sx={{ margin: "4px" }} />

              <Link
                sx={{ fontFamily: "Arial" }}
                target="_blank"
                underline="none"
                href="https://linkedin.com/in/karthik-parani-b68017275"
              >
                LinkedIn Profile
              </Link>
            </Box>

            {/* You can add your summary content here if you want it in this section */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
