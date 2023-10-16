import { Container, Profile } from "./styles";
import {Input} from '../Input';
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";

export function Header() {
  const { signOut, user, setTitle } = useAuth()
  const navigate = useNavigate()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

 
  function handleSignOut() {
    signOut()
    navigate("/")
  }

  function sendSearch(e) {
    const send = e.target.value
    setTitle(send)
  }
  
  return(
    <Container>
      <a href="/">
        <h1>RocketMovies</h1>
      </a>
      <Input 
        placeholder="Pesquise pelo título"
        onChange={sendSearch}
      />
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <button 
            type="button"
            onClick={handleSignOut}
          >
            Sair
          </button>
        </div>
        <a 
          href="/profile"
        >
          <img src={avatarUrl} alt="Imagem de perfil" />
        </a>
      </Profile>
    </Container>
  )
}