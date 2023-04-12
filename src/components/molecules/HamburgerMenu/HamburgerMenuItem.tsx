import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface HamburgerLinkProps {
  caption: string;
  onClick: () => void;
  selected: boolean;
}

const MenuItem = ({ caption, onClick, selected }: HamburgerLinkProps) => {
  const { palette } = useTheme();

  return (
    <Box sx={{ padding: 2, position: "relative" }}>
      <Typography
        onClick={onClick}
        component={motion.div}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 40,
        }}
        variant="h6"
        color={selected ? palette.secondary.main : palette.primary.main}
        textTransform="uppercase"
      >
        {selected && (
          <motion.div
            layoutId="underline"
            style={{
              position: "absolute",
              top: "25%",
              left: 0,
              width: "5px",
              height: "50%",
              borderRadius: 0,
              backgroundColor: palette.secondary.main,
            }}
          />
        )}
        {caption}
      </Typography>
    </Box>
  );
};

export default MenuItem;
