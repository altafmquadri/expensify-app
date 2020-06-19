import React from 'react';
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectedExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expenseTotal).format('$0,0.00')
    return (
        <div>
            Expenses Summary
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>

    )
}

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: expenses.length,
        expenseTotal: selectedExpensesTotal(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)