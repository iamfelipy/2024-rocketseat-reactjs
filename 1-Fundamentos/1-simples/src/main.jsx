import React from 'react' //core do react
import ReactDOM from 'react-dom/client' //react para client>browser...
import {App} from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
