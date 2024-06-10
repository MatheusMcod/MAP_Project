import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";

PieChartComponent.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			value: PropTypes.number.isRequired,
		}),
	).isRequired,
};

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChartComponent({ data }) {
	const chartData = {
		labels: data.map((item) => item.name),
		datasets: [
			{
				label: "Atendimentos por Nível de Urgência",
				data: data.map((item) => item.value),
				backgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#9966FF",
					"#FF9F40",
				],
				hoverBackgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#9966FF",
					"#FF9F40",
				],
			},
		],
	};

	return (
		<div style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}>
			<Pie data={chartData} />
		</div>
	);
}
