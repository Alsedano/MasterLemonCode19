import { Typography } from "@mui/material";
import React from "react";

export const Error404: React.FC = () => {
  return (
    <>
      <Typography variant="h5" sx={{ fontSize: "4rem", color: "red" }}>
        OOOPs!! No members found
      </Typography>
    </>
  );
};
