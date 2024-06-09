import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/LeftNavBar/LeftNaveBar";

export default function Root() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<div>
				<Outlet context={{ isOpen }} />
			</div>
		</>
	);
}
