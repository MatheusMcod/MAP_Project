import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Login from "./routes/login"
import Dashboard from './components/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "dashboard",
				element: <Dashboard />
			}
		]
  },
	{
    path: "/login",
    element: <Login />,
		errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
