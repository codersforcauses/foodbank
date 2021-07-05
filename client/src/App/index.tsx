import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'
import 'animate.css'

const App: React.FC = () => {
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
