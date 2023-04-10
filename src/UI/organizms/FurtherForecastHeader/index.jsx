import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FurtherForecastHeader = ({ region, population, city }) => {
  const [showCountry, setShowCountry] = useState(false);

  const handleMouseEnterCity = () => {
    setShowCountry(true);
  };
  const handleMouseLeaveCity = () => {
    setShowCountry(false);
  };
  return (
    <HeaderWrapper>
      <CityName
        onMouseEnter={handleMouseEnterCity}
        onMouseLeave={handleMouseLeaveCity}
      >
        {city}
      </CityName>
      {showCountry && (
        <CountryModal>
          <div>{region},</div>
          <div>population: {population} people</div>
        </CountryModal>
      )}
    </HeaderWrapper>
  );
};

FurtherForecastHeader.propTypes = {
  region: PropTypes.string,
  population: PropTypes.number,
  city: PropTypes.string,
};
FurtherForecastHeader.defaultProps = {
  region: "",
  population: null,
  city: "",
  
};

export default FurtherForecastHeader;

const HeaderWrapper = styled.div`
  position: relative;
  width: 90%;
  background-color: #3736F1;
  color: beige;
  border: none;
  border-radius: 20px;
  padding: 40px;
  font-size: 36px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 1400px) {
    width: 600px;
  }
  @media (max-width: 940px) {
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    font-size: 22px;
    padding: 20px 10px;
  }
`
const CityName = styled.p`
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`

const CountryModal = styled.div`
  position: absolute;
  bottom: 5%;
  left: 20%;
  width: 300px;
  height: 40px;
  border: none;
  color: #c3979f;
  font-size: 18px;
  font-weight:600;
  line-height:20px;
  z-index: 10;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
