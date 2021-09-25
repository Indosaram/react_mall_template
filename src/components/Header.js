import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./Header.css"

function LinkTab(props) {
  return (
    <Link to={props.href}>
      <Tab {...props} />
    </Link>
  );
}

export default function Header() {
  const categories = ["main", "mobile", "laptop", "watch"];
  const path = window.location.pathname;
  var index = categories.indexOf(path.substring(1));
  if (index === -1) {
    index = 0;
  }

  const [value, setValue] = React.useState(index);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <h2>Electronics</h2>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="nav-tabs"
          centered
        >
          {categories.map((category, index) => {
            return (
              <LinkTab key={index} label={category} href={`/${category}`} />
            );
          })}
          ;
        </Tabs>
      </Box>
    </>
  );
}
