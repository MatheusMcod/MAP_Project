import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";

DashboardGrid.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
				.isRequired,
			size: PropTypes.number.isRequired,
			icon: PropTypes.element,
		}),
	).isRequired,
};
export default function DashboardGrid({ cards }) {
	return (
		<Grid container spacing={2}>
			{cards.map((card, index) => (
				<Grid item xs={12} md={card.size} key={index}>
					<DashboardCard
						title={card.title}
						content={card.content}
						icon={card.icon}
					/>
				</Grid>
			))}
		</Grid>
	);
}
