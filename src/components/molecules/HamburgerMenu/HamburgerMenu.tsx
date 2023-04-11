import MenuIcon from "@mui/icons-material/Menu";
import { Dialog } from "@mui/material";
import { useState } from "react";
import MenuDialog from "./HamburgerMenuDialog";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuIcon fontSize="large" color="secondary" onClick={handleOpenDialog} />
      <Dialog
        fullScreen
        open={open}
        onClose={handleCloseDialog}
        // TransitionComponent={Transition}
      >
        <MenuDialog handleCloseDialog={handleCloseDialog} />
      </Dialog>
    </>
  );
};

export default HamburgerMenu;
