import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    // uma das vantagens do styled component é passar props. p/ componente (ex: isNew):
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew} // prop. q desabilita edição.
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"} // aplicando as classes no btn
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
