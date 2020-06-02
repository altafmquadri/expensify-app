import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
)

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
)

const EditExpensePage = () => (
    <div>
        This is for editing expenses component
    </div>
)

const HelpPage = () => (
    <div>
        This is help component
    </div>
)

const NotFoundPage = () => (
    <div>
        404! <Link to='/'>Go Home</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <Link to="/">Home</Link>
        <Link to='/create'>Add Expense</Link>
        <Link to='/edit'>Edit Expense</Link>
        <Link to='/help'>Help</Link>
    </header>
)

const routes = (
    <div>
        <Header />
        <Router>
            <Switch>
                <Route exact path='/' component={ExpenseDashboardPage} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </div>
)


ReactDOM.render(routes, document.getElementById('app'))