import React, { Component } from 'react';

class MortgageForm extends Component {
    constructor() {
        super()
        this.state = {
            user_name: '',
            user_salary: null,
            partner_name: '',
            partner_salary: null,
            deposit: null,
            monthly_expenses: null

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const user_name = this.state.user_name.trim();
        const user_salary = parseInt(this.state.user_salary);
        if (!user_name || !user_salary) {
            return
        }
        const partner_name = this.state.partner_name.trim();
        let partner_salary = parseInt(this.state.partner_salary);
        if (isNaN(partner_salary)) {
            partner_salary = 0;
        }
        let deposit = parseInt(this.state.deposit);
        if (isNaN(deposit)) {
            deposit = 0;
        }
        let monthly_expenses = parseInt(this.state.monthly_expenses);
        if(isNaN(monthly_expenses)) {
            monthly_expenses = 0;
        }
        

        this.props.onMortgageSubmit({
            user_name: user_name,
            user_salary: user_salary,
            partner_name: partner_name,
            partner_salary: partner_salary,
            deposit: deposit,
            monthly_expenses: monthly_expenses
            
        });

        this.setState({
        user_name: '',
        user_salary: null,
        partner_name: '',
        partner_salary: null,
        deposit: null,
        monthly_expenses: null
        
    })
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                placeholder="Your name"
                name="user_name"
                value={this.state.user_name}
                onChange={this.handleChange}
                />
                <input type="number"
                placeholder="Your salary"
                name="user_salary"
                value={this.state.user_salary}
                onChange={this.handleChange}
                />
                <input type="text"
                placeholder="Your partners name"
                name="partner_name"
                value={this.state.partner_name}
                onChange={this.handleChange}
                />
                <input type="number"
                placeholder="Your partners salary"
                name="partner_salary"
                value={this.state.partner_salary}
                onChange={this.handleChange}
                />
                <input type="number"
                placeholder="Your deposit"
                name="deposit"
                value={this.state.deposit}
                onChange={this.handleChange}
                />
                <input type="number"
                placeholder="Your expenses"
                name="monthly_expenses"
                value={this.state.monthly_expenses}
                onChange={this.handleChange}
                />
                <input type="submit" value="Post" />
                
            </form>
        )
    }
}

export default MortgageForm;
