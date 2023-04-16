import { Box, BoxProps, Typography, styled, useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface UnderlinedTextProps {
  caption: string;
}

const UnderlinedText = ({ caption }: UnderlinedTextProps) => {
  const { palette } = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "just",
        stiffness: 200,
        damping: 40,
      }}
      sx={{
        display: "inline-block",
        position: "relative",
        "&:after": {
          content: '" "',
          height: 3,
          position: "absolute",
          bottom: -5,
          left: "20%",
          backgroundColor: palette.secondary.main,
          width: "60%",
        },
      }}
    >
      <Typography variant="h4" color="primary">
        {caption}
      </Typography>
    </Box>
  );
};

export default UnderlinedText;
