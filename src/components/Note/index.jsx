import { Container } from "./styles";
import { Tags } from '../Tags'
import { Star } from '../Star'

export function Note({data, ...rest}) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Star rating={data.rating}/>
      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tags isHome key={tag.id} title={tag.name}/>
            )
          }
        </footer>
      }
    </Container>
  )
}