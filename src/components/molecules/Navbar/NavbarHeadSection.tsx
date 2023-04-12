import NavbarCallUsButton from "@/components/atoms/Navbar/NavbarCallUsButton";
import NavbarCompanyName from "@/components/atoms/Navbar/NavbarCompanyName";
import Grid2 from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useMediaQuery, useTheme } from "@mui/material";

const NavbarHeadSection = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up("sm"));

  return (
    <Grid2
      container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 40,
      }}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        paddingY: 6,
      }}
    >
      <NavbarCompanyName />
      {isDesktop ? <NavbarCallUsButton /> : <HamburgerMenu />}
    </Grid2>
  );
};

export default NavbarHeadSection;
