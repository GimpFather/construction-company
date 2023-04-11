import NavbarCallUsButton from "@/components/atoms/Navbar/NavbarCallUsButton";
import NavbarCompanyName from "@/components/atoms/Navbar/NavbarCompanyName";
import Grid2 from "@mui/material/Unstable_Grid2";

const NavbarHeadSection = () => {
  return (
    <Grid2
      container
      justifyContent="space-between"
      sx={{
        paddingY: 6,
      }}
    >
      <NavbarCompanyName />
      <NavbarCallUsButton />
    </Grid2>
  );
};

export default NavbarHeadSection;
