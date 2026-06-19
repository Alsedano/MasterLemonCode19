import React from "react";
import { UserContainer } from "../user/user.container";
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
        <Typography variant="h5">Ejercicio Básico</Typography>
        <UserContainer />
      </Box>
    </>
  );
};
