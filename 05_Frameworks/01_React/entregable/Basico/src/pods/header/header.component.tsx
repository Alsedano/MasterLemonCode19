import React from "react";
import { UserContainer } from "../user/user.container";
import { Box } from "@mui/material";

interface Props {
  title: React.ReactNode;
  navButtons: React.ReactNode;
  search: React.ReactNode;
}

export const Header: React.FC<Props> = ({ title, navButtons, search }) => {
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
        }}
      >
        {navButtons}
        {title}
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
