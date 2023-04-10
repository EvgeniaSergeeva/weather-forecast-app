import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const OneDayHeader = ({ icon, temp, name, city, info, country }) => {
  const [showModal, setShowModal] = useState(false);
  const [showCountry, setShowCountry] = useState(false);

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  const handleMouseEnterCity = () => {
    setShowCountry(true);
  };
  const handleMouseLeaveCity = () => {
    setShowCountry(false);
  };

  return (
    <CityNameWrapper>
      <IconWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <WeatherIcon alt="weather" src={`${process.env.PUBLIC_URL}/icons/${icon}.svg`} />

        {showModal && <Modal>{info}</Modal>}
        <TempWpapper>{Math.round(temp)}°C</TempWpapper>
      </IconWrapper>
      <CityName
        onMouseEnter={handleMouseEnterCity}
        onMouseLeave={handleMouseLeaveCity}
      >
        {city}, {name}
      </CityName>
      {showCountry && <CountryModal>{country}</CountryModal>}
    </CityNameWrapper>
  );
};
export default OneDayHeader;

OneDayHeader.propTypes = {
  icon: PropTypes.string,
  temp: PropTypes.number,
  name: PropTypes.string,
  city: PropTypes.string,
  info: PropTypes.string,
  country: PropTypes.string,
};
OneDayHeader.defaultProps = {
  icon: "",
  temp: null,
  name: "",
  city: "",
  info: "",
  country: "",
};
const CityNameWrapper = styled.div`
  position: relative;
  width: 60%;
  background-color: #3736f1;
  color: beige;
  border: none;
  border-radius: 20px;
  padding: 40px;
  font-size: 36px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;

  @media (max-width: 800px) {
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    font-size: 22px;
    padding: 20px 10px;
  }
`;
const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  position: relative;
`;
const WeatherIcon = styled.img`
  width: 266px;
  height: 266px;
  @media (max-width: 700px) {
    width: 163px;
    height: 163px;
  }
`;
const TempWpapper = styled.p`
  font-size: 80px;
  color: #c3979f;
  font-weight: 700;
  @media (max-width: 900px) {
    font-size: 60px;
  }
`;
// color: #dd6b0b;
const CityName = styled.p`
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`;

const Modal = styled.div`
  position: absolute;
  top: 75%;
  left: 0;
  width: 200px;
  height: 30px;
  border: none;
  color: #c3979f;
  font-size: 30px;
  z-index: 10;
`;
/*color: #dd6b0b;*/

const CountryModal = styled.div`
  position: absolute;
  top: 87%;
  left: 30%;
  width: 300px;
  height: 30px;
  border: none;
  color: #c3979f;
  font-size: 30px;
  z-index: 10;
`;
//  color: #dd6b0b;
