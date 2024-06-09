import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";

DashboardGrid.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
			size: PropTypes.number.isRequired,
		}),
	).isRequired,
};
export default function DashboardGrid({ cards }) {
	return (
		<Grid container spacing={2}>
			{cards.map((card, index) => (
				<Grid item xs={12} md={card.size} key={index}>
					<DashboardCard title={card.title} content={card.content} />
				</Grid>
			))}
		</Grid>
	);
}
