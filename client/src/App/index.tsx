import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'

import { AuthProvider } from 'Contexts/AuthContext'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className='App'>
        <header>foodbank</header>
        <Switch>
          {routes.map(({ name, ...route }) => (
            <Route key={name} {...route} />
          ))}
        </Switch>
      </div>
    </AuthProvider>
  )
}

export default App
