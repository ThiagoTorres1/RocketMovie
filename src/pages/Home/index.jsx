import { Container, Content, Title, HeroButton } from "./styles";
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Scrollbar } from '../../components/Scrollbar'
import { MdAdd } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api"

export function Home() {
  const navigate = useNavigate()
  const { title } = useAuth()
  const [notes, setNotes] = useState([])
 

  function handleNew() {
    navigate("/new")
  }

  function handleInformationNote(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${title}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [title])

  return(
    <Container>
      <Header/>
      <Scrollbar>
        <Content>
          <Title>
            <h1>Meus filmes</h1>
            <HeroButton onClick={handleNew}>
              <MdAdd/>
              Adicionar filme
            </HeroButton>
          </Title>
          {
            notes.map(note => (
            <Note 
              key={String(note.id)}
              data={note}
              onClick={() => handleInformationNote(note.id)}
            />
          ))
          }
        </Content>
      </Scrollbar>
    </Container>
  )
}