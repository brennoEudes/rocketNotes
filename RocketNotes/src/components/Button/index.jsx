import { Container } from "./style";

// caso a prop "loading" ñ seja definida, o valor padrão é falso.
export function Button({ title, loading = false, ...rest }) {
  return (
    <Container 
    type="button" 
    disabled={loading} 
    {...rest}
    > {/* REST OPERATOR: permite TODAS props serem inserdidas no componente sem precisar serem passadas! */}

      {loading ? "Carregando..." : title} {/* if ternário */}
    </Container>
  );
}
