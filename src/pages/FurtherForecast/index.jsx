import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import styled from "styled-components";

import Alert from "@mui/material/Alert";
import Loader from "../../UI/atoms/Loader";
import FurtherForecastHeader from "../../UI/organizms/FurtherForecastHeader";
import { FURTHER_FORECAST_URL, APIKEY } from "../../constants/api";
import ForecastList from "../../UI/organizms/ForecastList";
import Button from "../../UI/atoms/Button";
import ROUTES from "../../constants/routes";
import GoToTop from "../../UI/atoms/GoToTop/GoToTop";



const FurtherForecast = () => {
  const { index } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const [coords, setCoords] = useState(null);

  useEffect(() => {
    const storedCoords = localStorage.getItem("cityData");
    if (storedCoords) {
      setCoords(JSON.parse(storedCoords));
    }
  }, []);



   useEffect(() => {
    if (coords && coords.data) {
       const latitud = coords.data[index].latitude;
      const longitud = coords.data[index].longitude;
      const furtherForecastWeatherUrl = `${FURTHER_FORECAST_URL}lat=${latitud}&lon=${longitud}&appid=${APIKEY}&units=metric`;

      const getData = async () => {
        setLoading(true);
        const response = await fetch(furtherForecastWeatherUrl);
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

  console.log(data)

  return (
    <Wrapper>
      {loading && <Loader />}
      {error && <Alert severity="error">{error}</Alert>}
      {data && (
      <ContentWrapper>
        <FurtherForecastHeader
          region={coords?.data[index].region}
          population={coords?.data[index].population}
          city={coords?.data[index].city}
        />
        <GoToTop/>
        <ButtonWrapper>
            <Button disabled={false}>
              <LinkForecast to={ROUTES.ONE_DAY_FORECAST + `/${index}`}>
                day forecast
              </LinkForecast>
            </Button>

            <Button disabled={false}>
              <LinkForecast to={ROUTES.MAIN_PAGE }>
                Back
              </LinkForecast>
            </Button>
          </ButtonWrapper>
        <ForecastList data={data.list}/>
      </ContentWrapper>
       )} 
    </Wrapper>
  );
};

export default FurtherForecast;

const Wrapper = styled.div`
  width: 100%;
`;
const ContentWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  justify-content: space-between;
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
  @media (max-width: 900px) {
    width: 90%;
  }
`;
