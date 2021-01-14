import { ModalContainer } from 'Components/Modal'
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(true)
  return (
    <div className='App'>
      <ModalContainer isOpen={modalOpen} onClose={() => setModalOpen(false)} />
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
