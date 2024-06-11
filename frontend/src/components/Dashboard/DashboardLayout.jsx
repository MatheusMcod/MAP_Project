import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import DashboardContent from "./Dashboard";

export default function DashboardLayout() {
	return (
		<Box sx={{ display: "flex", flexDirection: "row" }}>
			<Grid item xs={9}>
				<DashboardContent />
			</Grid>
		</Box>
	);
}
