
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ShopProvider } from './context/ShopContext.tsx'
import { UserProvider } from './context/UserContext.tsx'
import { CheckoutProvider } from './context/CheckoutContext.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from './query/queryClient.ts'
import { initGlobalErrorHandler } from './utils/globalErrorHandler.ts'

initGlobalErrorHandler();

function Main() {

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ShopProvider>
            <CheckoutProvider>
              <App />
            </CheckoutProvider>
          </ShopProvider>
        </UserProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Main />)