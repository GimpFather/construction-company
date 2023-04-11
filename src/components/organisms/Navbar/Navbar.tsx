import NavbarHeadSection from "@/components/molecules/Navbar/NavbarHeadSection";
import NavbarLinksSection from "@/components/molecules/Navbar/NavbarLinksSection";
import { Container, useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
  const { palette, breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up("sm"));
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
        {isDesktop && <NavbarLinksSection />}
      </Container>
    </>
  );
};

export default Navbar;
