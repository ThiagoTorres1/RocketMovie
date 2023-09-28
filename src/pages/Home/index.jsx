import { Container, Content, Title, HeroButton } from "./styles";
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Scrollbar } from '../../components/Scrollbar'
import { MdAdd } from 'react-icons/md'

export function Home() {
  return(
    <Container>
      <Header/>
      <Scrollbar>
        <Content>
          <Title>
            <h1>Meus filmes</h1>
            <HeroButton>
              <MdAdd/>
              Adicionar filme
            </HeroButton>
          </Title>
          <Note 
            data={
              {
                title: "Interstelar",
                description: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                tags: [{id: "1", name: "Ficção científica"}, {id: "2", name: "Drama"}],
              }
            }
          />
        </Content>
      </Scrollbar>
    </Container>
  )
}