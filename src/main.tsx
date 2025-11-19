import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ShopProvider } from './context/ShopContext.tsx'
import { UserProvider } from './context/UserContext.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CheckoutProvider } from './context/CheckoutContext.tsx'
import { OrdersProvider } from './context/OrdersContext.tsx'

function Main() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

  if (!clientId) {
    throw new Error('Missing required environment variable VITE_GOOGLE_CLIENT_ID')
  }

  return <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <ShopProvider>
          <CheckoutProvider>
            <OrdersProvider>
              <App />
            </OrdersProvider>
          </CheckoutProvider>
        </ShopProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  </StrictMode>
}

createRoot(document.getElementById('root')!).render(<Main />)