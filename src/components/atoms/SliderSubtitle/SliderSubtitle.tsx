import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const SliderSubtitle = () => {
  const { palette } = useTheme();
  return (
    <Box sx={{ backgroundColor: palette.primary.main }}>
      <Container maxWidth="xl" sx={{ paddingY: 1 }}>
        <Grid
          container
          alignItems="center"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "just",
            stiffness: 200,
            damping: 40,
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ textAlign: { lg: "start", xs: "center" } }}
          >
            <Typography variant="button" color="white">
              Solidny i doświadczony partner do budowy Twojego wymarzonego
              garażu.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ textAlign: { lg: "end", xs: "center" } }}
          >
            <Typography variant="button" color="white">
              Zaufaj nam i pozwól nam zbudować dla Ciebie idealny garaż!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SliderSubtitle;
