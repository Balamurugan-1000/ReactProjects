import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes } from 'react-router';
import FullScreenRender from './Routes/FullScreenRender.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  
     <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
          
      </Router>

    </React.StrictMode>,

)

