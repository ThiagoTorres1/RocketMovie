import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Scrollbar } from '../../components/Scrollbar'
import { Container, Form, Section } from './styles'
import { useNavigate } from 'react-router-dom'

export function New() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
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
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota de 0 a 5" type="text" />
          </div>
          <Textarea placeholder="Observações"/>
          <h2>Marcadores</h2>
          <Section>
            <NoteItem value="React"/>
            <NoteItem isNew placeholder="Novo marcador"/>
          </Section>
          <div className='flex'>
            <Button isDelete title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </div>
        </Form>
      </Scrollbar>
    </Container>
  )
}