import React, { useState } from "react";
import { Link } from "react-router-dom";
import Textform from "./Textform";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faVolumeHigh,
  faXmark,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

function Speak_Listen({ Mode, showAlert, color, Text, setText, voices }) {
  let i = 1;
  const[icon,seticon]=useState(faVolumeHigh);
  const[value,setValue]=useState("speak");
  // let voices;
  let speech = new SpeechSynthesisUtterance(Text);
  if(Text.length===0){
    speech = new SpeechSynthesisUtterance("Please enter any text in homepage!");
  }
  let speak = () => {
      speechSynthesis.speak(speech);
  };
  let selectChange = (e) => {
    speech.voice = voices[document.querySelector("#selection").value];
  };
  useEffect(() => {
    if (window.speechSynthesis.getVoices()) {
      voices = window.speechSynthesis.getVoices();
      let select = document.querySelector("#selection");
      for (let voice of voices) {
        let option = document.createElement("option");
        option.value = i++;
        option.innerHTML = voice.name;
        select.append(option);
      }
    }
  }, [window.speechSynthesis.getVoices()]);
  let startListen=()=>{
    const speech=window.speechRecoSpeechRecognition||window.webkitSpeechRecognition;
    let microphone=new speech();
    microphone.lang="en-GB";
    microphone.onresult=function(event){
      setText(event.results[0][0].transcript);
    }
    microphone.start();
  }
  return (
    <>
      <Textform
        Heading="Enter you text here"
        Mode={Mode}
        showAlert={showAlert}
        color={color}
        filter="blur(5px)"
      />
      <div
        className="d-flex position-fixed bottom-0 justify-content-center align-items-center cmpspeak"
        id="blur"
        style={{ height: "90vh", width: "100vw", background: "transparent" }}
      >
        <div
          className={`alert alert-warning alert-dismissible fade show cmpspeak border-5 border-${
            Mode === "light" ? "dark" : "light"
          }`}
          id="SpeakListen"
          role="alert"
          style={{ background: Mode === "light" ? "White" : color }}
        >
          <p
            className={`text-center text-${
              Mode === "light" ? "dark" : "light"
            }`}
          >
            <strong>Speak and Listen</strong>
          </p>
          <div>
            <textarea
              className={`form-control ms-3 mt-3 text-${
                Mode === "light" ? "dark" : "light"
              } border border-${Mode === "light" ? "dark" : "light"}`}
              rows="10"
              placeholder="Your text describes here..."
              disabled
              value={Text}
              style={{
                resize: "none",
                background: Mode === "light" ? "White" : color,
                // color: "black",
                fontWeight: 900,
              }}
            ></textarea>
            <div
              className={`options form-control mt-4 ms-3 rounded-pill position-relative d-flex justify-content-center align-items-center border border-${
                Mode === "light" ? "dark" : "light"
              }`}
              id="exampleFormControlTextarea1"
              style={{ background: Mode === "light" ? "White" : color }}
            >
              <select
                name=""
                id="selection"
                className={`position-absolute end-1 text-${
                  Mode === "light" ? "dark" : "light"
                }`}
                style={{ background: Mode === "light" ? "White" : color }}
                onChange={selectChange}
              ></select>
            </div>
            <div
              id="buttons"
              className=" d-flex align-items-center justify-content-around mt-5 ms-2"
            >
              <button
                id="btn-1"
                className={`rounded-pill text-${
                  Mode === "light" ? "dark" : "light"
                }`}
                style={{ background: Mode === "light" ? "White" : color }}
                onClick={speak}
                value={value}
              >
                <FontAwesomeIcon icon={icon} /> Speak
              </button>
              <button
                id="btn-2"
                className={`rounded-pill text-${
                  Mode === "light" ? "dark" : "light"
                }`}
                style={{ background: Mode === "light" ? "White" : color }}
                onClick={startListen}
              >
                <FontAwesomeIcon icon={faMicrophone} /> Listen
              </button>
            </div>
          </div>
          <Link to="/">
            <button
              type="button"
              className={`position-absolute top-0 end-0 text-${
                Mode === "light" ? "dark" : "light"
              }`}
              id="Closebtn"
              data-bs-dismiss="alert"
              aria-label="Close"
              style={{ background: "transparent", border: "none" }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Speak_Listen;
