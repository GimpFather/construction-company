import { Box, Typography } from "@mui/material";

const NavbarCompanyName = () => {
  return (
    <Box display="flex">
      <Typography variant="h4" color="secondary" sx={{ fontWeight: "500" }}>
        K2
      </Typography>
      <Typography variant="h4" color="primary" sx={{ fontWeight: "500" }}>
        GARAGE
      </Typography>
    </Box>
  );
};

export default NavbarCompanyName;
