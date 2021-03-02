import React from "react";
import PropTypes from 'prop-types';

const Button =({color,text,onclick})=> {

    return(
        <button className="btn" onClick={onclick}  style={{backgroundColor:color}}>{text}</button>
    )

}

Button.defaultProps={
    color:'red',
    text:'random',
}

Button.propTypes={
    color:PropTypes.string,
    text:PropTypes.string,
}

export default Button;