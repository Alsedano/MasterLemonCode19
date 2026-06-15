import React from "react";
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
      {pics.map((pic) => (
        <PictureCardContainer
          key={pic.id}
          picture={pic}
          handleBuyItem={handleBuyItem}
        />
      ))}
    </div>
  );
};
