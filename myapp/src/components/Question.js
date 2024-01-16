// Question.js
import React from 'react';
import Answer from './Answer';

const Question = ({ question }) => {
  return (
    <div>
      <p>{question.text}</p>
      <ul>
        {question.answers && Array.isArray(question.answers) && question.answers.length > 0
          ? question.answers.map((answer) => (
              <Answer key={answer._id} answer={answer} />
            ))
          : ''}
      </ul>
    </div>
  );
};

export default Question;
