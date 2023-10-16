import {Container, Content, Title, Description} from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Scrollbar } from '../../components/Scrollbar'
import { Star } from '../../components/Star'
import { Tags } from '../../components/Tags'
import { FiClock } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Preview() {
  const { user } = useAuth()
  const params = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState([])
  const [tags, setTags] = useState([])
  const date = movie.created_at
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get(`/tags/${params.id}`)
      setTags(response.data)      
    }
    fetchTags()
  })

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`)
      setMovie(response.data)
    }
    fetchMovie()
  }, [])

  return(
    <Container>
      <Header/>
      <Scrollbar>
        <Content>
          <ButtonText 
            title="Voltar"
            onClick={handleBack}
          />
          <Title>
            <h1>{movie.title}</h1>
            <Star rating={movie.rating} isHigh/>
          </Title>
          <Description>
            <div>
              <img src={avatarUrl} alt="Imagem do usuário" />
              <p>{user.name}</p>
            </div>
            <div>
              <FiClock/>
              <p>{
                // 23/05/22 às 08:00
                date
              }</p>
            </div>
          </Description>
          {
            tags &&
            tags.map(tag => (
              <Tags 
                key={tag.id}
                title={tag.name}
              />
            ))
          }
          <p>
            {movie.description}
          </p>
        </Content>
      </Scrollbar>
    </Container>
  )
}