import React, { useState, useCallback, createContext } from "react";
import styled from "styled-components";

import Alert from "@mui/material/Alert";

import { GEO_API_URL, geoOptions } from "../../constants/api";
import Button from "../../UI/atoms/Button";
import Loader from "../../UI/atoms/Loader";
import Search from "../../UI/atoms/Search";
import CitiesList from "../../UI/organizms/CitiesList";

export const MainPageContext = createContext({ cityData: null });

const MainPage = () => {
  const defaultUrl = `${GEO_API_URL}/cities?minPopulation=100000&limit=10&namePrefix=`;

  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const getData = useCallback(async () => {
    setLoading(true);
    const data = await fetch(`${defaultUrl}${searchValue}`, geoOptions);
    if (!data.ok) {
      setLoading(false);
      return setError("It was impossible to get data");
    }
    const updatedData = await data.json();
    setLoading(false);
    setData(updatedData.data);
    localStorage.setItem("cityData", JSON.stringify(updatedData));
  }, [searchValue, setLoading, setData, setError, defaultUrl]);

  const handleClick = useCallback(() => {
    if (searchValue) {
      getData();
    }
  }, [getData, searchValue]);

  return (
    <MainPageContext.Provider value={{ cityData: data }}>
      <Wrapper>
        <InputWrapper>
          <Search value={searchValue} onChange={handleSearchChange} />
          <Button
            handleClick={handleClick}
            text="Search City"
            disabled={!searchValue}
          />
          {loading && <Loader />}
          {error && <Alert severity="Error:">{error}</Alert>}
        </InputWrapper>

        {data && <CitiesList />}
      </Wrapper>
    </MainPageContext.Provider>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 50px;
  justify-content: center;
  align-items: center;
`;

//const defaultUrl = `${GEOAPIURL}/cities?minPopulation=1000&namePrefix=${searchValue}`
