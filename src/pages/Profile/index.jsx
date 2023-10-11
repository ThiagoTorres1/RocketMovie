import { Container, Form, Avatar } from "./styles";
import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordNew, setPasswordNew] = useState("")
  const [passwordOld, setPasswordOld] = useState("")
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdateProfile() {
    

    const userData = {
      name,
      email,
      password: passwordNew,
      oldpassword: passwordOld,
    }

    const userUpdate = Object.assign(user, userData)

    await updateProfile({user: userUpdate, avatarFile})
  }

  function handleUpdateAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }
 
  function handleBack() {
    navigate(-1)
  }
  return(
    <Container>
      <header>
        <ButtonText 
          title="Voltar"
          onClick={handleBack}
        />
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input 
              type="file" 
              id="avatar"
              onChange={handleUpdateAvatar}
            />
          </label>
        </Avatar>
        <Input 
          icon={FiUser} 
          placeholder="Nome" 
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          icon={FiMail} 
          placeholder="E-mail" 
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          icon={FiLock} 
          placeholder="Senha atual" 
          type="password"
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          icon={FiLock} 
          placeholder="Nova senha" 
          type="password"
          onChange={e => setPasswordNew(e.target.value)}
        />
        <Button 
          title="Salvar"
          onClick={handleUpdateProfile}
        />
      </Form>
    </Container>
  )
}