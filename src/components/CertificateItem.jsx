// import * as React from "react";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
// import { Box, Container } from "@mui/material";
// import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

// const CertificateItem = ({ imageurl, title, certificateUrl }) => {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const viewCertificate = () => {
//     window.open(certificateUrl, "_blank");
//   };

//   return (
//     <Box sx={{ m: 1 }}>
//       <React.Fragment>
//         <Box onClick={handleClickOpen}>
//           <img
//             src={imageurl}
//             alt={title}
//             style={{
//               borderRadius: "10px",
//               height: "auto",
//               width: "300px",
//               cursor: "pointer" /* Changes to a hand icon on hover */,
//             }}
//           />
//           <Typography
//             style={{
//               fontFamily: "inherit",
//               textAlign: "center",
//               maxWidth: "300px",
//             }}
//           >
//             {title}
//           </Typography>
//         </Box>

//         <BootstrapDialog
//           onClose={handleClose}
//           aria-labelledby="customized-dialog-title"
//           open={open}
//         >
//           <IconButton
//             aria-label="close"
//             onClick={handleClose}
//             sx={(theme) => ({
//               position: "absolute",
//               right: 8,
//               top: 8,
//               color: theme.palette.grey[500],
//             })}
//           >
//             <CloseIcon />
//           </IconButton>
//           <Box sx={{ m: 3 }}>
//             <img src={imageurl} height="100%" width="100%" />
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
//             <Button
//               variant="contained"
//               textAlign="center"
//               sx={{ m: 2, borderRadius: "10px" }}
//               onClick={viewCertificate}
//             >
//               <WorkspacePremiumIcon style={{ margin: "5px" }} />
//               View Certificate
//             </Button>
//           </Box>
//         </BootstrapDialog>
//       </React.Fragment>
//     </Box>
//   );
// };

// export default CertificateItem;
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

// Custom styled dialog with responsive padding adjustments
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  // Ensure the dialog paper itself handles max-width changes gracefully
  "& .MuiDialog-paper": {
    borderRadius: "16px",
    margin: theme.spacing(2),
    width: "100%",
  }
}));

const CertificateItem = ({ imageurl, title, certificateUrl }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const viewCertificate = () => {
    window.open(certificateUrl, "_blank");
  };

  return (
    <Box 
      sx={{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%", // Let the parent Grid decide the layout size
        p: 1
      }}
    >
      {/* Clickable Card Container */}
      <Box 
        onClick={handleClickOpen}
        sx={{
          width: "100%",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)", // Subtle hover micro-interaction
          }
        }}
      >
        <img
          src={imageurl}
          alt={title}
          style={{
            borderRadius: "12px",
            width: "100%",       // Critical: fluid response width
            maxWidth: "340px",   // Prevents it from getting too massive on huge rows
            height: "auto",      // Maintains exact original aspect ratio
            aspectRatio: "4/3",  // Keeps sizes uniform across different items
            objectFit: "cover",  // Clean cropping if thumbnails differ slightly
            boxShadow: "0px 4px 20px rgba(0,0,0,0.08)"
          }}
        />
        <Typography
          variant="body1"
          fontWeight="500"
          sx={{
            fontFamily: "inherit",
            textAlign: "center",
            mt: 1.5,
            px: 1,
            maxWidth: "340px",
            // Clean truncation rules if the title is extra long
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Pop-up Dialog Viewport */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md" // Controls how wide the popup expands on laptops/desktops
        fullWidth
      >
        {/* Floating Close Button */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 12,
            top: 12,
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark circle
            backdropFilter: "blur(4px)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
            zIndex: 1,
          })}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        {/* Modal Content Frame */}
        <Box 
          sx={{ 
            p: { xs: 2, sm: 4 }, // Adaptive layout padding
            pt: { xs: 5, sm: 5 }, // Extra top padding so image doesn't slide under close button
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "background.paper"
          }}
        >
          <img 
            src={imageurl} 
            alt={title}
            style={{ 
              width: "100%", 
              height: "auto", 
              maxHeight: "70vh", // Limits image vertical growth to prevent off-screen scrolling
              objectFit: "contain",
              borderRadius: "8px"
            }} 
          />
        </Box>

        {/* Action Button Section */}
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: "flex-end",
            p: 1.5,
            borderTop: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.default"
          }}
        >
          <Button
            variant="contained"
            onClick={viewCertificate}
            startIcon={<WorkspacePremiumIcon />}
            sx={{ 
              borderRadius: "8px",
              px: 3,
              py: 1,
              textTransform: "none",
              fontWeight: 600,
              width: { xs: "100%", sm: "auto" } // Stretches full-width on mobile phones
            }}
          >
            View Certificate
          </Button>
        </Box>
      </BootstrapDialog>
    </Box>
  );
};

export default CertificateItem;