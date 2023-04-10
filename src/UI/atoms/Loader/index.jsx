import * as React from "react";


import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <CircularProgress sx={{ color: "#4A514E !important" }} />
        ...Loading
    </Box>
  );
};

export default Loader;
