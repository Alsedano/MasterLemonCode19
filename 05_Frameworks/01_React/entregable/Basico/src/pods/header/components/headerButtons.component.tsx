import { Box, Button } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import rickSvgUrl from "./resources/rick.svg";
import { Link as RouterLink } from "react-router";
import { routes } from "@/router";

export const rickSvg = () => {};

export const HeaderButtons: React.FC = () => {
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
          startIcon={<GitHubIcon />}
          sx={{ color: "black" }}
          component={RouterLink}
          to={routes.list}
        >
          Members
        </Button>
        <Button
          variant="outlined"
          startIcon={
            <img src={rickSvgUrl} style={{ width: "24px", height: "24px" }} />
          }
          sx={{ color: "black" }}
          component={RouterLink}
          to={routes.listRM}
        >
          Members
        </Button>
      </Box>
    </>
  );
};
