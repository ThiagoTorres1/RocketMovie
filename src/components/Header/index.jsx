import { Container, Profile } from "./styles";
import {Input} from '../Input';
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }
  
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquise pelo título"/>
      <Profile>
        <div>
          <strong>Thiago Torres</strong>
          <button 
            type="button"
            onClick={handleSignOut}
          >
            Sair
          </button>
        </div>
        <img src="https://github.com/thiagotorres1.png" alt="Imagem de perfil" />
      </Profile>
    </Container>
  )
}