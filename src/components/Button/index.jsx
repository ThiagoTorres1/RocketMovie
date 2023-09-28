import { Container } from "./styles";

export function Button({title, isDelete, ...rest}) {
  return(
    <Container
      $isdelete={isDelete}
      type="button"
      {...rest}
    >
      {title}
    </Container>
  )
}