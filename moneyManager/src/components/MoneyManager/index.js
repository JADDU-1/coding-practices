import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

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
  ...
  render() {
    const {amount, title, moneyList, optionId} = this.state
    const income = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="background-container">
        <div className="background-top-container">
          <h1>Hi, Richard</h1>
          <p>
            welcome back to your<span> Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} />
        <div className="bottom-container">
          <form className="form-container" onSubmit={this.onAmountDetails}>
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              id="title"
              className="form-input"
              value={title}
              onChange={this.onChangeTitle}
            />
            <br />
            <label htmlFor="amount">AMOUNT</label>
            <br />
            <input
              id="amount"
              className="form-input"
              value={amount}
              onChange={this.onChangeAmount}
            />
            <br />
            <label htmlFor="moneyType">TYPE</label>
            <br />
            <select
              id="moneyType"
              className="form-input"
              value={optionId}
              onChange={this.onChangeOptionId}
            >
              {transactionTypeOptions.map(eachTransaction => (
                <option
                  value={eachTransaction.optionId}
                  key={eachTransaction.optionId}
                >
                  {eachTransaction.displayText}
                </option>
              ))}
            </select>
            <br />
            <button type="submit" className="form-button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <ul className="History-container">
              <li className="Title-container list-container">
                <p className="Title-container Title-container1">Title</p>
                <p className="Title-container Title-container1">Amount</p>
                <p className="Title-container Title-container1">Type</p>
              </li>
              {/* </ul>
            <ul className="History-container History-container1"> */}
              {moneyList.map(eachList => (
                <TransactionItem
                  eachAmount={eachList}
                  key={eachList.id}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
