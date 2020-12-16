import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from 'Utils/reportWebVitals'
import App from 'App'
import './index.css'

const rootElement = document.getElementById('root')

const Application = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

if (rootElement?.hasChildNodes()) {
  hydrate(<Application />, rootElement)
} else {
  render(<Application />, rootElement)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
