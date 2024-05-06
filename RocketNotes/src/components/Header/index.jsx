import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/brennoEudes.png"
          alt="GitHub profile image"
        />
        <div>
          <span>Bem-vindo,</span>
          <strong>Brenno Eudes.</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
