import React from 'react';

interface Props {
    textLiteral: string;
}

export const InputFieldTitle: React.FC<Props> = (props) => {
    const {textLiteral} = props;

    return (
        <p style={{fontSize: "1.2rem", color: "indianred", marginBlockStart: 0, marginBlockEnd: 10 }}>
            {textLiteral}
        </p>
    )
}