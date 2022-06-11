import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Item from "./Item";

export default function Items({ category }) {
  const [data, setData] = useState([]);
  var path = category ? `?category=${category}` : "";

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URI}/item` + path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((dat) => {
        setData(dat.data);
      });
  }, [path]);

  return (
    <Grid container spacing={2} justifyContent="center">
      {data.map((dat) => {
        return (
          <Grid key={dat.id} item>
            <Item data={dat} />
          </Grid>
        );
      })}
    </Grid>
  );
}
