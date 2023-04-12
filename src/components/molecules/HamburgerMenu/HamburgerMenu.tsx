import MenuIcon from "@mui/icons-material/Menu";
import { Dialog, IconButton } from "@mui/material";
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
      <IconButton onClick={handleOpenDialog}>
        <MenuIcon fontSize="large" color="secondary" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            height: "100vh",
            maxHeight: "100vh",
            minWidth: "250px",
            margin: 0,
            borderRadius: 0,
            position: "absolute",
            justifyContent: "space-between",
            right: 1,
          },
        }}
        // TransitionComponent={Transition}
      >
        <MenuDialog handleCloseDialog={handleCloseDialog} />
      </Dialog>
    </>
  );
};

export default HamburgerMenu;
