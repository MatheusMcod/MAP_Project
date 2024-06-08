import { Outlet } from "react-router-dom";
import Sidebar from "../components/LeftNavBar/LeftNaveBar";

export default function Root() {
	return (
		<>
			<Sidebar />
			<div>
				<Outlet />
			</div>
		</>
	);
}
