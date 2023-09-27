import { Container } from "./styles";
import { MdStar, MdStarBorder } from 'react-icons/md'
 
export function Star() {
  return(
    <Container>
      <MdStar/>
      <MdStar/>
      <MdStar/>
      <MdStar/>
      <MdStarBorder/>
    </Container>
  )
}