import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Item.css";
import { Box } from "@mui/system";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="/static/images/porsche.jpg"
          alt="porsche taycan"
        />

        <CardContent height="140">
          <Box sx={{ display: "flex", marginBottom: "1px" }}>
            <Box sx={{ flexGrow: 1  }}>
              <Typography
                align="left"
                gutterBottom
                variant="h5"
              >
                Taycan 4S
              </Typography>
            </Box>
            <Box>
              <Typography
                display="inline"
                gutterBottom
                variant="h6"
              >
                Porsche
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
            The Taycan Cross Turismo embraces your lifestyle, with an enlarged
            rear luggage compartment and an even more spacious interior. Its
            bold capability is further highlighted by the characteristic accents
            of the Off-road Design Package.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
