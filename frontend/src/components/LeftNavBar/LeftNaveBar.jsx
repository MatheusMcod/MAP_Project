import PropTypes from "prop-types";
import { FaHome, FaUser } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./StyleLeftNavBar.css";

Sidebar.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	toggleSidebar: PropTypes.func.isRequired,
};

export default function Sidebar({ isOpen, toggleSidebar }) {
	return (
		<div
			className={`sidebar ${isOpen ? "open" : ""}`}
			onMouseEnter={toggleSidebar}
			onMouseLeave={toggleSidebar}
		>
			<div className="sidebar-icons">
				<Link
					to="/dashboard"
					className={`dashboard-button ${isOpen ? "dashboard-button-open" : ""}`}
				>
					<FaHome className="icon" /> <p>Dashboard</p>
				</Link>
				<Link
					to="/patients"
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
