import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

const SliderSubtitle = () => {
  const { palette } = useTheme();
  return (
    <Box sx={{ backgroundColor: palette.primary.main }}>
      <Container maxWidth="xl" sx={{ paddingY: 1 }}>
        <Grid container alignItems="center">
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
