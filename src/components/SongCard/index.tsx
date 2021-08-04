import { FC } from "react";
// styles
import { Container } from "./styles";

interface Props {
  name: string;
  album: any;
}

export const SongCard: FC<Props> = ({ name, album }) => {
  return (
    <Container>
      <img src={album.images[1].url} alt="Song's album" />
      <h2>{name}</h2>
    </Container>
  );
};
