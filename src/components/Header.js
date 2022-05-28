import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./Header.css";

function LinkTab(props) {
  return (
    <Link to={props.href}>
      <Tab {...props} />
    </Link>
  );
}

export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header">
      <h2>
        <Link
          to="/"
          onClick={(event) => {
            handleChange(event, 0);
          }}
        >
          Electronics
        </Link>
      </h2>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="nav-tabs"
          centered
        >
          <LinkTab key={0} label={"main"} href={"/"} />
          <LinkTab key={1} label={"mobile"} href={"/mobile"} />
          <LinkTab key={2} label={"laptop"} href={"/laptop"} />
          <LinkTab key={3} label={"watch"} href={"/watch"} />;
          <LinkTab key={3} label={"my page"} href={"/mypage"} />;
        </Tabs>
      </Box>
    </div>
  );
}
