import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Router } from 'react-router-dom'
import StackContextProvider from './context/StackContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  <BrowserRouter>
    <StackContextProvider>
      <App />
    </StackContextProvider>
  </BrowserRouter>,
)

// ReactDOM.render(<App />, document.getElementById("root"));
