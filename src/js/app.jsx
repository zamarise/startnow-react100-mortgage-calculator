import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: '',
      rate: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const multR = this.state.rate * 0.01;
    const r = multR / 12;
    const p = this.state.balance;
    const n = this.state.term;
    const rOne = 1 + r;
    const exp = Math.pow(rOne, n);
    const top = exp * r;
    const bottom = exp - 1;
    const divTopBottom = top / bottom;

    const calculateMonthly = divTopBottom * p;

    this.setState({
      monthlyPayment: calculateMonthly.toFixed(2)
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Mortgage Calculator</h1>
        <p className='lead bg-light text-gray-dark text-center'>
          A mortgage calculator made in React
        </p>

        <hr />

        <form className='form-horizontal'>
          <div className='col-md-offset-2 col-md-10'>
            <div className='alert alert-success text-center lead' role='alert'>
              Monthly Payment: ${this.state.monthlyPayment}
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='inputLoanBalance' className='col-sm-2 control-label'>
              Loan Balance ($)
            </label>
            <div className='col-sm-10'>
              <input
                name='balance'
                type='number'
                className='form-control'
                value={ this.state.balance }
                onChange={ this.handleChange }
                placeholder='Enter Loan Balance'
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='inputInterestRate' className='col-sm-2 control-label'>
              Annual Interest Rate (%)
            </label>
            <div className='col-sm-10'>
              <input
                name='rate'
                type='number'
                step='0.01'
                className='form-control'
                value={ this.state.rate }
                onChange={ this.handleChange }
                placeholder='Enter Interest Rate'
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='loanTerm' className='col-sm-2 control-label'>
              Loan Term (years)
            </label>
            <div className='col-sm-10'>
              <select name='term' className='form-control' onChange={ this.handleChange }>
                <option value='0'>Choose Loan Term (years)</option>
                <option value='180'>15</option>
                <option value='360'>30</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-md-offset-2 col-md-10'>
              <button
                name='submit'
                type='button'
                className='btn btn-default btn-block btn-success'
                onClick={ this.handleSubmit }
              >
                Calculate
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
