import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'// import stor 
import { Provider } from 'react-redux'
// provider puri app ko redux store provide krega  

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
