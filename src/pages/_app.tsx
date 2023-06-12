import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/defaultTheme";
import type { AppProps } from "next/app";
import Navbar from "@/components/organisms/Navbar/Navbar";
import "../styles/swiper.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ParallaxProvider>
			<CssBaseline>
				<Analytics />
				<ThemeProvider theme={theme}>
					<Navbar />
					<Component {...pageProps} />
				</ThemeProvider>
			</CssBaseline>
		</ParallaxProvider>
	);
}
