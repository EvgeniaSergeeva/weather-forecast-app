import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ForecastCard = (listItem) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnterIcon = () => {
    setShowModal(true);
    setIsHovered(true);
  };
  const handleMouseLeaveIcon = () => {
    setShowModal(false);
    setIsHovered(false);
  };
  return (
    <Wrapper>
      <IconWrapper
        isHovered={isHovered}
        onMouseEnter={handleMouseEnterIcon}
        onMouseLeave={handleMouseLeaveIcon}
      >
        <WeatherIcon
          alt="weather"
          src={`${process.env.PUBLIC_URL}/icons/${listItem?.listItem.weather[0].icon}.svg`}
        />
        {showModal && <Modal>{listItem.listItem.weather[0].description}</Modal>}
      </IconWrapper>
      <InfoWrapper>
        <InfoTime>
          {" "}
          {listItem?.listItem.dt_txt &&
            listItem.listItem.dt_txt.slice(0, 16)}{" "}
        </InfoTime>
        <InfoItem>
          Temperature:{" "}
          {listItem?.listItem.main.temp
            ? listItem.listItem.main.temp
            : "no information"}
          °C
        </InfoItem>
        <InfoItem>
          Humidity:{" "}
          {listItem?.listItem.main.humidity
            ? listItem.listItem.main.humidity
            : "no information"}
          %
        </InfoItem>
        <InfoItem>
          Pressure:{" "}
          {listItem?.listItem.main.pressure
            ? listItem.listItem.main.pressure
            : "no information"}{" "}
          kPa
        </InfoItem>
        <InfoItem>
          Wind:{" "}
          {listItem?.listItem.wind.speed
            ? listItem.listItem.wind.speed
            : "no information"}{" "}
          mps
        </InfoItem>
      </InfoWrapper>
    </Wrapper>
  );
};

export default ForecastCard;

ForecastCard.propTypes = {
  listItem: PropTypes.shape({
    icon: PropTypes.string,
    date: PropTypes.string,
    temp: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    speed: PropTypes.number,
  }),
};

ForecastCard.defaultProps = {
  icon: "",
  date: "",
  temp: null,
  humidity: null,
  pressure: null,
  speed: null,
};

const Wrapper = styled.div`
  width: 300px;
  padding: 10px;
  //   border: 1px solid #e46e36;
  //   background-color: #e46e36;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 30px;
  justify-content: start;
`;

const IconWrapper = styled.div`
  position: relative;
  width: 120px;
  padding:10px 10px 10px 15px;
  background-color: #3736F1;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.isHovered &&
    `
    transform: scale(1.2);
  `}
  @media (max-width: 700px) {
    width: 80px;
    height: 80px;
  }
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 700px) {
    width: 70px;
    height: 70px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  column-gap: 5px;
  color: #747877;
  font-size: 16px;
  @media (max-width: 700px) {
    font-size: 14px;
    column-gap: 0;
  }
`;
const InfoItem = styled.div``;
const InfoTime = styled.div`
  color: #e46e36;
  font-weight: 600;
`;

const Modal = styled.div`
  width: 150px;
  font-size: 16px;
  font-weight: 600;
  color: #e46e36;
  position: absolute;
  top: 70%;
  left: -10%;
`;
