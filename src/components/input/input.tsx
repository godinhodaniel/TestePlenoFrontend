import React from 'react';
import './input.css';

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    label,
    placeholder,
    type = 'text',
    value = '',
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
    }: InputProps = { label: '', placeholder: '', type: 'text', value: '', onChange: () => {}
}) { 
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
