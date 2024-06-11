import { Typography } from "@mui/material";
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

BarChartComponent.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			ageRange: PropTypes.string.isRequired,
			count: PropTypes.number.isRequired,
		}),
	).isRequired,
};

export default function BarChartComponent({ data }) {
	const chartData = {
		labels: data.map((item) => item.ageRange),
		datasets: [
			{
				label: "Atendimentos por Faixa Etária",
				data: data.map((item) => item.count),
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	return (
		<div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
			<Typography variant="h6" align="center">
				Atendimentos por Faixa Etária
			</Typography>
			<Bar data={chartData} options={options} />
		</div>
	);
}
