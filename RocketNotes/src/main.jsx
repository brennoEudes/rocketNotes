import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// O ReactDom vai renderizar a div "root"!
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
