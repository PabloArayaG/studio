import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import RouterAnalytics from './components/RouterAnalytics'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterAnalytics />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

