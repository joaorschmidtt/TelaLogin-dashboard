import React from 'react';
import ReactDOM from 'react-dom/client';
// A linha "import App from './App.jsx';" foi removida.
import './index.css';

// 1. Importe as funções necessárias da v7
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 2. Importe seus componentes de página
import Login from './Components/Login/Login.jsx';
import Dashboard from './Components/Dashboard.jsx';

// 3. Crie o roteador com a definição das suas rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

// 4. Forneça o roteador para a sua aplicação usando <RouterProvider>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
