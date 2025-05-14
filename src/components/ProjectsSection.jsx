import { Box, Typography, Link } from "@mui/material";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CalculateIcon from "@mui/icons-material/Calculate";
import SunnySnowingIcon from "@mui/icons-material/SunnySnowing";

const ProjectsSection = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="overline" fontWeight={"800"} fontSize={"20px"}>
          My INTERNSHIP Projects
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          margin: "0 auto",

          borderRadius: "10px",
          paddingBottom: "13px",
          gap: 2,
          marginBottom: "20px",
        }}
      >
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              color="block"
              variant="body2"
            >
              <Link
                sx={{ fontFamily: "Arial" }}
                target="_blank"
                underline="none"
                href="https://karhikfoodmunch.ccbp.tech"
              >
                https://karhikfoodmunch.ccbp.tech
              </Link>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ backgroundColor: "green" }}>
                <RestaurantIcon fontSize="large" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" fontFamily="inherit">
                Food Munch
              </Typography>
              <Typography fontFamily="inherit">
                Because Great Food Builds Great Energy
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
              <Link
                sx={{ fontFamily: "Arial" }}
                target="_blank"
                underline="none"
                href="https://karthikparani.ccbp.tech"
              >
                https://karthikparani.ccbp.tech
              </Link>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ backgroundColor: "gold" }}>
                <CalculateIcon fontSize="large" color="info" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" fontFamily="inherit">
                Tip Calculator
              </Typography>
              <Typography fontFamily="inherit">
                Make tipping simple and stress-free with our easy-to-use
                calculator!
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              color="block"
              variant="body2"
            >
              <Link
                sx={{ fontFamily: "Arial" }}
                target="_blank"
                underline="none"
                href="https://karthik060201.ccbp.tech"
              >
                https://karthik060201.ccbp.tech
              </Link>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ backgroundColor: "ButtonFace" }}>
                <TravelExploreIcon fontSize="large" color="warning" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" fontFamily="inherit">
                Wikipedia
              </Typography>
              <Typography fontFamily="inherit">
                The World's Knowledge, At Your Fingertips.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
              <Link
                sx={{ fontFamily: "Arial" }}
                target="_blank"
                underline="none"
                href="https://karthik02062001.ccbp.tech"
              >
                https://karthik02062001.ccbp.tech
              </Link>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ backgroundColor: "bisque" }}>
                <SunnySnowingIcon fontSize="large" color="error" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" fontFamily="inherit">
                Seasons Explorer
              </Typography>
              <Typography fontFamily="inherit">
                Experience Nature’s Cycle with Seasons Explorer
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
              <Link
                sx={{ fontFamily: "Arial" }}
                target="_blank"
                underline="none"
                href="https://mahimamuralarts.netlify.app"
              >
                https://mahimamuralarts.netlify.app
              </Link>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                style={{ backgroundColor: "bisque", borderRadius: "180px" }}
              >
                <img
                  src="https://res.cloudinary.com/dqnutkhli/image/upload/v1747136627/logo.b10b42c5f9f4f307d178_yomvlh.png"
                  style={{ height: "40px", width: "40px" }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" fontFamily="inherit">
                Mahimamuralarts
              </Typography>
              <Typography fontFamily="inherit">
                “Art is a language meant to speak the things that can't be
                said.” — John Demarco
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
