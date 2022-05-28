import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Item.css";
import { Box } from "@mui/system";

export default function Item({ data }) {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia
          className="media"
          component="img"
          height="180"
          image={`static/images/${data.thumbnail}`}
          alt="thumbnail"
        />

        <CardContent height="140">
          <Box sx={{ display: "flex", marginBottom: "1px" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography align="left" gutterBottom variant="h6">
                {data.title}
              </Typography>
            </Box>
            <Box>
              <Typography
                className="category"
                display="inline"
                gutterBottom
                variant="h6"
              >
                {data.category}
              </Typography>
            </Box>
          </Box>
          <Typography
            align="left"
            noWrap
            paragraph={true}
            variant="body2"
            color="text.secondary"
          >
            {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
