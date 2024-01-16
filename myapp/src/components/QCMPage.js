import React, { useState, useEffect } from 'react';
import Question from './Question';

const QCMPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/questions')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched questions:', data);
        if (Array.isArray(data)) {
          setQuestions(data);
        } else {
          console.error('Invalid data format received:', data);
        }
      })
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);
  

  return (
    <div>
      <h1>QCM Page</h1>
      {questions.map((question) => (
        <Question key={question._id} question={question} />
      ))}
    </div>
  );
};

export default QCMPage;
