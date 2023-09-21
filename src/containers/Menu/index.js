/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#nos-services" onClick={() => (window.document.location.hash = "#nos-services")}>Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations" onClick={() => (window.document.location.hash = "#nos-realisations")}>Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe" onClick={() => (window.document.location.hash = "#notre-equipe")}>Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
