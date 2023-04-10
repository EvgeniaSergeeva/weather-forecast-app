import * as React from "react";
import PropTypes from "prop-types";

import { CardActionArea, Typography, CardContent, Card } from "@mui/material";

const CityCard = ({ item }) => {
  console.log({ item });
  return (
    <Card sx={{ width: 345, height: 40, margin: "0 auto" }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: 18 }}
          >
            {item?.city && item.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.countryCode && item.countryCode}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CityCard;

CityCard.propTypes = {
  item: PropTypes.shape({
    city: PropTypes.string,
    countryCode: PropTypes.string,
  }),
};
CityCard.defaultProps = {
  city: "",
  countryCode: "",
};
