import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Container, Form, Section } from './styles'

export function New() {
  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <ButtonText title="Voltar"/>
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
      </main>
    </Container>
  )
}