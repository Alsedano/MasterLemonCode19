import React from "react";
import { PictureCard } from "./pictureCard.component";
import { PictureInfo } from "@/pods/list";

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
