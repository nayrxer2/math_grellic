import React from "react";
import '../styles/component-styles/button.css'

//-----array of styles
const STYLES = [
    "primary",
    "secondary",  
    "tertiary",
];

//-----array of sizes
const SIZES = [
    "small",
    "large",
];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    
    //-----checks if the style is included in the array and if not, fallbacks to the first value in the list
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

     //-----checks if the size is included in the array and if not, fallbacks to the first value in the list
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    

    return(
        <div>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick}
            type={type}
            >   
                {children}
            </button>
        </div>
    )
};