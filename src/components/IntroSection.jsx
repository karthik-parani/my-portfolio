// import { Box, Container, Typography } from "@mui/material";

// import React from "react";

// const IntroSection = () => {
//   return (
//     <Box
//       //ref={ref}
//       sx={{
//         p: 2,
//         mt: 4,
//         // width: "50%",
//         gap: 2,
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         textAlign: "center",
//         padding: "40px",
//       }}
//     >
//       <Box
//         item
//         xs={6}
//         md={6}
//         sx={{
//           textAlign: "center",
//           paddingLeft: { md: "40px" },
//           marginTop: { xs: "20px", md: 0 },
//         }}
//       >
//         <Typography>Hi, my name is Karthik Parani.</Typography>
//         <Typography variant="h2" fontWeight="medium">
//           React.js Developer | Tech Enthusiast
//         </Typography>
//         <Typography fontWeight="light" paddingTop={4} maxWidth={'100%'}>
//           Full Stack Development Trainee at NxtWave with ability to learn and
//           collaborate in rapidly changing environments and compositions.Worked
//           through 1000 + hours of bootcamp structure, learning JavaScript, Node
//           JS, React Js, SQL, python. Eager to tackle web development / design
//           challenges to achieve lasting impacts on user experience
//         </Typography>
//       </Box>
//       <Box
//         item
//         xs={6}
//         md={6}
//         sx={{ display: "flex", justifyContent: "center" }}
//       >
//         <img
//           src="https://res.cloudinary.com/lokesh-webdev/image/upload/v1745712350/samples/Picsart_25-04-27_05-33-24-573_c2zjrr.png"
//           alt="Web Development Illustration"
//           style={{ maxWidth: "50vw", height: "500px" }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default IntroSection;
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const IntroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)", // Fills screen nicely below navbar
        display: "flex",
        alignItems: "center",
        py: { xs: 4, md: 8 }, // Responsive top/bottom padding
        px: { xs: 2, sm: 4, md: 6 }, // Responsive left/right padding
      }}
    >
      <Grid 
        container 
        spacing={{ xs: 4, md: 6 }} 
        alignItems="center"
        // Text displays first on mobile, image displays below it
        direction={{ xs: "column", md: "row" }} 
      >
        
        {/* Left Side: Bio Text Content */}
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ 
            textAlign: { xs: "center", md: "left" }, // Center text on phones, left-align on desktop
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" }
          }}
        >
          <Typography 
            variant="h6" 
            color="primary" 
            fontWeight="600"
            sx={{ letterSpacing: "1px", mb: 1 }}
          >
            Hi, my name is Karthik Parani.
          </Typography>

          <Typography 
            variant="h2" 
            fontWeight="bold"
            sx={{ 
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.5rem" }, // Fluid text size scaling
              lineHeight: 1.2,
              mb: 3
            }}
          >
            React.js Developer | Tech Enthusiast
          </Typography>

          <Typography 
            variant="body1"
            fontWeight="light" 
            color="text.secondary"
            sx={{ 
              lineHeight: 1.7, 
              maxWidth: "540px",
              fontSize: { xs: "0.95rem", sm: "1.05rem" }
            }}
          >
            Full Stack Development Trainee at NxtWave with the ability to learn and
            collaborate in rapidly changing environments and compositions. Worked
            through 1000+ hours of bootcamp structure, learning JavaScript, Node
            JS, React Js, SQL, and Python. Eager to tackle web development / design
            challenges to achieve lasting impacts on user experience.
          </Typography>
        </Grid>

        {/* Right Side: Profile / Illustration Image */}
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ 
            display: "flex", 
            justifyContent: "center",
            width: "100%" 
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/lokesh-webdev/image/upload/v1745712350/samples/Picsart_25-04-27_05-33-24-573_c2zjrr.png"
            alt="Karthik Parani Portrait"
            sx={{ 
              width: "100%", 
              // Controls how large the image grows depending on screen sizes
              maxWidth: { xs: "280px", sm: "340px", md: "420px" }, 
              height: "auto", // Keeps image aspect-ratio intact perfectly
              borderRadius: "20px", // Optional: adds smooth curved borders to the photo asset
              boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
              objectFit: "cover"
            }}
          />
        </Grid>

      </Grid>
    </Box>
  );
};

export default IntroSection;