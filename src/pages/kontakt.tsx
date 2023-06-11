import PageHeadTag from "@/components/atoms/PageHeadTag/PageHeadTag";
import ServiceBlock from "@/components/molecules/ServiceBlock/ServiceBlock";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneIcon from "@mui/icons-material/Phone";
import ParalaxImage from "@/components/atoms/ParalaxImage/ParalaxImage";
import Image from "../data/images/stock-image-4.jpg";
import { useRouter } from "next/router";

export default function Kontakt() {
	const { palette } = useTheme();
	const router = useRouter();
	return (
		<>
			<PageHeadTag title="Kontakt" desc="Kontakt" />
			<Container maxWidth="lg">
				<Stack
					direction={{ xs: "column", md: "row" }}
					justifyContent="center"
					alignItems={{ xs: "center", md: "flex-start" }}
					spacing={{ xs: 6 }}
					sx={{ marginY: 8 }}
				>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<ServiceBlock
							title="Telefon"
							description="Skontaktuj się z nami telefonicznie i porozmawiajmy o naszej przyszłej współpracy!"
							icon={
								<LocalPhoneIcon color="secondary" sx={{ fontSize: "68px" }} />
							}
						/>
						<Button
							sx={{
								alignSelf: "center",
								backgroundColor: palette.secondary.main,
								display: "flex",
								marginTop: 2,
								paddingX: 2,
								borderRadius: 6,
								"&:hover": {
									backgroundColor: palette.primary.main,
								},
							}}
							startIcon={<PhoneIcon sx={{ color: palette.common.white }} />}
						>
							<Typography variant="body1" sx={{ color: palette.common.white }}>
								+ 48 779 213 769
							</Typography>
						</Button>
					</Box>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<ServiceBlock
							title="Poczta"
							description="Możesz też napisać nam maila, w którym opisujesz sytuację a my w wolnej chwili skontaktujemy się z Tobą!"
							icon={<EmailIcon color="secondary" sx={{ fontSize: "68px" }} />}
						/>
						<Button
							sx={{
								alignSelf: "center",
								backgroundColor: palette.secondary.main,
								display: "flex",
								marginTop: 2,
								paddingX: 2,
								borderRadius: 6,
								"&:hover": {
									backgroundColor: palette.primary.main,
								},
							}}
							startIcon={<EmailIcon sx={{ color: palette.common.white }} />}
						>
							<Typography variant="body1" sx={{ color: palette.common.white }}>
								fortegaraze@gmail.com
							</Typography>
						</Button>
					</Box>
				</Stack>
			</Container>
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
							router.push("/projekty");
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
							Zobacz nasze projekty i przekonaj się o naszych umiejętnościach!
						</Typography>
					</Button>
				</Box>
			</Box>
		</>
	);
}
