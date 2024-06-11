import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import AgePyramidChart from "../Charts/AgePyramidChart";
import PieChartComponent from "../Charts/PieChartComponent";
import DashboardGrid from "./DashboardGrid";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PersonIcon from "@mui/icons-material/Person";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import RepeatIcon from "@mui/icons-material/Repeat";

export default function Dashboard() {
	const { isOpen } = useOutletContext();

	const [patientsData, setPatientsData] = useState([]);
	const [patientsCount, setPatientsCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [averageWaitTime, setAverageWaitTime] = useState("00:00:00");
	const [returnPatientsRate, setReturnPatientsRate] = useState(0);
	const [ageData, setAgeData] = useState({
		labels: [],
		male: [],
		female: [],
	});

	useEffect(() => {
		async function fetchPacients() {
			try {
				const token = localStorage.getItem('token');
				const response = await fetch("http://localhost:4444/patient", {
					headers: {
							'Authorization': `Bearer ${token}`
					}
				});
				if (!response.ok) {
					throw new Error(`Erro ao buscar dados! Status: ${response.status}`);
				}
				const data = await response.json();
				const patientsData = data.data || [];
				setPatientsData(patientsData);
				setPatientsCount(patientsData.length);

				const returnRate = calculateReturnRate(patientsData);
				setReturnPatientsRate(returnRate);

				const ageData = calculateAgeData(patientsData);
				setAgeData(ageData);

				calculateAverageWaitTime(patientsData);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		}
		fetchPacients();
	}, []);

	const calculateAverageWaitTime = (patients) => {
		if (patients.length === 0) {
			setAverageWaitTime("00:00:00");
			return;
		}

		let totalWaitTime = 0;
		patients.forEach((patient) => {
			const waitValue = parseInt(patient.waiting_service.split(" ")[0]);

			totalWaitTime += waitValue;
		});

		const avgWaitTime = totalWaitTime / patients.length;
		const hours = Math.floor(avgWaitTime / 60);
		const minutes = Math.floor(avgWaitTime % 60);
		const seconds = 0;
		setAverageWaitTime(
			`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
		);
	};

	const calculateReturnRate = (patients) => {
		if (patients.length === 0) {
			return 0;
		}

		let returnCount = 0;
		patients.forEach((patient) => {
			if (patient.return_patient) {
				returnCount++;
			}
		});

		return (returnCount / patients.length) * 100;
	};

	const urgencyData = patientsData.reduce((acc, patient) => {
		const urgencyLevel = patient.urgency || "Unknown";
		if (!acc[urgencyLevel]) {
			acc[urgencyLevel] = 0;
		}
		acc[urgencyLevel]++;
		return acc;
	}, {});

	const urgencyChartData = Object.keys(urgencyData).map((key) => ({
		name: key,
		value: urgencyData[key],
	}));

	const calculateAgeData = (patients) => {
		const ageGroups = {
			"0-9": { masculino: 0, feminino: 0 },
			"10-19": { masculino: 0, feminino: 0 },
			"20-29": { masculino: 0, feminino: 0 },
			"30-39": { masculino: 0, feminino: 0 },
			"40-49": { masculino: 0, feminino: 0 },
			"50-59": { masculino: 0, feminino: 0 },
			"60-69": { masculino: 0, feminino: 0 },
			"70-79": { masculino: 0, feminino: 0 },
			"80+": { masculino: 0, feminino: 0 },
		};

		patients.forEach((patient) => {
			const age = patient.age;
			const gender = patient.gender.toLowerCase();

			let group;
			if (age <= 9) group = "0-9";
			else if (age <= 19) group = "10-19";
			else if (age <= 29) group = "20-29";
			else if (age <= 39) group = "30-39";
			else if (age <= 49) group = "40-49";
			else if (age <= 59) group = "50-59";
			else if (age <= 69) group = "60-69";
			else if (age <= 79) group = "70-79";
			else group = "80+";

			if (group && ageGroups[group]) {
				if (gender === "masculino") {
					ageGroups[group].masculino++;
				} else if (gender === "feminino") {
					ageGroups[group].feminino++;
				}
			}
		});

		return {
			labels: Object.keys(ageGroups),
			male: Object.values(ageGroups).map((group) => group.masculino),
			female: Object.values(ageGroups).map((group) => group.feminino),
		};
	};

	const cards = [
		{
			title: "Número de Pacientes",
			content: loading
				? "Carregando..."
				: error
					? `Erro! Status: ${error}`
					: patientsCount.toString(),
			size: 3,
			icon: <PersonIcon />,
		},
		{
			title: "Médicos Disponíveis",
			content: "2",
			size: 3,
			icon: <LocalHospitalIcon />,
		},
		{
			title: "Tempo Médio de Espera",
			content: loading
				? "Carregando..."
				: error
					? `Erro! Status: ${error}`
					: averageWaitTime,
			size: 3,
			icon: <QueryBuilderIcon />,
		},
		{
			title: "Taxa de Retornos",
			content: loading
				? "Carregando..."
				: error
					? `Erro! Status: ${error}`
					: `${returnPatientsRate.toFixed(2)}%`,
			size: 3,
			icon: <RepeatIcon />,
		},
		{
			title: "Atendimentos por Urgência",
			content: <PieChartComponent data={urgencyChartData} />,
			size: 6,
			icon: <AccessTimeIcon />,
		},
		{
			title: "Atendimentos por Faixa Etária",
			content: <AgePyramidChart data={ageData} />,
			size: 6,
			icon: <AccessibilityNewIcon />,
		},
	];

	return (
		<Box sx={{ display: "flex" }}>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					padding: 3,
					marginLeft: isOpen ? "12rem" : "4rem",
					transition: "margin-left 0.3s",
				}}
			>
				<Grid container spacing={2}>
					<DashboardGrid cards={cards} />
				</Grid>
			</Box>
		</Box>
	);
}
