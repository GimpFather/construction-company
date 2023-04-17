import { motion } from "framer-motion";
import UnderlinedText from "../../atoms/UnderlinedText/UnderlinedText";
import { Grid, Stack, Typography } from "@mui/material";

interface ServiceBlockProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const ServiceBlock = ({ title, description, icon }: ServiceBlockProps) => {
  return (
    <Stack
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
      sx={{ maxWidth: "320px", marginX: 4 }}
      component={motion.div}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 40,
      }}
    >
      {icon}
      <Grid item>
        <UnderlinedText caption={title} />
      </Grid>
      <Grid item textAlign="center">
        <Typography>{description}</Typography>
      </Grid>
    </Stack>
  );
};

export default ServiceBlock;
