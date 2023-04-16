import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

interface SlideProps {
  src: string;
  width: number;
  height: number;
}

const Slide = ({ src, width, height }: SlideProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up("sm"));

  return (
    <Box sx={{ width: "100%", height: isDesktop ? "720px" : "360px" }}>
      <Image
        src={src}
        width={width}
        height={height}
        alt="Stock 1"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default Slide;
