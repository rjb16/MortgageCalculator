import React, { Component } from 'react';
import MortgageForm from '../components/MortgageForm'
import MortgageCalculator from '../components/MortgageCalculator'


class MortgageContainer extends Component {
    constructor() {
        super();
        this.state= {
            mortgages: []
        }
        this.handleMortgageSubmit = this.handleMortgageSubmit.bind(this);
    };

    handleMortgageSubmit(submittedMortgage) {
        submittedMortgage.id = Date.now();
        const updatedMortgages = [...this.state.mortgages, submittedMortgage];
        this.setState({
            mortgages: updatedMortgages
        });
    }

    render() {
        return(
            <>
                <h2>Input Your Details</h2>
                <MortgageForm onMortgageSubmit={this.handleMortgageSubmit}/>
                <h2>Maximum Value of a Property:</h2>
                <MortgageCalculator mortgages={this.state.mortgages}/>
            </>
        )
    }
}

export default MortgageContainer;