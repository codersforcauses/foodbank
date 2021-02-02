import React, { useContext } from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'

import { AuthContext } from 'Contexts/AuthContext'

interface PrivateRouteProps {
  component: React.FC<RouteComponentProps>
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
