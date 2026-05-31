import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box } from "@mui/material";

export const UserComponent: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
      {name}
    </Box>
  );
};
