import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { AuthContext } from 'Contexts/AuthContext'
import { RouterElement } from 'router'

const PrivateRoute: React.FC<Omit<RouterElement, 'name'>> = ({
  component,
  ...props
}) => {
  const { currentUser } = useContext(AuthContext)
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Route
      {...props}
      component={() => <Redirect to={{ pathname: '/login' }} />}
      render={undefined}
    />
  )
}

export default PrivateRoute
