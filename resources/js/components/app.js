import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchAppBar from './navbar'
import SignInSide from './login'
import SignUp from './register'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <SearchAppBar />
                    <SignInSide/>
                    <SignUp/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
