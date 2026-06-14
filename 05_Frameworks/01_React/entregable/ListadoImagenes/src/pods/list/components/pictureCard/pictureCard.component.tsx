import React from "react";
import { PictureInfo } from "@/pods/list/list.vm";
import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

interface Props {
  picture: PictureInfo;
  handleBuyItem: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => void;
}

export const PictureCard: React.FC<Props> = ({ picture, handleBuyItem }) => {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="340"
          src={picture.picUrl || ""}
          sx={{
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography variant="body1">{picture.title}</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={picture.selected}
                onChange={(e) => {
                  handleBuyItem(e, picture.id);
                }}
              />
            }
            label="Buy"
          />
        </CardContent>
      </Card>
    </>
  );
};
