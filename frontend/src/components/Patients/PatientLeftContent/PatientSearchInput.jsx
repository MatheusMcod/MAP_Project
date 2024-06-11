import PropTypes from "prop-types";

PatientSearchInput.propTypes = {
	onFilterChange: PropTypes.func
};

export default function PatientSearchInput({ onFilterChange }) {

  const handleChange = (e) => {
    const newFilter = e.target.value;
    onFilterChange(newFilter);
  };

	return (
		<input type="text" placeholder="Nome ou Email" style={input_style} onChange={handleChange}></input>
	)
}

const input_style = {
	borderBottom: '1px  solid',
	borderTop: '1px  solid',
	borderLeft: '1px  solid',
	borderRadius: "10px 0 0 10px",
	padding: "4px",
	width: "40%",
	height: "1.5rem"
};