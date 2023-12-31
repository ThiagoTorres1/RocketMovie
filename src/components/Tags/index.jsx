import { Container } from "./styles";

export function Tags({title, isHome, ...rest}) {
  return(
    <Container
      $ishome={isHome}
      {...rest}
     >
      {title}
    </Container>
  )
}