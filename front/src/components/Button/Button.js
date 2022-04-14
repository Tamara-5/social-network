import React from 'react';
import './Button.scss';

const Button = ({ children, ...restProps }) => {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}

export default Button;