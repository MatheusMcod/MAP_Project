import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import DashboardGrid from "./DashboardGrid";
export default function Dashboard() {
	const { isOpen } = useOutletContext();

	const [patientsCount, setPatientsCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchPacients() {
			try {
				console.log("chegou aqui");
				const response = await fetch("http://localhost:4444/patient");
				if (!response.ok) {
					throw new Error(`Erro ao buscar dados! Status: ${response.status}`);
				}
				const data = await response.json();
				setPatientsCount(data.data.length);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		}
		fetchPacients();
	}, []);

	const cards = [
		{
			title: "Número de Pacientes",
			content: loading
				? "Carregando..."
				: error
					? `Erro! Status: ${error}`
					: patientsCount.toString(),
			size: 3,
		},
		{ title: "Médicos Disponíveis", content: "74", size: 3 },
		{ title: "Tempo Médio de Espera", content: "00:26:49", size: 3 },
		{ title: "Taxa de Retornos", content: "4,06%", size: 3 },
		{
			title: "Atendimentos Mensais",
			content: "Detalhes dos atendimentos mensais",
			size: 12,
		},
		{
			title: "Atendimentos por Urgência",
			content: "Gráfico de atendimentos por nível de urgência",
			size: 6,
		},
		{
			title: "Atendimentos por Faixa Etária",
			content: "Gráfico de atendimentos por faixa etária",
			size: 6,
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
