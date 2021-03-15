import React from 'react';

interface Props {
    textLiteral: string;
}

export const MainTitle: React.FC<Props> = (props) => {
    const {textLiteral} = props;

    return (
        <p style={{textAlign: 'center', fontSize: '1.5rem', color: 'bisque', marginBlockStart: 0, marginBlockEnd: 10}}>
            {textLiteral}
        </p>
    )
}