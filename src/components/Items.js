import { Grid } from "@mui/material";
import Item from "./Item";

export default function Items({ category }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Item>1</Item>
      </Grid>
      <Grid item>
        <Item>2</Item>
      </Grid>
      <Grid item>
        <Item>3</Item>
      </Grid>
      <Grid item>
        <Item>4</Item>
      </Grid>
    </Grid>
  );
}
