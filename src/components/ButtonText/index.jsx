import { Container } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'

export function ButtonText({title, ...rest}) {
  return(
    <Container {...rest} type="button">
      <FiArrowLeft/>
      {title}
    </Container>
  )
}