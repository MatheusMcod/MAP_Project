import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LeftNaveBar from "../LeftNavBar/LeftNaveBar";
import DashboardContent from "./Dashboard";

export default function DashboardLayout() {
	return (
		<Box sx={{ display: "flex", flexDirection: "row" }}>
			<Grid item xs={3}>
				<LeftNaveBar />
			</Grid>
			<Grid item xs={9}>
				<DashboardContent />
			</Grid>
		</Box>
	);
}
