import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          width: "100%",
          bgcolor: "deepskyblue",
        }}>
        <Typography variant="body1">práctica React LemonCode 2026</Typography>
      </Box>
    </>
  );
};
