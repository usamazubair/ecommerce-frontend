import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthService from "services/AuthService";
import { Link } from "react-router-dom";
import CustomInput from "components/CustomInput/CustomInput";
import "assets/scss/component/register.scss";
import Loader from "components/Loader/Loader";

const theme = createTheme();

export default function SignIn() {
  const [showError, setShowError] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
    },
    validateOnBlur: false,
    validationSchema: loginValidationSchema(),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await AuthService.register(values);
      } catch (e) {
        setErrorState(e.response.data.message);
      }
      setLoading(false);
    },
  });

  const setErrorState = (message) => {
    setShowError(message);
    setTimeout((_) => {
      setShowError(null);
    }, 4000);
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
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <CustomInput
              id={"name"}
              label={"Name"}
              inputProps={formik.getFieldProps("name")}
              type={"text"}
              error={formik.errors.name}
            />
            <CustomInput
              label={"Email"}
              id={"email"}
              inputProps={formik.getFieldProps("email")}
              type={"email"}
              error={formik.errors.email}
            />
            <CustomInput
              label={"Address"}
              id={"address"}
              inputProps={formik.getFieldProps("address")}
              type={"text"}
              error={formik.errors.address}
            />
            <CustomInput
              label={"Password"}
              id={"password"}
              inputProps={formik.getFieldProps("password")}
              type={"password"}
              error={formik.errors.password}
              autoComplete="current-password"
            />
            <div className="registerErrorMessage">
              <span>{showError}</span>
            </div>
            <Button
              type="submit"
              disabled={loading ? true : false}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {!loading ? "Sign Up" : <Loader />}
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to="/login">{"Already have a account? Login"}</Link>
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
    name: Yup.string().required(),
    address: Yup.string().required(),
    password: Yup.string().required(),
  });
};
