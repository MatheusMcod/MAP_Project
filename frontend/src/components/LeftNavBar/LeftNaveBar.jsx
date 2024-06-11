import PropTypes from "prop-types";
import { FaHome } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./StyleLeftNavBar.css";
import { CgLogOut } from "react-icons/cg";

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
			</div>

			<div className="sidebar-icons">
				<Link
				to="/logout"
				className={`logout-button ${isOpen ? "logout-button-open" : ""}`}>

					<CgLogOut className="icon" /> <p>Logout</p>
				</Link>
			</div>
		</div>
	);
}
