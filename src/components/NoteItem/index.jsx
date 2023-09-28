import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";


export function NoteItem({isNew, value, ...rest}) {
  return(
    <Container $isnew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew} 
        {...rest}
      />
      <button
        type="button"
      >
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}