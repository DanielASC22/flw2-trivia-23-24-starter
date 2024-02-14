import React, { useState } from "react";
import './App.css'
import data from "./sample_data.json";
import Question from './components/Question';

export default function App(props) {
  let currentQuestionNumber=0
  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question question={question.name}/> 
    </div>
  );
}
