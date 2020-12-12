import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'
import { Navbar } from '../Components/Navbar_1'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
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
