import { Box, Button } from "@mui/material";
import React from "react";

export const HeaderDetallePedido: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button variant="contained" sx={{ color: "black" }}>
          Validar
        </Button>
        <Button variant="outlined" sx={{ color: "black" }}>
          Invalidar
        </Button>
      </Box>
    </>
  );
};
