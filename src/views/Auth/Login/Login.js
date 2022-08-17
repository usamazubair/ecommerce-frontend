import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import CustomInput from "components/CustomInput/CustomInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthService from "services/AuthService";
import { Link } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: loginValidationSchema(),
    onSubmit: async (values) => {
      try {
        var response = await AuthService.login(values);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  });

  const setLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.token);
    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <CustomInput
              id={"email"}
              label={"Email"}
              inputProps={formik.getFieldProps("email")}
              type={"email"}
              error={formik.errors.email}
            />
            <CustomInput
              label={"Password"}
              id={"password"}
              inputProps={formik.getFieldProps("password")}
              type={"password"}
              error={formik.errors.password}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/login">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const loginValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
};
