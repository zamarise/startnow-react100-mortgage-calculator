import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
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
              Monthly Mortgage Payment: <div />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='inputLoanBalance' className='col-sm-2 control-label'>
              Loan Balance
            </label>
            <div className='col-sm-10'>
              <input
                type='number'
                className='form-control'
                id='inputLoanBalance'
                placeholder='Enter Loan Balance'
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='inputInterestRate' className='col-sm-2 control-label'>
              Interest Rate (%)
            </label>
            <div className='col-sm-10'>
              <input
                type='number'
                step='0.01'
                className='form-control'
                id='inputInterestRate'
                placeholder='Enter Interest Rate'
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='loanTerm' className='col-sm-2 control-label'>
              Loan Term (years)
            </label>
            <div className='col-sm-10'>
              <select className='form-control'>
                <option>15</option>
                <option>30</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-md-offset-2 col-md-10'>
              <button type='submit' className='btn btn-default btn-block btn-success'>
                Calculate
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
