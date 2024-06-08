import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./index.css";
import Login from "./routes/login";
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
