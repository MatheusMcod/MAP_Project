import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import ProtectedRoute from "./components/ProtectedRouter/ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./index.css";
//import Patients from "./components/Patients/PatientsLayout";
import Login from "./routes/login";
import Logout from "./components/ProtectedRouter/Logout";
import Root from "./routes/root";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "logout",
				element: <Logout />,
			},
			{
				path: "patients",
				element: <Patients />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
