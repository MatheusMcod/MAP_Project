import PropTypes from "prop-types";
import Button from '@mui/material/Button';

PatientButton.propTypes = {
	content: PropTypes.string.isRequired,
	modalProp: PropTypes.func
};

export default function PatientButton({ content, modalProp }) {
	return (
		<Button variant="contained" onClick={modalProp} style={buttonStyle}>{content}</Button>
	)
}

const buttonStyle = {
	backgroundColor: "#0c5a72e0",
	width: "45%",
	borderRadius: "10px",
	height: "1.8rem",
	color: "white",
	cursor: "pointer"
}