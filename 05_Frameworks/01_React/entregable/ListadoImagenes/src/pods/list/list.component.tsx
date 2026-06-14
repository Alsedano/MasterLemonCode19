import React from "react";
import { Box } from "@mui/material";
import { PictureInfo } from "./list.vm";
import { PictureCardContainer } from "./components/pictureCard/pictureCard.container";

interface Props {
  pics: PictureInfo[];
  handleBuyItem: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => void;
}

export const List: React.FC<Props> = ({ pics, handleBuyItem }) => {
  return (
    <div className="gridList">
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      {pics.map((pic) => (
        <PictureCardContainer
          key={pic.id}
          picture={pic}
          handleBuyItem={handleBuyItem}
        />
      ))}
      {/* </Box> */}
    </div>
  );
};
