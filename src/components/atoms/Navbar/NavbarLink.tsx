import { Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";

interface NavbarLinkProps {
  caption: string;
  onClick: () => void;
  selected: boolean;
}

const NavbarLink = ({ caption, onClick, selected }: NavbarLinkProps) => {
  const { palette } = useTheme();
  return (
    <Grid2>
      <Typography
        variant="button"
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
        whileHover={{ opacity: 1, color: palette.secondary.main }}
        onClick={onClick}
        sx={{
          position: "relative",
          color: palette.common.white,
          paddingX: 0,
          textTransform: "uppercase",
        }}
      >
        {selected ? (
          <motion.div
            layoutId="underline"
            style={{
              position: "absolute",
              bottom: "-1px",
              width: "100%",
              height: "3px",
              borderRadius: "4px",
              backgroundColor: palette.secondary.main,
            }}
          />
        ) : null}
        {caption}
      </Typography>
    </Grid2>
  );
};

export default NavbarLink;
