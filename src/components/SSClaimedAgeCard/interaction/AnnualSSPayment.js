import React from 'react';
import { Amount, HeaderStyled } from './Interaction.styles';

const AnnualSSPayment = ({ amount= 0 }) => {
    return (
        <div>
            <HeaderStyled>Annual Social Security Payment</HeaderStyled>
            <Amount>${amount.toLocaleString()}</Amount>
        </div>
    )
};

export default AnnualSSPayment;