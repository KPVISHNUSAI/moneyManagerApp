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
    <tr>
      <td>{titleName}</td>
      <td>{amountRs}</td>
      <td>{typeOfTransaction}</td>
      <td>
        <button className="delete-btn" type="button" onClick={deleteRow}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
            data-testId="delete"
          />
        </button>
      </td>
    </tr>
  )
}
export default TransactionItem
