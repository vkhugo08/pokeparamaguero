import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// react redux
import { Provider } from 'react-redux'
import  store  from './store'
import { HashRouter } from 'react-router-dom'
// react router dom


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
