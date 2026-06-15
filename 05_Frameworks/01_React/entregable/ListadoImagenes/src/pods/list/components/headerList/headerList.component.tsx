import { switchRoutes } from "@/router";
import { Box, Button } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router";

export const HeaderList: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          variant="outlined"
          sx={{ color: "black" }}
          component={RouterLink}
          to={switchRoutes.listKitties}
        >
          Kitties
        </Button>
        <Button
          variant="outlined"
          sx={{ color: "black" }}
          component={RouterLink}
          to={switchRoutes.listPuppies}
        >
          Puppies
        </Button>
      </Box>
    </>
  );
};
