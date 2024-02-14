import React, { useState } from "react";
import './App.css'
import data from "./sample_data.json";
import Question from './components/Question';
import NextQuestion from './components/NextQuestion';

export default function App(props) {
  let currentQuestionNumber=0
  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question question={data[currentQuestionNumber].question.text}/>
      <NextQuestion/>
    </div>
  );
}
