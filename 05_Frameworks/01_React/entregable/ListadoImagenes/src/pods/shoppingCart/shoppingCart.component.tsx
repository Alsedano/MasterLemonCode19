import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { PictureInfo } from "../list";

interface Props {
  items: PictureInfo[];
  handleDeleteItem: (id: number) => void;
  handleDeleteAllItems: () => void;
}

export const ShoppingCart: React.FC<Props> = ({
  items,
  handleDeleteItem,
  handleDeleteAllItems,
}) => {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Box
        sx={[
          {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "aliceblue",
          },
          open
            ? {
                /*  height: "100px", */
              }
            : {
                width: "50px",
              },
        ]}
      >
        <ListItemButton
          alignItems="flex-start"
          sx={[
            open
              ? {
                  flexDirection: "row",
                  justifyContent: "center",
                  height: "20px",
                }
              : {
                  flexDirection: "column",
                  justifyContent: "center",
                },
          ]}
          onClick={() => setOpen(!open)}
        >
          <ListItem
            sx={[
              open
                ? {
                    flexDirection: "row",
                  }
                : {
                    flexDirection: "column",
                    width: "10px",
                  },
            ]}
          >
            <ShoppingCartIcon />
            <ListItemText primary="Cart" />
          </ListItem>
          <KeyboardArrowDown
            sx={[
              {
                mr: -1,

                transition: "0.2s",
              },
              open
                ? {
                    transform: "rotate(-180deg)",
                  }
                : {
                    transform: "rotate(0)",
                  },
            ]}
          />
        </ListItemButton>

        <Box />

        <Collapse
          in={open}
          orientation="horizontal"
          sx={{
            display: "inline-block",
            overflow: "hidden",
          }}
        >
          {open &&
            items.map((item) => (
              <ListItemButton key={item.id}>
                <ListItemText
                  primary={item.title}
                  slotProps={{
                    primary: { sx: { fontSize: 14, fontWeight: "medium" } },
                  }}
                />
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                />
              </ListItemButton>
            ))}
          <Divider />
          <ListItemButton key={999}>
            <ListItemText
              primary="Empty cart"
              slotProps={{
                primary: { sx: { fontSize: 14, fontWeight: "medium" } },
              }}
            />
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={handleDeleteAllItems}
                >
                  <DeleteIcon />
                </IconButton>
              }
            />
          </ListItemButton>
        </Collapse>
      </Box>
    </>
  );
};
