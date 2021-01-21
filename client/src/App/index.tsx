import { ModalContainer } from 'Components/Modal'
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(true)
  return (
    <div className='App'>
      <ModalContainer
        header='Header'
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        Text
      </ModalContainer>
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
