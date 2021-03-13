import React from 'react';

interface Props {
    value: number|"";
    name: string;
    step: string;
    handleOnChange: (e: any) => void;
}

export const NumberInputField: React.FC<Props> = (props) => {
    const {value, name, step, handleOnChange} = props;

    return (
        <input 
            style={{marginBottom:10}} 
            value={value} 
            placeholder={`Type ${name} value`} 
            type="number" 
            id={name} 
            name={name} 
            step={step}
            onChange={handleOnChange}
            />
    )
}