import { Box, Typography } from "@mui/material";

const NavbarCompanyName = () => {
	return (
		<Box display="flex">
			<Typography variant="h4" color="secondary" sx={{ fontWeight: "500" }}>
				FORTE
			</Typography>
			<Typography variant="h4" color="primary" sx={{ fontWeight: "500" }}>
				GARAŻE
			</Typography>
		</Box>
	);
};

export default NavbarCompanyName;
