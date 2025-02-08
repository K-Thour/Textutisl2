import { useState } from "react";
import PropTypes from 'prop-types'
function Textform(props) {
  let textarea=document.querySelector("#exampleFormControlTextarea1");
  const [value, setvalue] = useState("");
  const change=(event)=>{
    setvalue(event.target.value);
  }
  const clickup=()=>{
    let newValue=value.toUpperCase();
    setvalue(newValue);
    props.showAlert("Text is changed to Uppercase","Success");
  }
  const clickLow=()=>{
    let newValue=value.toLowerCase();
    setvalue(newValue);
    props.showAlert("Text is changed to Lowercase","Success");
  }
  const clickclear=()=>{
    let newValue="";
    setvalue(newValue);
    props.showAlert("All Cleared","Success");
  }
  const clickcopy=()=>{
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    props.showAlert("Text is copied to clipboard","Success");
  }
  const clickSpaces=()=>{
    let newText=textarea.value.split(/[ ]+/);
    // textarea.value=newText.join(" ");
    setvalue(newText.join(" "));
    props.showAlert("Uneven space are Cleared","Success");
  }
  function clickSentenceCase(text) {
    const sentences =
        value.split(/[.!?]/)
            .filter(sentence =>
                sentence.trim() !== '');
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] =
            sentences[i].trim()[0].toUpperCase() +
            sentences[i].trim().slice(1);
    }
    setvalue(sentences.join('. ') + '.');
    props.showAlert("Text is converted to Sentence Case","Success");
}
  // let obj={
  //   title:"Options",
  //   option1:"Report",
  //   option2:"Feedback"
  // }
  return (
    <>
      <div className="mb-3 mt-3 container">
        <h1 >{props.Heading}</h1>
        <textarea
          className={`form-control text-${props.Mode==="dark"?"light":"dark"}`}
          id="exampleFormControlTextarea1"
          rows="10"
          style={{background:props.Mode==="dark"?props.color:"white"}}
          placeholder="Start typing..."
          value={value}
          onChange={change}
        ></textarea>
        <div className="mt-3">
        <button className="mt-3 btn-primary btn" onClick={clickup}>Convert Uppercase</button>
        <button className="mt-3  ms-3 btn-primary btn" onClick={clickLow}>Convert Lowercase</button>
        <button className="mt-3  ms-3 btn-primary btn" onClick={clickSentenceCase}>Convert Sentence Case</button>
        <button className="mt-3  ms-3 btn-primary btn" onClick={clickclear}>Clear Text</button>
        <button className="mt-3  ms-3 btn-primary btn" onClick={clickcopy}>Copy</button>
        <button className="mt-3  ms-3 btn-primary btn" onClick={clickSpaces}>Remove Spaces</button>
        </div>
      </div>
      <div id="preview" className="mt-3">
        <h4 className="ms-5">{(value.split(" ").length)} words {value.length} Letters</h4>
        <h4 className="ms-5">{0.08*value.split(" ").length} minutes to read
        </h4>
        <h2 className="ms-5">preview</h2>
        <pre className="ms-5">{value.length===0?"Start typing text".toUpperCase():value}</pre>
      </div>
      </>
  );
}
export default Textform;
// eslint-disable-next-line
Textform.PropTypes={
  Heading: PropTypes.string,
}
