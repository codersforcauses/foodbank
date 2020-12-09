import Audio from 'Components/Audio'

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'

const songLocation= 'https://www.w3schools.com/tags/horse.mp3';
const App = () => {
  return (
    <div className='App'>
      <header>foodbank</header>
      <Audio soundFile={songLocation} loop={true} />
      <Switch>
        {routes.map(({ name, ...route }) => (
          <Route key={name} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default App
