import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
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
    <Box sx={{ m: 1 }}>
      <React.Fragment>
        <Box onClick={handleClickOpen}>
          <img
            src={imageurl}
            alt={title}
            style={{
              borderRadius: "10px",
              height: "auto",
              width: "300px",
              cursor: "pointer" /* Changes to a hand icon on hover */,
            }}
          />
          <Typography
            style={{
              fontFamily: "inherit",
              textAlign: "center",
              maxWidth: "300px",
            }}
          >
            {title}
          </Typography>
        </Box>

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ m: 3 }}>
            <img src={imageurl} height="100%" width="100%" />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              textAlign="center"
              sx={{ m: 2, borderRadius: "10px" }}
              onClick={viewCertificate}
            >
              <WorkspacePremiumIcon style={{ margin: "5px" }} />
              View Certificate
            </Button>
          </Box>
        </BootstrapDialog>
      </React.Fragment>
    </Box>
  );
};

export default CertificateItem;
