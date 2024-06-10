import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LeftContentBar from "./LeftContentBar";
import RightListPatients from "./RightListPatients";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import PatientModalAdd from "./PatientModalAdd";

export default function PatientsLayout() {
	const { isOpen } = useOutletContext();
	const [patients, setPatients] = useState([]);
	const [error, setError] = useState(null);

	const [filterPatient, setFilterPatient] = useState('');

  const handleFilterPatient = (filteredPatients) => {
    setFilterPatient(filteredPatients);
  };

	useEffect(() => {
		async function fetchPacients() {
			try {
				const response = await fetch("http://localhost:4444/patient");
				if (!response.ok) {
					throw new Error(`Erro ao buscar dados! Status: ${response.status}`);
				}
				const data = await response.json();
				setPatients(data.data);
			} catch (error) {
				setError(error.message);
			}
		}
		fetchPacients();
	}, []);

	return (
		<Box component="main" sx={{ flexGrow: 1, padding: 3, marginLeft: isOpen ? "12rem" : "4rem", transition: "margin-left 0.3s", height: "95vh"}}>
			<Grid container spacing={2}>
				<LeftContentBar onFilterChange={handleFilterPatient}/>
				<RightListPatients patients={patients} error={error} filterPatient={filterPatient}/>
			</Grid>
		</Box>
	)
}