import { Container, Profile } from "./styles";
import {Input} from '../Input';

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquise pelo título"/>
      <Profile>
        <div>
          <strong>Thiago Torres</strong>
          <a href="#">Sair</a>
        </div>
        <img src="https://github.com/thiagotorres1.png" alt="Imagem de perfil" />
      </Profile>
    </Container>
  )
}