import PageHeadTag from "@/components/atoms/PageHeadTag/PageHeadTag";
import Slider from "@/components/organisms/Slider/Slider";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <>
      <PageHeadTag title="index" desc="index" />
      <Container maxWidth={false} disableGutters sx={{ paddingY: 1 }}>
        <Slider />
      </Container>
    </>
  );
}
