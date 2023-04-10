import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CityCard from "../../moleculs/CityCard";
import { MainPageContext } from "../../../pages/MainPage";
import ROUTES from "../../../constants/routes";

const CitiesList = () => {
  const { cityData: data } = useContext(MainPageContext);
  return (
    <StyledContainer>
      {data?.map((item, idx) => (
        <Link
          key={item.id}
          style={{ textDecoration: "none" }}
          to={`${ROUTES.ONE_DAY_FORECAST}/${idx}`}
        >
          <CityCard item={item} />
        </Link>
      ))}
    </StyledContainer>
  );
};

export default CitiesList;

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  flex-wrap: nowrap;
  margin-top: 10px;
`;
