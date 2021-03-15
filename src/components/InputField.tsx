import React from 'react';

interface Props {
    value: string;
    name: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<Props> = (props) => {
    const {value, name, handleOnChange, handleOnFocus} = props;

    return (
        <input 
            style={{marginBottom:10, fontSize: '1.2rem'}}
            alt={name} 
            value={value} 
            placeholder={`Type ${name} value`} 
            id={name} 
            name={name} 
            onChange={handleOnChange}
            onFocus={handleOnFocus}
        />
    )
}