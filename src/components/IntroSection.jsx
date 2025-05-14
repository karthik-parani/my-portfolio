import { Box, Container, Typography } from "@mui/material";

import React from "react";

const IntroSection = () => {
  return (
    <Box
      //ref={ref}
      sx={{
        p: 2,
        mt: 4,
        // width: "50%",
        gap: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
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
        <Typography>Hi, my name is Karthik Parani.</Typography>
        <Typography variant="h2" fontWeight="medium">
          React.js Developer | Tech Enthusiast
        </Typography>
        <Typography fontWeight="light" paddingTop={4} maxWidth={'100%'}>
          Full Stack Development Trainee at NxtWave with ability to learn and
          collaborate in rapidly changing environments and compositions.Worked
          through 1000 + hours of bootcamp structure, learning JavaScript, Node
          JS, React Js, SQL, python. Eager to tackle web development / design
          challenges to achieve lasting impacts on user experience
        </Typography>
      </Box>
      <Box
        item
        xs={6}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src="https://res.cloudinary.com/lokesh-webdev/image/upload/v1745712350/samples/Picsart_25-04-27_05-33-24-573_c2zjrr.png"
          alt="Web Development Illustration"
          style={{ maxWidth: "50vw", height: "500px" }}
        />
      </Box>
    </Box>
  );
};

export default IntroSection;
