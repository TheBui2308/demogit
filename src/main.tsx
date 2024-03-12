import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductContext } from './contexts/product.tsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
    <ProductContext.Provider
     value={[{id: 1, name: "Quan"}, {id: 2, name: "Tung"}]}>
      <BrowserRouter>
      
        <App />
      </BrowserRouter>
    </ProductContext.Provider>
 </React.StrictMode>
)
