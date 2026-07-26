import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import ShopContext from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  	<KindeProvider
		clientId="84ca6e085a18412092cd92be88c26865"
		domain="https://rtyu.kinde.com"
		redirectUri="http://localhost:5173"
		logoutUri="http://localhost:5173"
	>
		<ShopContext>
    <App />

</ShopContext>
     
	</KindeProvider>
  </BrowserRouter>


)
