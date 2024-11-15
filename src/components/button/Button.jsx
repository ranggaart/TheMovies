import React from 'react';
import PropTyoes from 'prop-types';

import'./button.scss';

const Button = props => {
    return (
        <button 
            className={`btn ${props.className}`} 
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>        
    );
}

export const OutlineButton = props => {
    return (
        <Button
        className={`btn-outline ${props.className}`} 
        onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    );
}

Button.prototype = {
    onclick: PropTyoes.func
}

export default Button;

