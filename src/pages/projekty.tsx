/* eslint-disable @next/next/no-img-element */
import PageHeadTag from "@/components/atoms/PageHeadTag/PageHeadTag";
import {
	ImageList,
	ImageListItem,
	ImageListItemBar,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Container from "@mui/material/Container";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import React from "react";

export default function Projekty() {
	const { breakpoints, palette } = useTheme();
	const isDesktop = useMediaQuery(breakpoints.up("md"));

	return (
		<>
			<PageHeadTag title="Projekty" desc="Projekty" />
			<Container maxWidth="xl">
				<ImageList
					variant="quilted"
					cols={isDesktop ? 3 : 1}
					rowHeight={350}
					sx={{ overflow: "hidden" }}
				>
					{projects.map((item, key) => (
						<>
							<ImageListItem
								component={motion.div}
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 40,
								}}
								whileHover={{ opacity: 0.55 }}
								sx={{ padding: "4px" }}
								key={key}
								cols={1}
								rows={1}
							>
								<img
									src={item.link}
									style={{ objectFit: "cover", width: "100%", height: "100%" }}
									alt={item.title}
									loading="lazy"
								/>
								<ImageListItemBar
									sx={{ backgroundColor: palette.primary.main, marginX: "4px" }}
									title={item.title}
								/>
							</ImageListItem>
						</>
					))}
				</ImageList>
			</Container>
		</>
	);
}
