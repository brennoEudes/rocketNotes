import { Container } from "./styles";

// convertemos o "icon" p. poder nomear como componente c/ letra maiúscula no return!
export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />} {/* Se existe ícone, mostrará o ícone. Se não, nada */}
      <input {...rest} />
    </Container>
  );
}
