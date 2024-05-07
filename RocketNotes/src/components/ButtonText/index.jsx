import { Container } from "./styles";

// caso a prop "isActive" ñ seja definida, o valor padrão é falso.
export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {title}
    </Container>
  );
}
