import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const CustomButton = ({ 
  variant, 
  color, 
  size, 
  disableElevation, 
  startIcon, 
  endIcon, 
  onClick, 
  children, 
  ...props 
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disableElevation={disableElevation}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disableElevation: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

CustomButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disableElevation: false,
  startIcon: null,
  endIcon: null,
  onClick: () => {},
};

export default CustomButton;
