import PageHeadTag from "@/components/atoms/PageHeadTag/PageHeadTag";
import Slider from "@/components/organisms/Slider/Slider";
import SliderSubtitle from "@/components/atoms/SliderSubtitle/SliderSubtitle";
import Container from "@mui/material/Container";
import OurServices from "@/components/organisms/OurServices/OurServices";
import ParalaxImage from "@/components/atoms/ParalaxImage/ParalaxImage";
import Image from "../data/images/stock-image-4.jpg";
import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
	const { palette } = useTheme();
	const router = useRouter();

	return (
		<>
			<PageHeadTag title="index" desc="index" />
			<Container maxWidth={false} disableGutters sx={{ paddingTop: 1 }}>
				<Slider />
				<SliderSubtitle />
				<OurServices />
				<Box sx={{ marginTop: 10, position: "relative" }}>
					<ParalaxImage imageSource={Image.src} height="480px" />
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							color: palette.common.white,
							zIndex: 99,
						}}
					>
						<Button
							onClick={() => {
								router.push("/kontakt");
							}}
							sx={{
								backgroundColor: "none",
								display: "flex",
								paddingX: 2,
								border: "3px solid",
								borderRadius: 2,
								borderColor: palette.common.white,
								"&:hover": {
									backgroundColor: palette.secondary.main,
								},
							}}
						>
							<Typography variant="h6" sx={{ color: palette.common.white }}>
								Szukasz więcej informacji lub chcesz się umówić?
							</Typography>
						</Button>
					</Box>
				</Box>
			</Container>
		</>
	);
}
