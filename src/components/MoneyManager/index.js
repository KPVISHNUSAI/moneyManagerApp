import {Component} from 'react'

import './index.css'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    type: '',
  }

  renderTransactionItems = () => {
    const {transactionsList} = this.state
    return transactionsList.map(eachTransaction => (
      <TransactionItem
        key={eachTransaction.id}
        titleName={eachTransaction.title}
        amountRs={eachTransaction.amount}
        typeOfTransaction={eachTransaction.type}
      />
    ))
  }

  render() {
    const {transactionsList, title, amount, type} = this.state
    const transactionDetails = {balance: 0, income: 0, expenses: 0}
    return (
      <div className="home-container">
        <div className="user-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome Back to your{' '}
            <span className="make-strong">Money Manager</span>
          </p>
        </div>
        <MoneyDetails transactionDetails={transactionDetails} />
        <div className="form-history-container">
          <form onSubmit={this.processTransaction} className="form-container">
            <h1>Add Transaction</h1>
            <label htmlFor="titleId">TITLE</label>
            <input
              type="text"
              onChange={this.handleTitleInput}
              id="titleId"
              value={title}
              className="inputs-sty"
              placeholder="TITLE"
            />
            <label htmlFor="amtId">AMOUNT</label>
            <input
              type="number"
              id="amtId"
              onChange={this.handleAmountInput}
              value={amount}
              className="inputs-sty"
              placeholder="AMOUNT"
            />
            <label htmlFor="typeId">TYPE</label>
            <select id="typeId" value={type} className="inputs-sty">
              <option
                className="inputs-sty"
                value="income"
                id={transactionTypeOptions[0].optionId}
              >
                {transactionTypeOptions[0].displayText}
              </option>
              <option
                className="inputs-sty"
                value="expenses"
                id={transactionTypeOptions[1].optionId}
              >
                {transactionTypeOptions[1].displayText}
              </option>
            </select>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Expense 1</td>
                  <td>100</td>
                  <td>Expense</td>
                  <td>
                    <button className="delete-button">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Income 1</td>
                  <td>200</td>
                  <td>Income</td>
                  <td>
                    <button className="delete-button">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
