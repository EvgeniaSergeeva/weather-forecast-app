import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const GoToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrap>
      {" "}
      {showTopBtn && (
        <Btn onClick={goToTop}>
          <ArrowUpwardIcon />
        </Btn>
      )}{" "}
    </Wrap>
  );
};
export default GoToTop;
const Wrap = styled.div``;
const Btn = styled.button`
  position: fixed;
  background-color: #3736f1;
  border: none;
  border-radius: 10px;
  color: beige;
  width: 30px;
  height: 50px;
  padding: 10px 0;
  bottom: 40px;
  left: 90%;
  z-index: 20;
`;
