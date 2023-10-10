import { Background, Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { useState } from "react";
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      alert("Preencha todos os campos")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    })
  }

  function handleBack() {
    navigate(-1)
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input 
          icon={FiUser} 
          placeholder="Nome" 
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <Input 
          icon={FiMail} 
          placeholder="E-mail" 
          type="text"
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          icon={FiLock} 
          placeholder="Senha" 
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <ButtonText 
          title="Voltar para o login"
          onClick={handleBack}
        />
      </Form>
      <Background/>
    </Container>
  )
}