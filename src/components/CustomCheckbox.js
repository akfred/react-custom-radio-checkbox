import React from 'react';
import './styles.css';
const CustomCheckbox = ({
  name,
  label,
  onChange,
  disabled,
  style,
  checked
}) => {
  return (
    <label style={style} className='labelClassname'>
      <input
        type='checkbox'
        checked={checked}
        name={name}
        onChange={onChange}
        className='checkbox-input'
        disabled={disabled}
      />{' '}
      <span className='label-text'>{label}</span>
    </label>
  );
};

export default CustomCheckbox;
