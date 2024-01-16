// In App.js
import React from 'react';
import { Route, Routes } from 'react-router';
import Login from "./auth/login";
import Home from "./Home";
import QCMPage from './components/QCMPage';
import Answer from './components/AnswersList';
import Quiz from './components/QuizPage';
import Etudiant from './components/Etudiant';






function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/QCM" element={<QCMPage />} />
      <Route path="/answers" element={<Answer />} />
      <Route path="/Quiz" element={<Quiz />} />
      <Route path="/Etudiant" element={<Etudiant />} />




    


    </Routes>
  );
}

export default App;
