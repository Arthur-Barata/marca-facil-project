import { Box, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  RobotoBoldMedium,
  RobotoBoldSmall,
  RobotoSmall,
} from "shared/typography/Roboto";
import { CardStyled } from "./styles";

interface ICard {
  imageUrl: string;
  imageData?: string;
  name: string;
  capacity: number;
  unit: string;
  description: string;
  handleClick: any;
}

function getImageUrl(imageData) {
  if (!imageData) return null;
  const byteCharacters = atob(imageData);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  const blob = new Blob([byteArray], { type: "image/jpeg" });
  return URL.createObjectURL(blob);
}
export default function LabCard({
  imageUrl,
  imageData,
  capacity,
  name,
  unit,
  description,
  handleClick,
}: ICard) {
  return (
    <CardStyled onClick={() => handleClick?.()}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageData ?? imageUrl}
          alt="Imagem"
        />
        <CardContent>
          <RobotoBoldMedium gutterBottom variant="h5" component="div">
            {name}
          </RobotoBoldMedium>
          <Box>
            <RobotoBoldSmall color={"text.secondary"}>Unidade:</RobotoBoldSmall>
            <RobotoSmall color={"text.secondary"}> {unit}</RobotoSmall>
          </Box>

          <Box>
            <RobotoBoldSmall color={"text.secondary"}>
              Capacidade:
            </RobotoBoldSmall>
            <RobotoSmall color={"text.secondary"}> {capacity}</RobotoSmall>
          </Box>
          <Box>
            <RobotoBoldSmall color={"text.secondary"}>
              Descrição:
            </RobotoBoldSmall>
            <RobotoSmall color={"text.secondary"}> {description}</RobotoSmall>
          </Box>
        </CardContent>
      </CardActionArea>
    </CardStyled>
  );
}
