import { h, Fragment } from "preact";
import style from "./style";
import { useState, useEffect } from "preact/hooks";
import axios from "axios";

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
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messages]);

  const sendMsg = () => {
    if (input == "") return;

    setInput("");
    setMessages([...messages, { isUser: true, msg: input }]);

    axios
      .post(
        "https://2kicnr8868.execute-api.eu-west-1.amazonaws.com/dev/infer",
        { msg: input }
      )
      .then(({ data: { intent } }) => {
        setMessages([
          ...messages,
          { isUser: true, msg: input },
          { isUser: false, msg: intent }
        ]);
      })
      .catch(err => console.error(err));
  };
  const handleKeyDown = e => {
    e.preventDefault();
    if (e.key === "Enter") sendMsg();
    else if (/^ $|^[0-9a-z]$/i.test(e.key))
      // is space or alphanumeric
      setInput(input + e.key);
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
        <input type="text" value={input} onKeyDown={handleKeyDown} />
        <button onClick={() => sendMsg()}>Senden</button>
      </footer>
    </div>
  );
};

export default Home;
