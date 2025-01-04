import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouters from './AppRouters'
import "./global.css";
import Auth0ProviderWithNavigate from './Auth/Auth0ProviderWithNavigate';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithNavigate>
        <AppRouters />
      </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
)
