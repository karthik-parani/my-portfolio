// import { Box, Typography, Link } from "@mui/material";
// import React from "react";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import TravelExploreIcon from "@mui/icons-material/TravelExplore";
// import RestaurantIcon from "@mui/icons-material/Restaurant";
// import CalculateIcon from "@mui/icons-material/Calculate";
// import SunnySnowingIcon from "@mui/icons-material/SunnySnowing";

// const ProjectsSection = () => {
//   return (
//     <Box
//       sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="overline" fontWeight={"800"} fontSize={"20px"}>
//           My INTERNSHIP Projects
//         </Typography>
//       </Box>
//       <Box
//         sx={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",

//           margin: "0 auto",

//           borderRadius: "10px",
//           paddingBottom: "13px",
//           gap: 2,
//           marginBottom: "20px",
//         }}
//       >
//         <Timeline position="alternate">
//           <TimelineItem>
//             <TimelineOppositeContent
//               sx={{ m: "auto 0" }}
//               align="right"
//               color="block"
//               variant="body2"
//             >
//               <Link
//                 sx={{ fontFamily: "Arial" }}
//                 target="_blank"
//                 underline="none"
//                 href="https://karhikfoodmunch.ccbp.tech"
//               >
//                 https://karhikfoodmunch.ccbp.tech
//               </Link>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot style={{ backgroundColor: "green" }}>
//                 <RestaurantIcon fontSize="large" />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6" component="span" fontFamily="inherit">
//                 Food Munch
//               </Typography>
//               <Typography fontFamily="inherit">
//                 Because Great Food Builds Great Energy
//               </Typography>
//             </TimelineContent>
//           </TimelineItem>
//           <TimelineItem>
//             <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
//               <Link
//                 sx={{ fontFamily: "Arial" }}
//                 target="_blank"
//                 underline="none"
//                 href="https://karthikparani.ccbp.tech"
//               >
//                 https://karthikparani.ccbp.tech
//               </Link>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot style={{ backgroundColor: "gold" }}>
//                 <CalculateIcon fontSize="large" color="info" />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6" component="span" fontFamily="inherit">
//                 Tip Calculator
//               </Typography>
//               <Typography fontFamily="inherit">
//                 Make tipping simple and stress-free with our easy-to-use
//                 calculator!
//               </Typography>
//             </TimelineContent>
//           </TimelineItem>

//           <TimelineItem>
//             <TimelineOppositeContent
//               sx={{ m: "auto 0" }}
//               align="right"
//               color="block"
//               variant="body2"
//             >
//               <Link
//                 sx={{ fontFamily: "Arial" }}
//                 target="_blank"
//                 underline="none"
//                 href="https://karthik060201.ccbp.tech"
//               >
//                 https://karthik060201.ccbp.tech
//               </Link>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot style={{ backgroundColor: "ButtonFace" }}>
//                 <TravelExploreIcon fontSize="large" color="warning" />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6" component="span" fontFamily="inherit">
//                 Wikipedia
//               </Typography>
//               <Typography fontFamily="inherit">
//                 The World's Knowledge, At Your Fingertips.
//               </Typography>
//             </TimelineContent>
//           </TimelineItem>
//           <TimelineItem>
//             <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
//               <Link
//                 sx={{ fontFamily: "Arial" }}
//                 target="_blank"
//                 underline="none"
//                 href="https://karthik02062001.ccbp.tech"
//               >
//                 https://karthik02062001.ccbp.tech
//               </Link>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot style={{ backgroundColor: "bisque" }}>
//                 <SunnySnowingIcon fontSize="large" color="error" />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6" component="span" fontFamily="inherit">
//                 Seasons Explorer
//               </Typography>
//               <Typography fontFamily="inherit">
//                 Experience Nature’s Cycle with Seasons Explorer
//               </Typography>
//             </TimelineContent>
//           </TimelineItem>

//           <TimelineItem>
//             <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
//               <Link
//                 sx={{ fontFamily: "Arial" }}
//                 target="_blank"
//                 underline="none"
//                 href="https://mahimamuralarts.netlify.app"
//               >
//                 https://mahimamuralarts.netlify.app
//               </Link>
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot
//                 style={{ backgroundColor: "bisque", borderRadius: "180px" }}
//               >
//                 <img
//                   src="https://res.cloudinary.com/dqnutkhli/image/upload/v1747136627/logo.b10b42c5f9f4f307d178_yomvlh.png"
//                   style={{ height: "40px", width: "40px" }}
//                 />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6" component="span" fontFamily="inherit">
//                 Mahimamuralarts
//               </Typography>
//               <Typography fontFamily="inherit">
//                 “Art is a language meant to speak the things that can't be
//                 said.” — John Demarco
//               </Typography>
//             </TimelineContent>
//           </TimelineItem>
//         </Timeline>
//       </Box>
//     </Box>
//   );
// };

