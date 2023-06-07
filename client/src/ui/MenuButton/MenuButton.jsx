import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";

const ButtonImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

function MenuButton({ imageSrc, onClick, alt }) {
  return (
    <IconButton onClick={onClick} sx={{ width: "fit-content", margin: "1rem" }}>
      <ButtonImage draggable="false" src={imageSrc} alt={alt} />
    </IconButton>
  );
}

export default MenuButton;
