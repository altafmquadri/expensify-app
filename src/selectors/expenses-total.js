export default (expenses) => {
    return expenses.reduce((sum, n) => sum + n.amount, 0) / 100
}




