import AudioComponent from 'Components/AudioComponent'

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'

const songLocation= 'https://freesound.org/data/previews/475/475736_4397472-lq.mp3';
const App = () => {
  return (
    <div className='App flex flex-col h-screen'>
      <header >foodbank</header>
      <AudioComponent soundFile={songLocation} loop={true}  />
      <Switch>
        {routes.map(({ name, ...route }) => (
          <Route key={name} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default App
