import React from 'react';

interface Props {
    value: string;
    name: string;
    step: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const NumberInputField: React.FC<Props> = (props) => {
    const {value, name, step, handleOnChange, handleOnFocus} = props;

    return (
        <input 
            style={{marginBottom:10}} 
            value={value} 
            placeholder={`Type ${name} value`} 
            id={name} 
            name={name} 
            step={step}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
        />
    )
}