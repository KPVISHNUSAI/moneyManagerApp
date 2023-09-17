import './index.css'

const TransactionItem = props => {
  const {
    titleName,
    transactionId,
    deleteTransaction,
    amountRs,
    typeOfTransaction,
  } = props
  const deleteRow = () => {
    deleteTransaction(transactionId)
  }

  return (
    <li className="headers-li">
      <p className="row-sty">{titleName}</p>
      <p className="row-sty">{amountRs}</p>
      <p className="row-sty">{typeOfTransaction}</p>
      <button className="delete-btn" type="button" onClick={deleteRow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
          data-testid="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
