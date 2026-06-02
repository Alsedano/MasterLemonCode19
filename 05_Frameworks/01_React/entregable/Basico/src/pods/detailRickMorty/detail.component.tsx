import { routes } from "@/router";
import React from "react";
import { Box, Button, Card, CardMedia, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { RICK_MORTY } from "@/common/constants";
import { RickMortyMemberDetailEntity } from "./detail.vm";

interface Props {
  id: string;
  member: RickMortyMemberDetailEntity;
}

export const DetailRickMorty: React.FC<Props> = ({ id, member }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: "50%",
          }}
        >
          <CardMedia
            component="img"
            /*   height="340"*/
            /* width="200px" */
            src={member.image || null}
            sx={{
              objectFit: "contain",
            }}
          />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1 }}
            sx={{ padding: "0px 100px" }}
          >
            <Grid size={4}>
              <h2> name:</h2>
            </Grid>
            <Grid size={8}>
              <h2> {member?.name}</h2>
            </Grid>

            <Grid size={4}>
              <p> id:</p>
            </Grid>
            <Grid size={8}>
              <p> {member?.id}</p>
            </Grid>
            <Grid size={4}>
              <p> gender:</p>
            </Grid>
            <Grid size={8}>
              <p> {member?.gender}</p>
            </Grid>
            <Grid size={4}>
              <p> species:</p>
            </Grid>
            <Grid size={8}>
              <p> {member?.species}</p>
            </Grid>
            <Grid size={4}>
              <p> status:</p>
            </Grid>
            <Grid size={8}>
              <p> {member?.status}</p>
            </Grid>
          </Grid>

          <Button
            component={RouterLink}
            to={routes.list(RICK_MORTY)}
            startIcon={<ReplyOutlinedIcon />}
          >
            Back to list page
          </Button>
        </Card>
      </Box>
    </>
  );
};
