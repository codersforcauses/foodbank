import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'
import { Navbar } from 'Components/Navbar'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header>foodbank</header>
      <Navbar></Navbar>
      <Switch>
        {routes.map(({ name, ...route }) => (
          <Route key={name} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default App
