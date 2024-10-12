import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { validateSignUp } from "../validations/user.validations";
import { signUpApi } from "../api/user.api";
import Logo from "../components/Logo";
import { endProgress, startProgress } from "../redux/slices/progress.reducer";
import { getServerError } from "../utils/errors.utils";
import PasswordField from "../components/PasswordField";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      cPass: "",
    },
    validate: validateSignUp,
    onSubmit: async ({ cPass, ...rest }, { resetForm }) => {
      try {
        dispatch(startProgress());
        await signUpApi(rest);
        resetForm({ values: "" });
        navigate("/");
        toast.success("Account created successfully!");
      } catch (err) {
        toast.error(getServerError(err));
        console.log(err);
      } finally {
        dispatch(endProgress());
      }
    },
  });

  const _handleUsernameChange = (e) => {
    formik.setFieldError("username", "");
    formik.setFieldValue("username", e.target.value, false);
  };

  const _handlePasswordChange = (e) => {
    formik.setFieldError("password", "");
    formik.setFieldValue("password", e.target.value, false);
  };

  const _handleCpassChange = (e) => {
    formik.setFieldError("cPass", "");
    formik.setFieldValue("cPass", e.target.value, false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="space"
      gap={30}
      p={{ xs: 10, sm: 30 }}
    >
      <Logo width={40} />
      <Stack
        component="form"
        width={{ xs: "100%", sm: 530 }}
        height={453}
        justifyContent="center"
        bgcolor="white"
        px={{
          sm: 100,
          xs: 10,
        }}
        py={{
          sm: 50,
          xs: 20,
        }}
        gap={40}
        borderRadius={{
          xs: 0,
          md: 4,
        }}
        onSubmit={formik.handleSubmit}
        boxSizing="border-box"
      >
        <Box textAlign="center">
          <Typography fontWeight={500} fontSize="1.5em">
            Sign Up
          </Typography>
        </Box>
        <Stack gap={3}>
          <Box height={64}>
            <TextField
              id="username"
              label="Username"
              size="small"
              value={formik.values.username}
              onChange={_handleUsernameChange}
              error={!!formik.errors.username}
              helperText={formik.errors.username}
              fullWidth
            />
          </Box>
          <Box height={64}>
            <PasswordField
              id="password"
              label="Password"
              value={formik.values.password}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
              onChange={_handlePasswordChange}
              fullWidth
            />
          </Box>
          <Box height={64}>
            <PasswordField
              id="cPass"
              label="Confirm password"
              value={formik.values.cPass}
              error={!!formik.errors.cPass}
              helperText={formik.errors.cPass}
              onChange={_handleCpassChange}
              fullWidth
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            SIGN UP
          </Button>
        </Stack>
        <Box textAlign="center" mt={15}>
          <Typography fontSize={14}>
            Already a member?&nbsp;
            <Link to="/">Sign in</Link>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default SignUp;
