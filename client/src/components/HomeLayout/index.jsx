import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";

function HomeLayout({ children }) {
  return (
    <Box height="100vh" overflow="hidden" display="flex" flexDirection="column">
      <Header />
      <Box
        py={30}
        px={{ xs: 10, sm: 30 }}
        bgcolor="#f9fafc"
        overflow="auto"
        flex={1}
      >
        {children}
      </Box>
    </Box>
  );
}

export default HomeLayout;
