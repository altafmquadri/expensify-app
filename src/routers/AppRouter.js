import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'

export let history = createBrowserHistory()


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={LoginPage} />
                {/* <Route exact path='/' render={routerProps => <LoginPage {...routerProps} history={history} />} /> */}
                <Route path='/dashboard' component={ExpenseDashboardPage} />
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter