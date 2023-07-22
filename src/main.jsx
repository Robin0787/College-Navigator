import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './Router/Routes'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider  client={queryClient}>
    <RouterProvider router={routes} />
  </QueryClientProvider>,
)

