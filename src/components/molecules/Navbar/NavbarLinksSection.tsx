import NavbarLink from "@/components/atoms/Navbar/NavbarLink";
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import { useState } from "react";

const NavbarLinksSection = () => {
  const links = [
    {
      caption: "Strona Główna",
      link: "/",
    },
    {
      caption: "Projekty",
      link: "/projekty",
    },
    {
      caption: "O nas",
      link: "/o-nas",
    },
    {
      caption: "Kontakt",
      link: "/kontakt",
    },
  ];

  const [selected, setSelected] = useState(0);
  const router = useRouter();

  const handleOnClick = (path: string, key: number) => {
    setSelected(key);
    router.push(path);
  };

  console.log(router.pathname);

  return (
    <Container maxWidth="xl">
      <Grid2 container spacing={2}>
        {links.map((link, key) => {
          return (
            <NavbarLink
              caption={link.caption}
              onClick={() => handleOnClick(link.link, key)}
              selected={link.link === router.pathname}
            />
          );
        })}
      </Grid2>
    </Container>
  );
};

export default NavbarLinksSection;
