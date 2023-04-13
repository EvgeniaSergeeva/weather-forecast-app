import React from "react";
import PropTypes from 'prop-types';

import styled from 'styled-components';
 
const Button = ({handleClick, text, children, disabled}) => {
    return<StyledButton onClick={handleClick}disabled={disabled}>{text || children}</StyledButton>
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    children: PropTypes.element,
    handleClick: PropTypes.func,
    disabled: PropTypes.func,
}

Button.defaultProps = {
    text: '',
    children: null,
    handleClick: ()=>{},
    disabled: ()=>{}
}

const StyledButton = styled.button`
width:200px;
height: 60px;
padding: 10px 30px;
font-size: 18px;
border: none;
border-radius: 10px;
background-color: #c3979f;
cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
&:hover {
    opacity: ${({ disabled }) =>
      disabled ? "1" : "0.8"};
  };
  @media (max-width: 800px) {
    width: 150px;
  }
  @media (max-width: 450px) {
    width: 120px;
  }
`
