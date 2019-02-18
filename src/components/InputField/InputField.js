import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from "./InputField.module.scss";

class InputField extends Component {
  static defaultProps = {
    value: "",
    checked: false,
    placeholder: "",
    className: ""
  }
  
  render() {
    const { type, name, id, handleChange, label, placeholder, value, className, checked } = this.props;

    return (
      <div>
        <input type={type} placeholder={placeholder} name={name} id={id} onChange={handleChange} value={value} checked={checked}/>
        <label htmlFor={id} className={className}>{label}</label>
      </div>
    );
  }
}

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
