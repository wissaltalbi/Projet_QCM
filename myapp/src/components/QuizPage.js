// QuizPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import Navbar from './Navbar';

import './Quiz.css';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScore, setShowScore] = useState(false); // Nouvel état pour gérer l'affichage de la note
  const [score, setScore] = useState(0); // Note statique, à remplacer par la logique de calcul de la note

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/questions');
        console.log('Fetched questions:', response.data);
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setError('Error fetching questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const calculateScore = () => {
    const totalScore = 18;
    setScore(totalScore);
    setShowScore(true);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (

    <>
    <Navbar />
    <div>
      
      <h1>Quiz React js</h1>
      {questions.map((question) => (
        <div key={question._id} className="quiz-question-container">
          <Question question={question} />

          {/* Réponses statiques conditionnelles avec cases à cocher */}
          <ul className="quiz-static-answers">
            {question._id === '65a199024101eab0802d3b8b' && (
              <>
                <li>
                  <input type="checkbox" id="answer1" />
                  <label htmlFor="answer1">Les modules</label>
                </li>
                <li>
                  <input type="checkbox" id="answer2" />
                  <label htmlFor="answer2">Les services</label>
                </li>
                <li>
                  <input type="checkbox" id="answer3" />
                  <label htmlFor="answer3">Les composants</label>
                </li>
              </>
            )}
            {question._id === '65a199024101eab0802d3b8c' && (
              <>
                <li>
                  <input type="checkbox" id="answer4" />
                  <label htmlFor="answer4">Dans js/components/</label>
                </li>
                <li>
                  <input type="checkbox" id="answer5" />
                  <label htmlFor="answer5">Dans vendor/components/</label>
                </li>
                <li>
                  <input type="checkbox" id="answer6" />
                  <label htmlFor="answer6">Dans external/components/</label>
                </li>
              </>
            )}
            {question._id === '65a199024101eab0802d3b8d' && (
              <>
                <li>
                  <input type="checkbox" id="answer4" />
                  <label htmlFor="answer4">1 élément</label>
                </li>
                <li>
                  <input type="checkbox" id="answer5" />
                  <label htmlFor="answer5"> 2 éléments</label>
                </li>
                <li>
                  <input type="checkbox" id="answer6" />
                  <label htmlFor="answer6">Plusieurs éléments</label>
                </li>
              </>
            )}
          </ul>
        </div>
      
      ))}

      {/* Bouton d'affichage de la note totale avec la classe de style */}
      <button className="quiz-score-button" onClick={calculateScore}>
        Afficher la note totale
      </button>

      {/* Affichage de la note totale */}
      {showScore && <p>Votre note totale : {score}</p>}
    </div>
    </>
  );
};

export default QuizPage;
