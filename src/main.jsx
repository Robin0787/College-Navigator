import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/Routes';
import './index.css';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider  client={queryClient}>
    <RouterProvider router={routes} />
    <Toaster position="top-right"/>
  </QueryClientProvider>,
)

