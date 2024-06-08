import { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./StyleLeftNavBar.css";

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={`sidebar ${isOpen ? "open" : ""}`}
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<div className="sidebar-icons">
				<Link
					to="/dashboard"
					className={`dashboard-button ${isOpen ? "dashboard-button-open" : ""}`}
				>
					<FaHome className="icon" /> <p>Dashboard</p>
				</Link>
				<Link
					className={`patient-button ${isOpen ? "patient-button-open" : ""}`}
				>
					<FaHospitalUser className="icon" /> <p>Pacientes</p>
				</Link>
				<Link className={`user-button ${isOpen ? "user-button-open" : ""}`}>
					<FaUser className="icon" /> <p>Usuarios</p>
				</Link>
			</div>
		</div>
	);
}
