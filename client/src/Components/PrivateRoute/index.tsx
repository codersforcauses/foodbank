import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { AuthContext } from 'Contexts/AuthContext'

interface PrivateRouteProps {
  component: React.FC<any>
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...props
}) => {
  const { currentUser } = useContext(AuthContext)
  return (
    <Route
      {...props}
      render={componentProps =>
        currentUser ? (
          <Component {...componentProps} />
        ) : (
          <Redirect to='/login' />
        )
      }
    ></Route>
  )
}

export default PrivateRoute
