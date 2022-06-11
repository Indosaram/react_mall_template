import { FormControl, InputLabel, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useNavigate } from "react-router";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

export default function MyPage() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const history = useNavigate();
  const onClickLogin = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND_URI}`, {
      method: "POST",
      body: new URLSearchParams({
        username: values.username,
        password: values.password,
      }),
      headers: {
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const access_token = response.access_token;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("username", values.username);
        history("/");
      });
  };

  const onClickLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    history("/");
  };

  return (
    <div>
      <Typography variant="h5">My Page</Typography>

      {localStorage.getItem("access_token") ? (
        <>
          <Typography variant="h6">
            Hello, {localStorage.getItem("username")}
          </Typography>
          <Button onClick={onClickLogout} variant="contained" color="primary">
            Logout
          </Button>
        </>
      ) : (
        <>
          <Typography variant="body1" mt={2}>
            You need to log in to see this page.
          </Typography>
          <Stack
            component="form"
            spacing={2}
            sx={{
              width: "100%",
            }}
            noValidate
            alignItems="center"
            justifyContent="center"
            mt={2}
          >
            <FormControl
              sx={{
                width: "33%",
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="username">username</InputLabel>
              <OutlinedInput
                id="username"
                label="username"
                variant="filled"
                value={values.username}
                onChange={handleChange("username")}
              />
            </FormControl>
            <FormControl
              sx={{
                width: "33%",
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={values.showPassword ? "text" : "password"}
                label="password"
                variant="filled"
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button onClick={onClickLogin} variant="contained" color="primary">
              Log in
            </Button>
          </Stack>
        </>
      )}
    </div>
  );
}
