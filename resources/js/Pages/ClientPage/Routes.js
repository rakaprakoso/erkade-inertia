import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import App from './App'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:path?">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
