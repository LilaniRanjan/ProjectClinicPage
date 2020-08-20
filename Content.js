import React from "react";
import PetCard from "./PetCard";
import { Grid } from "@material-ui/core";
import constants from "./constants";

const Content = () => {
  const petMakerCard = (petMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <PetCard {...petMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {constants.map((petMakerObj) => petMakerCard(petMakerObj))}
    </Grid>
  );
};

export default Content;
