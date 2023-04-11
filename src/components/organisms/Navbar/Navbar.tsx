import NavbarHeadSection from "@/components/molecules/Navbar/NavbarHeadSection";
import NavbarLinksSection from "@/components/molecules/Navbar/NavbarLinksSection";
import { Container, useTheme } from "@mui/material";

const Navbar = () => {
  const { palette } = useTheme();
  return (
    <>
      <Container maxWidth="xl">
        <NavbarHeadSection />
      </Container>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          backgroundColor: palette.primary.main,
        }}
      >
        <NavbarLinksSection />
      </Container>
    </>
  );
};

export default Navbar;
