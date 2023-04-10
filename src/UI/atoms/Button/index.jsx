import React from "react";
import PropTypes from 'prop-types';

import styled from 'styled-components';
 
const Button = ({handleClick, text, children}) => {
    return<StyledButton onClick={handleClick}>{text || children}</StyledButton>
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    children: PropTypes.element,
    handleClick: PropTypes.func
}

Button.defaultProps = {
    text: '',
    children: null,
    handleClick: ()=>{}
}

const StyledButton = styled.button`
width:200px;
height: 60px;
padding: 10px 30px;
font-size: 18px;
border: none;
border-radius: 10px;
background-color: #c3979f;
&:hover{cursor:pointer;
opacity: 0.8} ;
`
// background-color: #E46E36;