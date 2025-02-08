import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Textform(props) {
  let textarea = document.querySelector("#exampleFormControlTextarea1");
  const [value, setvalue] = useState("");
  const change = (event) => {
    setvalue(event.target.value);
    props.setText(event.target.value);
    localStorage.setItem("Text",event.target.value);
  };
  const clickup = () => {
    let newValue = value.toUpperCase();
    props.setText(newValue);
    props.showAlert("Text is changed to Uppercase", "Success");
  };
  const clickLow = () => {
    let newValue = value.toLowerCase();
    props.setText(newValue);
    props.showAlert("Text is changed to Lowercase", "Success");
  };
  const clickclear = () => {
    let newValue = "";
    props.setText(newValue);
    props.showAlert("All Cleared", "Success");
  };
  const clickcopy = () => {
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    props.showAlert("Text is copied to clipboard", "Success");
  };
  const clickSpaces = () => {
    let newText = textarea.value.split(/[ ]+/);
    // textarea.value=newText.join(" ");
    props.setText(newText.join(" "));
    props.showAlert("Uneven space are Cleared", "Success");
  };
  function clickSentenceCase(text) {
    const sentences = value
      .split(/[.!?]/)
      .filter((sentence) => sentence.trim() !== "");
    for (let i = 0; i < sentences.length; i++) {
      sentences[i] =
        sentences[i].trim()[0].toUpperCase() + sentences[i].trim().slice(1);
    }
    props.setText(sentences.join(". ") + ".");
    props.showAlert("Text is converted to Sentence Case", "Success");
  }
  // let obj={
  //   title:"Options",
  //   option1:"Report",
  //   option2:"Feedback"
  // }

  return (
    <div  style={{filter:props.filter}}>
      <div  className="mb-3 mt-3 container">
        <h1>{props.Heading}</h1>
        <textarea
          className={`form-control text-${
            props.Mode === "dark" ? "light" : "dark"
          }`}
          id="exampleFormControlTextarea1"
          rows="10"
          style={{
            background: props.Mode === "dark" ? props.color : "white",
            resize: "none",
          }}
          placeholder="Start typing..."
          value={props.Text}
          onChange={change}
        ></textarea>
        <div className="mt-3">
          <button
            disabled={value.length === 0}
            className="mt-3 ms-3 mb-2 btn-primary btn"
            onClick={clickup}
          >
            Convert Uppercase
          </button>
          <button
            disabled={value.length === 0}
            className="mt-3 mb-2  ms-3 btn-primary btn"
            onClick={clickLow}
          >
            Convert Lowercase
          </button>
          <button
            disabled={value.length === 0}
            className="mt-3 mb-2  ms-3 btn-primary btn"
            onClick={clickSentenceCase}
          >
            Convert Sentence Case
          </button>
          <button
            disabled={value.length === 0}
            className="mt-3 mb-2  ms-3 btn-primary btn"
            onClick={clickclear}
          >
            Clear Text
          </button>
          <button
            disabled={value.length === 0}
            className="mt-3 mb-2  ms-3 btn-primary btn"
            onClick={clickcopy}
          >
            Copy
          </button>
          <button
            disabled={value.length === 0}
            className="mt-3 mb-2  ms-3 btn-primary btn"
            onClick={clickSpaces}
          >
            Remove Spaces
          </button>
          <Link to="/speak">
            <button
              className="mt-3 mb-2  ms-3 btn-primary btn"
            >
              Speak and Listen
            </button>
          </Link>
        </div>
      </div>
      <div id="preview" className="mt-3">
        <h4 className="ms-5">
          {
            value.split(/\s+/).filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          words {value.length} Letters
        </h4>
        <h4 className="ms-5">
          {0.08 *
            value.split(" ").filter((e) => {
              return e.length !== 0;
            }).length}{" "}
          minutes to read
        </h4>
        <h2 className="ms-5">preview</h2>
        <pre className="ms-5">
          {value.length === 0 ? "Start typing...".toUpperCase() : props.Text}
        </pre>
      </div>
    </div>
  );
}
export default Textform;
