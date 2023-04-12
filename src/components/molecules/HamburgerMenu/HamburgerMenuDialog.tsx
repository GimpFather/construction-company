import { Box } from "@mui/material";
import { links } from "@/data/links";
import MenuItem from "./HamburgerMenuItem";
import { useState } from "react";
import { useRouter } from "next/router";
import NavbarCallUsButton from "@/components/atoms/Navbar/NavbarCallUsButton";
import CloseButton from "@/components/atoms/Hamburger/CloseButton";

interface MenuDialogProps {
  handleCloseDialog: () => void;
}

const MenuDialog = ({ handleCloseDialog }: MenuDialogProps) => {
  const [selected, setSelected] = useState(0);
  const router = useRouter();

  const handleOnClick = (path: string, key: number) => {
    setSelected(key);
    router.push(path);
  };
  return (
    <>
      <CloseButton handleCloseDialog={handleCloseDialog} />
      <Box>
        {links.map((link, key) => {
          return (
            <MenuItem
              key={key}
              caption={link.caption}
              onClick={() => handleOnClick(link.link, key)}
              selected={link.link === router.pathname}
            />
          );
        })}
      </Box>
      <Box alignSelf="center" sx={{ padding: 3 }}>
        <NavbarCallUsButton />
      </Box>
    </>
  );
};

export default MenuDialog;
