import React from "react";
import { UserContainer } from "../user/user.container";
import { Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { HeaderButtons } from "./components/headerButtons.component";

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
