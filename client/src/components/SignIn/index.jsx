import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { validateSignIn } from "../../validations/user.validations";
import {
  startProgress,
  endProgress,
} from "../../redux/slices/progress.reducer";
import PasswordField from "../PasswordField";
import { getServerError } from "../../utils/errors.utils";
import { signInApi } from "../../api/user.api";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function SignIn() {
  const dispatch = useDispatch();
  const { signIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: validateSignIn,
    onSubmit: async (values, { resetForm }) => {
      try {
        dispatch(startProgress());
        const { data } = await signInApi(values);
        signIn(data);
        resetForm({ values: "" });
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

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="space"
      gap={30}
    >
      <Logo width={40} />
      <Stack
        component="form"
        width={{ sm: 530, xs: 275 }}
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
            SignIn
          </Typography>
        </Box>
        <Stack gap={30}>
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
          <Stack gap={5} width="100%">
            <PasswordField
              id="password"
              label="Password"
              value={formik.values.password}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
              onChange={_handlePasswordChange}
              fullWidth
            />
          </Stack>
          <Button type="submit" variant="contained" color="primary">
            LOGIN
          </Button>
        </Stack>
        <Box display={{ xs: "none", sm: "block" }} textAlign="center" mt={15}>
          <Typography fontSize={14}>
            Don&apos;t have an account?&nbsp;
            <Link to="signup">Sign up</Link>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default SignIn;
