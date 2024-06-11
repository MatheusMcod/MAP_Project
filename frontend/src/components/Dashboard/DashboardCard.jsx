import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledCard = styled(Card)(({ theme }) => ({
	minWidth: 275,
	margin: theme.spacing(2),
	borderRadius: "15px",
	boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
	transition: "0.3s",
	"&:hover": {
		boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
	},
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	flexDirection: "row",
	width: "100%",
	padding: theme.spacing(2),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "50%",
	width: "50px",
	height: "50px",
	backgroundColor: blue[500], // Change based on card type
	marginRight: theme.spacing(2),
}));

DashboardCard.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	icon: PropTypes.element,
};

export default function DashboardCard({ title, content, icon }) {
	return (
		<StyledCard>
			<StyledCardContent>
				{icon && <IconWrapper>{icon}</IconWrapper>}
				<Box sx={{ flex: 1 }}>
					<Typography variant="h6" component="div">
						{title}
					</Typography>
					{typeof content === "string" ? (
						<Typography variant="body1">{content}</Typography>
					) : (
						<Box sx={{ height: 300 }}>{content}</Box>
					)}
				</Box>
			</StyledCardContent>
		</StyledCard>
	);
}
