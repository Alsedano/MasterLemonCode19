import React from "react";
import { UserContainer } from "../user/user.container";
import { Box } from "@mui/material";

interface Props {
  title: string;
  search: React.ReactNode;
}

export const Header: React.FC<Props> = ({ title, search }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          bgcolor: "#1976d2",
        }}
      >
        <Box>
          <h2>{title}</h2>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {search}
          <UserContainer />
        </Box>
      </Box>
    </>
  );
};
