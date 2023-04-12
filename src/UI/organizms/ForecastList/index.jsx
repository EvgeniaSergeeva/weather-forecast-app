import React from "react";
import styled from "styled-components";

import ForecastCard from "../../moleculs/ForecastCard";

const ForecastList = ({data}) => {
    console.log(data)
    return(
        <ListWrapper>
            {data?.map((item, idx) => (
          <ForecastCard key={`${item.dt_txt}${idx}`} listItem={item} />
      ))}
        </ListWrapper>

    )
}
 export default ForecastList;

const ListWrapper = styled.div`
width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 90%;
    
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
    
  }
`