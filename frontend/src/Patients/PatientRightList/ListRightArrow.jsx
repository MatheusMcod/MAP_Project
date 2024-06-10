import { FaChevronRight } from "react-icons/fa";
import { Button } from "@mui/material";

export default function ListRightArrow() {

	return (
		<Button variant="text" style={buttonStyle}><FaChevronRight /></Button>
	)
}

const buttonStyle = {
	height: "5.3rem",
}
