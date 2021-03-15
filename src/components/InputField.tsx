import React from 'react';
import { TemperatureType } from '../common';

interface Props {
    value: string;
    name: TemperatureType;
    handleOnChange: (type: TemperatureType, value: string) => void;
    handleOnFocus: () => void;
}

export const InputField: React.FC<Props> = (props) => {
    const {value, name, handleOnChange, handleOnFocus} = props;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleOnChange(name, e.target.value);
    };

    return (
        <input 
            style={{marginBottom:10, fontSize: '1.2rem'}}
            alt={name} 
            value={value} 
            placeholder={`Type ${name} value`} 
            id={name} 
            name={name} 
            onChange={onChange}
            onFocus={handleOnFocus}
        />
    )
}