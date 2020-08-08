import React, { SelectHTMLAttributes } from 'react';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className='select-block'>
      <label htmlFor={name}>{label}</label>
      <select value='' id={name} {...rest}>
        <option value='' key='0' disabled hidden>
          Selecione uma opção
        </option>
        {options.map((element, index) => {
          return (
            <option key={`${element.value}-${index}`} value={element.value}>
              {element.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
