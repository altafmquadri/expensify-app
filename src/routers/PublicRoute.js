import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PublicRoute = ({ isAuthenticated,
    component: Component,
    ...rest }) => (
        <Route {...rest} component={(props => (
            !isAuthenticated ? (
                <div>
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to='/dashboard' />
                )
        ))} />
    )

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)

