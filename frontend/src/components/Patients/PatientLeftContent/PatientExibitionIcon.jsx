import { FaUserInjured } from "react-icons/fa";

export default function PatientExibitionIcon() {
	return (
		<div style={iconContainer}><FaUserInjured style={iconStyle}/></div>
	)
}

const iconContainer = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "5rem",
	height: "5rem",
	borderRadius: "50%",
	backgroundColor: "#2293f4"
}

const iconStyle = {
	fontSize: "45px"
}