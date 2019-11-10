import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <h1>Dialogflow - Under the Hood</h1>
    <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
      <Link activeClassName={style.active} href="/profile">
        About 
      </Link>
	<a href="https://drdirk.io" target="blank_">Me</a>
    </nav>
  </header>
);

export default Header;
