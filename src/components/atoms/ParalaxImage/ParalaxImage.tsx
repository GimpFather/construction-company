import { ParallaxBanner } from "react-scroll-parallax";
import Image from "../../../data/images/stock-image-4.jpg";
import { Box, Typography, useTheme } from "@mui/material";

const ParalaxImage = () => {
  const { palette } = useTheme();

  return (
    <ParallaxBanner
      layers={[
        {
          image: Image.src,
          speed: -15,
        },
      ]}
      style={{ height: "360px", position: "relative" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: palette.primary.main,
          opacity: 0.6,
          zIndex: 1,
        }}
      ></Box>
    </ParallaxBanner>
  );
};

export default ParalaxImage;
