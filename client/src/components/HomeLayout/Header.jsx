import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Logo from "../Logo";

function Header() {
  const { session, signOut } = useAuth();
  const initial = session ? session?.username[0] : "";

  const _handleSignOut = () => {
    signOut();
  };

  return (
    <Box
      height={70}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={20}
      py={10}
      borderBottom="1px solid #e7eaed"
    >
      <Logo width={30} />
      <IconButton
        disableRipple
        onClick={_handleSignOut}
        title={`sign out from ${session?.username}`}
      >
        <Avatar sx={{ textTransform: "uppercase" }}>{initial}</Avatar>
      </IconButton>
    </Box>
  );
}

export default Header;
