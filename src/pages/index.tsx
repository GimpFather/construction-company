import PageHeadTag from "@/components/atoms/PageHeadTag/PageHeadTag";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <>
      <PageHeadTag title="index" desc="index" />
      <Container maxWidth="xl">
        <p>To jest strona główna</p>
      </Container>
    </>
  );
}