// export default ProjectsSection;
import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CalculateIcon from "@mui/icons-material/Calculate";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SunnySnowingIcon from "@mui/icons-material/SunnySnowing";

const ProjectsSection = () => {
  // Centralized project data array for cleaner code architecture
  const internshipProjects = [
    {
      title: "Food Munch",
      description: "Because Great Food Builds Great Energy. Discover recipes, cuisines, and structured food menus seamlessly.",
      url: "https://karhikfoodmunch.ccbp.tech",
      tags: ["HTML", "CSS", "Bootstrap"],
      icon: <RestaurantIcon sx={{ fontSize: 32, color: "success.main" }} />,
      bgColor: "rgba(46, 125, 50, 0.08)"
    },
    {
      title: "Tip Calculator",
      description: "Make tipping simple and stress-free with an automated, easy-to-use breakdown calculator for teams.",
      url: "https://karthikparani.ccbp.tech",
      tags: ["JavaScript", "Logic", "UI/UX"],
      icon: <CalculateIcon sx={{ fontSize: 32, color: "warning.main" }} />,
      bgColor: "rgba(237, 108, 2, 0.08)"
    },
    {
      title: "Wikipedia Explorer",
      description: "The World's Knowledge, At Your Fingertips. Custom integration pulling global real-time search queries.",
      url: "https://karthik060201.ccbp.tech",
      tags: ["API Integration", "JS", "Dynamic Fetch"],
      icon: <TravelExploreIcon sx={{ fontSize: 32, color: "info.main" }} />,
      bgColor: "rgba(2, 136, 209, 0.08)"
    },
    {
      title: "Seasons Explorer",
      description: "Experience Nature’s Cycle with Seasons Explorer. Highlighting dynamic interface transformations based on criteria.",
      url: "https://karthik02062001.ccbp.tech",
      tags: ["Dynamic UI", "State Control", "CSS"],
      icon: <SunnySnowingIcon sx={{ fontSize: 32, color: "error.main" }} />,
      bgColor: "rgba(211, 47, 47, 0.08)"
    },
    {
      title: "Mahimamuralarts",
      description: "“Art is a language meant to speak the things that can't be said.” An elegant visual layout portfolio gallery for custom artwork.",
      url: "https://mahimamuralarts.netlify.app",
      tags: ["React", "Netlify", "Creative Display"],
      avatarImg: "https://res.cloudinary.com/dqnutkhli/image/upload/v1747136627/logo.b10b42c5f9f4f307d178_yomvlh.png",
      bgColor: "rgba(156, 39, 176, 0.08)"
    }
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, sm: 4, md: 6 } }}>
      
      {/* Dynamic Header */}
      <Box sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
        <Typography 
          variant="overline" 
          fontWeight="900" 
          color="primary"
          sx={{ fontSize: "14px", letterSpacing: "2px" }}
        >
          Portfolio Showcases
        </Typography>
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          sx={{ fontSize: { xs: "1.75rem", md: "2.5rem" }, mt: 1 }}
        >
          My Internship Projects
        </Typography>
      </Box>

      {/* Fluid Grid Layout System */}
      <Grid container spacing={3} justifyContent="center">
        {internshipProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card 
              elevation={0}
              sx={{ 
                width: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                border: "1px solid",
                borderColor: "divider",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
                  borderColor: "primary.light"
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {/* Upper Row: Dynamic Icon Badge Container */}
                <Box 
                  sx={{ 
                    width: 56, 
                    height: 56, 
                    borderRadius: "12px", 
                    backgroundColor: project.bgColor,
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    mb: 2.5
                  }}
                >
                  {project.avatarImg ? (
                    <Box 
                      component="img" 
                      src={project.avatarImg} 
                      alt="logo" 
                      sx={{ width: 40, height: 40, borderRadius: "50%" }} 
                    />
                  ) : (
                    project.icon
                  )}
                </Box>

                {/* Typography Block Header */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  {project.description}
                </Typography>

                {/* Responsive Filter Badge Chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.tags.map((tag, i) => (
                    <Chip 
                      label={tag} 
                      key={i} 
                      size="small" 
                      variant="outlined"
                      sx={{ borderRadius: "6px", fontSize: "11px", fontWeight: 500 }}
                    />
                  ))}
                </Box>
              </CardContent>

              {/* Action Toolbar Link Execution */}
              <CardActions sx={{ p: 2, pt: 0, justifyContent: "flex-end" }}>
                <Button 
                  size="small" 
                  variant="text" 
                  href={project.url}
                  target="_blank"
                  endIcon={<LaunchIcon sx={{ fontSize: "14px !important" }} />}
                  sx={{ textTransform: "none", fontWeight: 600 }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;