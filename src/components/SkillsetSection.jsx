import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import HtmlIcon from "@mui/icons-material/Html";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";
import Tooltip from "@mui/joy/Tooltip";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import JavascriptIcon from "@mui/icons-material/Javascript";
import AutoAwesomeMotionSharpIcon from "@mui/icons-material/AutoAwesomeMotionSharp";
import ViewWeekSharpIcon from "@mui/icons-material/ViewWeekSharp";
const SkillsetSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        padding={7}
        textAlign={"center"}
        variant="h4"
        fontFamily={"inherit"}
        fontWeight={"700"}
      >
        My Skillset
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          {/* gap replaces manual margins */}
          {/* Card 1 - Frontend */}
          <Card
            sx={{
              width: 400,
              borderRadius: 5,
              border: "1px solid #8ca0a3",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              paddingBottom: 2,
            }}
          >
            {/* Fixed width for consistency */}
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 5,

                  alignItems: "center",
                }}
              >
                <CodeIcon
                  sx={{
                    fontSize: 35,
                    margin: "5px",
                    align: "center",
                    color: "#5381f5",
                  }}
                />
                <Typography variant="h5" color="#5381f5" fontFamily={"fantasy"}>
                  Front-End Development
                </Typography>
              </Box>

              <List>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <HtmlIcon sx={{ margin: "10px", fontSize: 30 }} />
                    <Typography fontFamily={"inherit"}>HTML , CSS</Typography>
                  </Box>
                  <Typography padding={1}>95%</Typography>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <LinearProgress
                    variant="determinate"
                    value={85}
                    color="secondary"
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <JavascriptIcon sx={{ margin: "10px", fontSize: 30 }} />
                    <Typography fontFamily={"inherit"}>Javascript</Typography>
                  </Box>
                  <Typography padding={1}>75%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AutoAwesomeMotionSharpIcon
                      sx={{ margin: "10px", fontSize: 30 }}
                    />
                    <Typography fontFamily={"inherit"}>
                      Build Interactive UI with React.JS
                    </Typography>
                  </Box>
                  <Typography padding={1}> 85%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={85}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ViewWeekSharpIcon sx={{ margin: "10px", fontSize: 30 }} />
                    <Typography fontFamily={"inherit"}>Bootstrap</Typography>
                  </Box>
                  <Typography>95%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={85}
                  color="secondary"
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </List>
            </CardContent>
          </Card>

          {/* Card 2 - Backend */}
          <Card
            sx={{
              width: 400,
              height: 400,
              borderRadius: 3,

              border: "1px solid #8ca0a3",
              transition: "transform 0.9s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 3,
                }}
              >
                <StorageIcon
                  sx={{
                    fontSize: 35,
                    textAlign: "center",
                    margin: "5px",
                    color: "#45e0f7",
                  }}
                />
                <Typography
                  variant="h5"
                  align="center"
                  color="#45e0f7"
                  minWidth={"300px"}
                  fontFamily={"fantasy"}
                >
                  Back-End Development
                </Typography>
              </Box>

              <List>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CodeIcon sx={{ margin: "10px", fontSize: 30 }} />
                    <Typography fontFamily={"inherit"}>
                      Dynamic App with React.JS and SQL
                    </Typography>
                  </Box>
                  <Typography padding={1}>85%</Typography>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <LinearProgress
                    variant="determinate"
                    value={85}
                    color="primary"
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <JavascriptIcon sx={{ margin: "10px", fontSize: 30 }} />
                    <Typography fontFamily={"inherit"}>Node.js</Typography>
                  </Box>
                  <Typography padding={1}>75%</Typography>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    color="primary"
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />
                </Box>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsetSection;
