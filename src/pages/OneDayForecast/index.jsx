import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import Alert from "@mui/material/Alert";

import { OPEN_WEATHER_URL } from "../../constants/api";
import { APIKEY } from "../../constants/api";
import ROUTES from "../../constants/routes";
import Loader from "../../UI/atoms/Loader";
import Button from "../../UI/atoms/Button";
import OneDayHeader from "../../UI/organizms/OneDayHeader";
import SunRiseInfo from "../../UI/organizms/SunRiseInfo";
import OneDayBody from "../../UI/organizms/OneDayBody";

const OneDayForecast = () => {
  const { index } = useParams();
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedCoords = localStorage.getItem("cityData");
    if (storedCoords) {
      setCoords(JSON.parse(storedCoords));
    }
  }, []);

  useEffect(() => {
    if (coords && coords.data) {
      const latitude = coords.data[index].latitude;
      const longitude = coords.data[index].longitude;
      const oneDayWeatherUrl = `${OPEN_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`;

      const getData = async () => {
        setLoading(true);
        const response = await fetch(oneDayWeatherUrl);
        if (!response.ok) {
          setLoading(false);
          return setError("It is impossible to get data");
        }
        const responseData = await response.json();
        setLoading(false);
        setData(responseData);
      };
      getData();
    }
  }, [index, coords]);

  return (
    <Wrapper>
      {loading && <Loader />}
      {error && <Alert severity="error">{error}</Alert>}
      {data && (
        <ContentWrapper>
          <OneDayHeader
            icon={data?.weather[0].icon}
            temp={data?.main.temp}
            name={data?.name}
            city={coords.data[index].city}
            info={data?.weather[0].description}
            country={coords.data[index].country}
          />
          <SunRiseInfo
            sunriseTime={data?.sys.sunrise}
            sunsetTime={data?.sys.sunset}
            timeZone={data?.timezone}
          />
          <OneDayBody
            description={data?.weather[0].description}
            temp={data?.main.temp}
            feelsLike={data?.main.feels_like}
            humidity={data?.main.humidity}
            pressure={data?.main.pressure}
            speed={data?.wind.speed}
          />
          <ButtonWrapper>
            <Button disabled={false}>
              <LinkForecast to={ROUTES.FURTHER_FORECAST + `/${index}`}>
                5 days forecast
              </LinkForecast>
            </Button>

            <Button disabled={false}>
              <LinkForecast to={ROUTES.MAIN_PAGE }>
                Back
              </LinkForecast>
            </Button>
          </ButtonWrapper>
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default OneDayForecast;
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const ContentWrapper = styled.div`
  width: 90%;
  margin:20px auto;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  justify-content: start;

 
`;
const LinkForecast = styled(Link)`
  text-decoration: none;
  color: white;
`;
const ButtonWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    width: 90%;
  }
`;
