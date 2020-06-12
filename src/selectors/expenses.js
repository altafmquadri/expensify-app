import moment from 'moment'

//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch //eslint-disable-next-line
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // return a.createdAt < b.createdAt ? 1 : -1
            return b.createdAt - a.createdAt
        }
        if (sortBy === 'amount') {
            // return a.amount < b.amount ? 1 : -1
            return b.amount - a.amount
        }
    })
}

export default getVisibleExpenses