import React from "react";
import { CERTIFICATE_DETAILS_CONSTANTS } from "../constants/constants";
import CertificateItem from "./CertificateItem";
import { Grid } from "@mui/material";

function Achievements() {
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {CERTIFICATE_DETAILS_CONSTANTS.map((cert, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <CertificateItem
              imageurl={cert.imageurl}
              title={cert.title}
              certificateUrl={cert.certificateUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Achievements;
