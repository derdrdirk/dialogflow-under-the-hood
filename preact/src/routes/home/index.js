import { h, Fragment } from "preact";
import style from "./style";
import { useState } from "preact/hooks";

const initMessages = [
  {
    isUser: false,
    msg: "Hi! This is Joonka a demo of Natural Language Processing."
  },
  {
    isUser: false,
    msg: "Ask me something about money!"
  }
];

const Home = () => {
  const [messages, setMessages] = useState(initMessages);
  const [input, setInput] = useState("");

  const sendMsg = () => {
    if (input == "") return;
    setInput("");
    setMessages([...messages, { isUser: true, msg: input }]);
  };

  return (
    <div class={style.home}>
      <h1 onClick={() => setCount(count + 1)}>Talk to Joonka - Get a Loan</h1>
      <main class={style.chat}>
        {messages.map(msg => (
          <Fragment>
            <div class={msg.isUser ? style.rightMsg : style.leftMsg}>
              {msg.msg}
            </div>
            <div class={style.clear}></div>
          </Fragment>
        ))}
      </main>
      <footer class={style.footer}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={() => sendMsg()}>Senden</button>
      </footer>
    </div>
  );
};

export default Home;
