import { Grid } from "@mui/material";
import Item from "./Item";

export default function Items({ category }) {
  fetch(`http://localhost:5000/api/item/getall`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    
  }).then((res) => {
    if (res.ok) {
      console.log(res.json());
    }
  });
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
