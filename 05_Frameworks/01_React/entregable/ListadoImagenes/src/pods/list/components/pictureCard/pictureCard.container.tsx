import React, { SyntheticEvent } from "react";
import { PictureCard } from "./pictureCard.component";
import { PictureInfo } from "@/pods/list";
import { ShoppingContext } from "@/core";

interface Props {
  picture: PictureInfo;
  handleBuyItem: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => void;
}

export const PictureCardContainer: React.FC<Props> = ({
  picture,
  handleBuyItem,
}) => {
  return (
    <>
      <PictureCard
        picture={picture}
        handleBuyItem={handleBuyItem}
      ></PictureCard>
    </>
  );
};
