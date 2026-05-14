import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './styles'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient() // мозг, который будет хранить кэш запросов

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
