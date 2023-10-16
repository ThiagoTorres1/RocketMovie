import { Container } from "./styles";
import { MdStar, MdStarBorder } from 'react-icons/md'
import { useAuth } from "../../hooks/auth";
 
export function Star({isHigh}) {
  // const {rating} = useAuth()
  // console.log(rating)

  // switch(rating) {
  //   case '1':
  //     <Container $ishigh={isHigh}>
  //       <MdStar size={isHigh ? 20 : 12}/>
  //       <MdStarBorder size={isHigh ? 20 : 12}/>
  //       <MdStarBorder size={isHigh ? 20 : 12}/>
  //       <MdStarBorder size={isHigh ? 20 : 12}/>
  //       <MdStarBorder size={isHigh ? 20 : 12}/>
  //     </Container>
  //   break

  // }
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