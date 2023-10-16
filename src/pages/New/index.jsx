import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Scrollbar } from '../../components/Scrollbar'
import { Container, Form, Section } from './styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

export function New() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleBack() {
    navigate(-1)
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

   async function handleAddMovie() {
    if(!title) {
      return alert("Você precisa informar o título")
    }

    if(!rating) {
      return alert("Você precisa informar a nota")
    }

    if(newTag) {
      return ("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    })

    alert("Nota criada com sucesso")
    navigate(-1)
  }

  function handleRemoveMovie() {
    const confirm = window.confirm("Tem certeza que deseja excluir o filme?")

    if(confirm) {
      navigate(-1)
    }
  }

  return(
    <Container>
      <Header />
      <Scrollbar>
        <Form>
          <header>
            <ButtonText title="Voltar" onClick={handleBack}/>
            <h1>Novo filme</h1>
          </header>
          <div className='flex'>
            <Input 
              placeholder="Título" 
              type="text" 
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              placeholder="Sua nota de 0 a 5" 
              type="text" 
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />
          <h2>Marcadores</h2>
          <Section>
          {
            tags &&
            tags.map((tag, index) => (
              <NoteItem 
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))
          }
            <NoteItem 
              isNew 
              placeholder="Novo marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </Section>
          <div className='flex'>
            <Button 
              isDelete 
              title="Excluir filme"
              onClick={handleRemoveMovie}
            />
            <Button 
              title="Salvar alterações"
              onClick={handleAddMovie}
            />
          </div>
        </Form>
      </Scrollbar>
    </Container>
  )
}