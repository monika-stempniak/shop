import React from 'react';
import PropTypes from 'prop-types';

import "./InputField.module.scss";

const InputField = ({ type, name, id, handleChange, label, placeholder, value, className, checked }) => (
  <div>
    <input type={type} placeholder={placeholder} name={name} id={id} onChange={handleChange} value={value} checked={checked}/>
    <label htmlFor={id} className={className}>{label}</label>
  </div>
);


InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string
};

export default InputField;
