import { Background, Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input icon={FiUser} placeholder="Nome" type="text"/>
        <Input icon={FiMail} placeholder="E-mail" type="text"/>
        <Input icon={FiLock} placeholder="Senha" type="password"/>
        <Button title="Cadastrar"/>
        <ButtonText title="Voltar para o login"/>
      </Form>
      <Background/>
    </Container>
  )
}