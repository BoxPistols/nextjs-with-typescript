import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import ContainedButtons from '../../atoms/button/index'

const TopPage = () => (
    <>
        <Router>
            <h1>This is Top page!</h1>
            <div>
                <Link to='/hoge'>Button</Link>
            </div>

            <Switch>
                <Route path='/hoge'>
                    <ContainedButtons />
                </Route>
            </Switch>
        </Router>
    </>
)

export default TopPage
