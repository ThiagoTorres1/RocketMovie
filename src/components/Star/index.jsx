import { useEffect } from "react";
import { Container } from "./styles";
import { MdStar, MdStarBorder } from 'react-icons/md'
 
export function Star({rating, isHigh}) {
    let componentToRender;

    switch(rating) {
      case 5: 
        componentToRender = (
          <Container $ishigh={isHigh}>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStar size={isHigh ? 20 : 12}/>
          </Container>
        )
      break;
      case 4: 
        componentToRender = (
          <Container $ishigh={isHigh}>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
          </Container>
        )
      break;
      case 3:
        componentToRender = (
          <Container $ishigh={isHigh}>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
          </Container>
        )   
      break;
      case 2:
        componentToRender = (
          <Container $ishigh={isHigh}>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
          </Container>
        )
      break;
      case 1:
        componentToRender = (
          <Container $ishigh={isHigh}>
            <MdStar size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
          </Container>
        )
      break;
      case 0:
        componentToRender = (
          <Container $ishigh={isHigh}>
            <MdStarBorder size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
            <MdStarBorder size={isHigh ? 20 : 12}/>
          </Container>
        )
      break;
    }
  return(
    <div>
      {componentToRender}
    </div>
  )
}