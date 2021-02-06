import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'

import { AuthProvider } from 'Contexts/AuthContext'
import PrivateRoute from 'Components/PrivateRoute'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className='App'>
        <header>foodbank</header>
        <Switch>
          {routes.map(({ name, isPrivate, ...route }) => {
            return isPrivate ? (
              <PrivateRoute key={name} {...route} />
            ) : (
              <Route key={name} {...route} />
            )
          })}
        </Switch>
      </div>
    </AuthProvider>
  )
}

export default App
