import { ModalContainer } from 'Components/Modal'
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from 'router'

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
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
      <button onClick={() => setModalOpen(true)}>Test</button>
    </div>
  )
}

export default App
