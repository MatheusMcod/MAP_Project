import Grid from "@mui/material/Grid";
import { Content } from "./PatientLeftContent/index";
import PropTypes from "prop-types";
import { useState } from "react";
import PatientModalAdd from "./PatientModalAdd";

LeftContentBar.propTypes = {
	onFilterChange: PropTypes.func.isRequired
};


export default function LeftContentBar({ onFilterChange }) {
	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	return (
		<Grid item xs={4} sx={{ backgroundColor: 'rgb(228, 224, 224)', padding: 2, height: '95vh', borderRadius: '10px'}}>
			<div style={contentContainer}>
				<div style={exibitionIconContainer}>
					<Content.ExibitionIcon />
				</div>
				<div style={inputContainer}>
					<Content.SearchInput onFilterChange={onFilterChange}/> <Content.SearchIcon/>
				</div>
				<div style={buttonContainer}>
					<Content.Button modalProp={handleOpen} content={"Adicionar"} />
				</div>
			</div>

			<PatientModalAdd open={open} handleClose={handleClose}/>
		</Grid>
	)
}

const contentContainer = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
}

const exibitionIconContainer = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "4rem",
	marginTop: "20px"
}

const inputContainer = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "4rem"
}

const buttonContainer = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "2rem"
}