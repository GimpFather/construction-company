import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CloseButtonProps {
  handleCloseDialog: () => void;
}

const CloseButton = ({ handleCloseDialog }: CloseButtonProps) => {
  return (
    <Box display="flex" justifyContent="end" sx={{ padding: 2 }}>
      <IconButton
        onClick={handleCloseDialog}
        aria-label="close"
        sx={{ justifyContent: "flex-end", padding: 2 }}
      >
        <CloseIcon fontSize="large" color="primary" />
      </IconButton>
    </Box>
  );
};

export default CloseButton;
