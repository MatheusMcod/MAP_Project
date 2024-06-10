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
	BarElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
);

AgePyramidChart.propTypes = {
	data: PropTypes.shape({
		labels: PropTypes.arrayOf(PropTypes.string).isRequired,
		male: PropTypes.arrayOf(PropTypes.number).isRequired,
		female: PropTypes.arrayOf(PropTypes.number).isRequired,
	}).isRequired,
};

export default function AgePyramidChart({ data }) {
	const chartData = {
		labels: data.labels,
		datasets: [
			{
				label: "Homens",
				data: data.male,
				backgroundColor: "blue",
			},
			{
				label: "Mulheres",
				data: data.female,
				backgroundColor: "pink",
			},
		],
	};

	const options = {
		indexAxis: "y",
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
		responsive: true,
		maintainAspectRatio: true,
	};

	return (
		<div style={{ height: "100%", width: "100%" }}>
			<Bar data={chartData} options={options} />
		</div>
	);
}
