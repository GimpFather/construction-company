import NavbarCallUsButton from "@/components/atoms/Navbar/NavbarCallUsButton";
import NavbarCompanyName from "@/components/atoms/Navbar/NavbarCompanyName";
import Grid2 from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";

const NavbarHeadSection = () => {
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
