import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const OneDayBody = ({
  description,
  temp,
  feelsLike,
  humidity,
  pressure,
  speed,
}) => {
  return <BodyWrapper>
    <BodyDesc>{description ? description.charAt(0).toUpperCase() + description.slice(1) : ""}</BodyDesc>
    <BodyInfo>Temperature: {temp ? temp : "no information"} °C</BodyInfo>
    <BodyInfo>Feels like: {feelsLike ? feelsLike : "no information"}°C</BodyInfo>
    <BodyInfo>Humidity: {humidity ? humidity : "no information"}%</BodyInfo>
    <BodyInfo>Pressure: {pressure ? pressure : "no information"} kPa</BodyInfo>
    <BodyInfo>
      Wind: {speed ? speed : "no information"} meters per second
    </BodyInfo>
  </BodyWrapper>;
};

const BodyWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  background-color: #3736F1;
  color: beige;
  border: none;
  border-radius: 20px;
  padding: 40px;
  font-size: 20px;
  line-height: 60px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;

  @media (max-width: 800px) {
    width: 90%;
    border-radius: 10px;
    padding: 20px;
    font-size: 18px;
    padding: 20px 10px;
  }
`;
const BodyDesc = styled.div`
width: 80%;
text-align: center;
font-weight: 700;
  margin: 0 auto;
  height: 60px;
  border: none;
  border-bottom: 1px solid #E46E36;
`
const BodyInfo = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 60px;
  border: none;
  border-bottom: 1px solid #E46E36;
`;

OneDayBody.propTypes = {
  description: PropTypes.string,
  temp: PropTypes.number,
  feelsLike: PropTypes.number,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  speed: PropTypes.number,
};
OneDayBody.defaultProps = {
  description: "",
  temp: "",
  feelsLike: "",
  humidity: "",
  pressure: "",
  speed: "",
};

export default OneDayBody;
