import { routes } from "@/router";
import React from "react";
import { MemberDetailEntity } from "./detail.vm";
import { Box, Button, Card, CardMedia, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { GITHUB } from "@/common/constants";

interface Props {
  id: string;
  member: MemberDetailEntity;
}

export const Detail: React.FC<Props> = ({ id, member }) => {
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
            height="340"
            src={member.avatarUrl || null}
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
              <p>User Id:</p>
            </Grid>
            <Grid size={8}>
              <p>{id}</p>
            </Grid>
            <Grid size={4}>
              <p> id:</p>
            </Grid>
            <Grid size={8}>
              <p> {member?.id}</p>
            </Grid>
            <Grid size={4}>
              <p> login:</p>
            </Grid>
            <Grid size={8}>
              <p> {member?.login}</p>
            </Grid>
            <Grid size={4}>
              <p> company:</p>
            </Grid>
            <Grid size={8}>
              <p> {member?.company}</p>
            </Grid>
            <Grid size={4}>
              <p> bio:</p>
            </Grid>
            <Grid size={8}>
              <p> {member?.bio}</p>
            </Grid>
          </Grid>

          <Button
            component={RouterLink}
            to={routes.list(GITHUB)}
            startIcon={<ReplyOutlinedIcon />}
          >
            Back to list page
          </Button>
        </Card>
      </Box>
    </>
  );
};
