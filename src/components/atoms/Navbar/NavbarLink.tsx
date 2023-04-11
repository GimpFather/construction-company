import { Button, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

interface NavbarLinkProps {
  caption: string;
  onClick: () => void;
  selected: boolean;
}

const NavbarLink = ({ caption, onClick }: NavbarLinkProps) => {
  const { palette } = useTheme();
  return (
    <Grid2>
      <Button
        variant="text"
        onClick={onClick}
        sx={{ color: palette.common.white, paddingX: 0 }}
      >
        {caption}
      </Button>
    </Grid2>
  );
};

export default NavbarLink;
