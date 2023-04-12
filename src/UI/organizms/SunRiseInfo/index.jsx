import * as React from "react";
import PropTypes from "prop-types";
import {  Typography, Card, CardContent } from "@mui/material";

const SunRiseInfo = ({ sunriseTime, sunsetTime, timeZone }) => {
  const formatTime = (sec) => {
    const date = new Date(sec * 1000 - 10800 * 1000 + timeZone * 1000);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const formattedTime = ` ${hours}:${minutes}:${seconds}`;
    return formattedTime;
    
  };

  const cardStyle = {
    width: "60%",
    padding: "0 20px",
    borderRadius: "15px",
    margin:'0 auto',
    height: "80px",
    backgroundColor: ' #c3979f;',
  };
  const typographyStyle = {
    fontSize: "15px",
    color: "#747877",
    fontWeight: "600",
    
  };

  return (
    <Card sx={cardStyle}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={typographyStyle}
          >
            Sunrise:   {sunriseTime ? formatTime(sunriseTime) : "No information"}
          </Typography>
          <Typography variant="h5" sx={typographyStyle}>
            Sunset:   {sunsetTime ? formatTime(sunsetTime) : "No information"}
          </Typography>
        </CardContent>
    </Card>
  );
};

export default SunRiseInfo;

SunRiseInfo.propTypes = {
  sunriseTime: PropTypes.number,
  sunsetTime: PropTypes.number,
  timeZone: PropTypes.number,
};
SunRiseInfo.defaultProps = {
  sunriseTime: null,
  sunsetTime: null,
  timeZone: null,
};
