import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😔": "Sad",
  "😂": "Laughing",
  "🥳": "Let's Party",
  "🤫": "Stay Silent",
  "😊": "Smiling",
  "🤣": "Laughing Hardly",
  "😳": "Disbelief",
  "😭": "Crying",
  "😱": "Shocked",
  "😡": "Angry",
  "😴": "Sleeping",
  "😑": "Annoyed",
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("( Meaning of Emoji will come here )");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1 className="headingmk">
        <u>Manthan-Emoji App</u>
      </h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Enter your Emoji"}
        style={{
          padding: "1em",
          minWidth: "80%",
          borderRadius: "50px",
          backgroundColor: "yellow",
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
