import { IoSearchSharp } from "react-icons/io5";

export default function PatientSearchIcon() {
	return (
		<div style={searchIconContainer}><IoSearchSharp /></div>
	)
}

const searchIconContainer = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#0c5a72e0",
	color: "white",
	width: "1.8rem",
	height: "1.6rem",
	border: "1px solid"
}