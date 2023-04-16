import { Box, BoxProps, Typography, styled } from "@mui/material";

interface UnderlinedTextProps {
  caption: string;
}

const Label = styled(Box)<BoxProps>(({ theme }) => ({
  display: "inline-block",
  position: "relative",
  "&:after": {
    content: '" "',
    height: 3,
    position: "absolute",
    bottom: -5,
    left: "20%",
    backgroundColor: theme.palette.secondary.main,
    width: "60%",
  },
}));

const UnderlinedText = ({ caption }: UnderlinedTextProps) => {
  return (
    <Label>
      <Typography variant="h4" color="primary">
        {caption}
      </Typography>
    </Label>
  );
};

export default UnderlinedText;
