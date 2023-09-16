// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {transactionDetails} = props
  const {balance, income, expenses} = transactionDetails
  return (
    <div className="money-details-container">
      <div className="money-container balance-container">
        <img
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="logo-img"
        />
        <div className="numeric-container">
          <p className="text-sty">Your Balance</p>
          <h1 className="text-sty">Rs {balance}</h1>
        </div>
      </div>
      <div className="money-container income-container">
        <img
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="logo-img"
        />
        <div className="numeric-container">
          <p className="text-sty">Your Income</p>
          <h1 className="text-sty">Rs {income}</h1>
        </div>
      </div>
      <div className="money-container expenses-container">
        <img
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="logo-img"
        />
        <div className="numeric-container">
          <p>Your Expenses</p>
          <h1>Rs {expenses}</h1>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
