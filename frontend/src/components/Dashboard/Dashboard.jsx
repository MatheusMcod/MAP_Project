import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DashboardGrid from "./DashboardGrid";

export default function Dashboard() {
	const cards = [
		{ title: "Número de Pacientes", content: "9608", size: 3 },
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
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				marginLeft: "5rem",
				marginTop: "2.5rem",
			}}
		>
			<Grid container spacing={2}>
				<DashboardGrid cards={cards} />
			</Grid>
		</Box>
	);
}
