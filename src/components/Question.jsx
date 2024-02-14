import React from 'react';
import AnswerChoices from './AnswerChoices';

function Question(props) {
  return(
    <div> 
      {props.question}
      <AnswerChoices answer='Answer Choice Goes Here'/>
    </div>
  )
}

export default Question;