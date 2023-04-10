import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ value, onChange }) => {
  
  return (
    <TextField
      variant="outlined"
      placeholder="Search City"
      InputProps={{
        startAdornment: <SearchIcon />,
        style: {
          width: "350px",
          borderRadius: "10px",
          color: "#4A514E",
          border: "darkgrey",
          "&:hover": {
            borderColor: "#4A514E",
          },
          "&:focus": {
            borderColor: "#4A514E",
          },
          "&:active": {
            borderColor: "#4A514E",
          },
        },
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
Search.defaultProps = {
  value: "",
};
