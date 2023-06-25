interface JogoProps {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  jogos: JogoProps[]
}

export default JogoProps