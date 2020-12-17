import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'

const App = () => {
  return (
    <div className='App'>
      <header>foodbank</header>
      <Switch>
        {routes.map(({ name, ...route }) => (
          <Route key={name} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default App
