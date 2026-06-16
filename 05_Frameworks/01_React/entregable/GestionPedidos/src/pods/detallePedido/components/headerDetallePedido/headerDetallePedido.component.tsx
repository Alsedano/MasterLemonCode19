import { Box, Button } from "@mui/material";
import React from "react";

interface Props {
  validateOrderLines;
  inValidateOrderLines;
}

export const HeaderDetallePedido: React.FC<Props> = ({
  validateOrderLines,
  inValidateOrderLines,
}) => {
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
        <Button
          variant="contained"
          sx={{ color: "black" }}
          onClick={validateOrderLines}
        >
          Validar
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "black" }}
          onClick={inValidateOrderLines}
        >
          Invalidar
        </Button>
      </Box>
    </>
  );
};
