import {Component} from 'react'

import {v4} from 'uuid'

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

    transactionDetails: {
      balance: 0,
      income: 0,
      expenses: 0,
    },
  }

  handleTitleInput = event => {
    this.setState({title: event.target.value})
  }

  handleAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  handleType = event => {
    this.setState({type: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: v4(),
      title,
      amount: parseFloat(amount),
      type,
    }

    this.setState(
      prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        title: '',
        amount: '',
        type: '',
      }),
      () => {
        // After setting state, recalculate transactionDetails
        const {transactionsList} = this.state
        const updatedTransactionDetails = {
          balance: 0,
          income: 0,
          expenses: 0,
        }
        transactionsList.forEach(transaction => {
          if (transaction.type === 'INCOME') {
            updatedTransactionDetails.income += transaction.amount
          } else if (transaction.type === 'EXPENSES') {
            updatedTransactionDetails.expenses += transaction.amount
          }
        })

        updatedTransactionDetails.balance =
          updatedTransactionDetails.income - updatedTransactionDetails.expenses
        this.setState({transactionDetails: updatedTransactionDetails})
      },
    )
  }

  deleteTransaction = transactionId => {
    this.setState(prevState => {
      const updatedTransactions = prevState.transactionsList.filter(
        eachTransaction => eachTransaction.id !== transactionId,
      )

      // Recalculate transactionDetails based on updatedTransactions
      const updatedTransactionDetails = updatedTransactions.reduce(
        (acc, transaction) => {
          if (transaction.type === 'INCOME') {
            acc.income += transaction.amount
          } else if (transaction.type === 'EXPENSES') {
            acc.expenses += transaction.amount
          }
          acc.balance = acc.income - acc.expenses
          return acc
        },
        {balance: 0, income: 0, expenses: 0},
      )

      return {
        transactionsList: updatedTransactions,
        transactionDetails: updatedTransactionDetails, // Update transactionDetails
      }
    })
  }

  renderTransactionItems = () => {
    const {transactionsList} = this.state
    return transactionsList.map(eachTransaction => (
      <TransactionItem
        key={eachTransaction.id}
        titleName={eachTransaction.title}
        amountRs={eachTransaction.amount}
        typeOfTransaction={eachTransaction.type}
        deleteTransaction={this.deleteTransaction}
        transactionId={eachTransaction.id}
      />
    ))
  }

  render() {
    const {title, amount, type, transactionDetails} = this.state
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
          <form onSubmit={this.addTransaction} className="form-container">
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
            <select
              name="selector"
              value={type}
              className="inputs-sty"
              onChange={this.handleType}
            >
              <option
                // key={transactionTypeOptions[0].optionId} // Use key for React
                value={transactionTypeOptions[0].optionId}
                className="input-sty"
              >
                {transactionTypeOptions[0].displayText}
              </option>
              <option
                // key={transactionTypeOptions[1].optionId} // Use key for React
                value={transactionTypeOptions[1].optionId}
                className="input-sty"
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
                  <th> </th>
                </tr>
              </thead>
              <tbody>{this.renderTransactionItems()}</tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
