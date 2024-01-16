import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer';

const AnswersList = () => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/answers');
        setAnswers(response.data);
      } catch (error) {
        console.error('Error fetching answers:', error);
        setError('Error fetching answers');
      } finally {
        setLoading(false);
      }
    };

    fetchAnswers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {answers.map((answer) => (
        <Answer key={answer._id} answer={answer} />
      ))}
    </ul>
  );
};

export default AnswersList;
