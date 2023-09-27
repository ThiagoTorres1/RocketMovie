import { Container } from "./styles";
import { MdStar, MdStarBorder } from 'react-icons/md'
 
export function Star({isHigh}) {
  return(
    <Container $ishigh={isHigh}>
      <MdStar size={isHigh ? 20 : 12}/>
      <MdStar size={isHigh ? 20 : 12}/>
      <MdStar size={isHigh ? 20 : 12}/>
      <MdStar size={isHigh ? 20 : 12}/>
      <MdStarBorder size={isHigh ? 20 : 12}/>
    </Container>
  )
}