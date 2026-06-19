import React from "react";
import { Box, Typography } from "@mui/material";

export const Header: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          bgcolor: "deepskyblue",
          height: "30px",
          padding: "10px",
        }}>
        <img src="/resources/home-logo.png" style={{ width: "40px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}>
          <Typography variant="body1">Gestión Pedidos</Typography>
        </Box>
      </Box>
    </>
  );
};
