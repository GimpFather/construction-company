import { ParallaxBanner } from "react-scroll-parallax";
import { Box, useTheme } from "@mui/material";

interface ParalaxImageProps {
	imageSource: string;
	height: string;
}

const ParalaxImage = ({ imageSource, height }: ParalaxImageProps) => {
	const { palette } = useTheme();

	return (
		<ParallaxBanner
			layers={[
				{
					image: imageSource,
					speed: -15,
				},
			]}
			style={{ height: height, position: "relative" }}
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
