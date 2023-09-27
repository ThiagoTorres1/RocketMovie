import { Container, Form, Avatar } from "./styles";
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function Profile() {
  return(
    <Container>
      <header>
        <ButtonText title="Voltar"/>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/thiagotorres1.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar"/>
          </label>
        </Avatar>
        <Input icon={FiUser} placeholder="Nome" type="text"/>
        <Input icon={FiMail} placeholder="E-mail" type="text"/>
        <Input icon={FiLock} placeholder="Senha atual" type="password"/>
        <Input icon={FiLock} placeholder="Nova senha" type="password"/>
        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}