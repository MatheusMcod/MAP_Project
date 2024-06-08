import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledCard = styled(Card)(({ theme }) => ({
	minWidth: 275,
	margin: theme.spacing(2),
}));

DashboardCard.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

export default function DashboardCard({ title, content }) {
	return (
		<StyledCard>
			<CardContent>
				<Typography variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2">{content}</Typography>
			</CardContent>
		</StyledCard>
	);
}
