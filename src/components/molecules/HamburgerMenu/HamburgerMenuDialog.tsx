import {
  AppBar,
  Button,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface MenuDialogProps {
  handleCloseDialog: () => void;
}

const MenuDialog = ({ handleCloseDialog }: MenuDialogProps) => {
  return (
    <>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCloseDialog}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MenuDialog;
