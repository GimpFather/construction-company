import { Button, Typography, useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const NavbarCallUsButton = () => {
	const { palette } = useTheme();
	return (
		<Button
			sx={{
				alignSelf: "center",
				backgroundColor: palette.secondary.main,
				display: "flex",
				paddingX: 2,
				borderRadius: 6,
				"&:hover": {
					backgroundColor: palette.primary.main,
				},
			}}
			startIcon={<PhoneIcon sx={{ color: palette.common.white }} />}
		>
			<Typography variant="body1" sx={{ color: palette.common.white }}>
				+48 570 570 303
			</Typography>
		</Button>
	);
};

export default NavbarCallUsButton;
