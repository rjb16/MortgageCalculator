import React from 'react';

const MortgageCalculator = (props) => {

    const mortgageCalculation = props.mortgages.map((mortgage) => {
        return (
        <p key={mortgage.id}>{(mortgage.user_salary * 3) + (mortgage.partner_salary * 3) + mortgage.deposit - mortgage.monthly_expenses}</p>
        );
    });

    return (
        <>
        {mortgageCalculation}
        </>
    );
}

export default MortgageCalculator;