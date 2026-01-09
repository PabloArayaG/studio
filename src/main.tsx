import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import RouterAnalytics from './components/RouterAnalytics'
import './index.css'

import { statsigClient } from './lib/statsig'

async function bootstrap() {
  // 1️⃣ Inicializa Statsig ANTES de renderizar
  await statsigClient.initializeAsync()

  // 2️⃣ Render normal de tu app
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <RouterAnalytics />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

bootstrap()
