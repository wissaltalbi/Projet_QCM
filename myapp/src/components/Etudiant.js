import React, { useState, useEffect } from 'react';
import './Etudiant.css';


const Etudiant = () => {
    const [etudiants, setEtudiants] = useState([]);

    const fetchEtudiants = async () => {
      try {
        const response = await fetch('http://localhost:5000/etudiants');
        if (!response.ok) {
          throw new Error('Échec de la récupération des étudiants');
        }
        const data = await response.json();
        setEtudiants(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des étudiants :', error.message);
      }
    };
  
    useEffect(() => {
      fetchEtudiants();
    }, []);
  
    const handleDelete = async (id) => {
      try {
        const response = await fetch(`http://localhost:5000/etudiants/${id}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Échec de la suppression de l\'étudiant');
        }
  
        await new Promise(resolve => setTimeout(resolve, 100));
  
        fetchEtudiants();
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'étudiant :', error.message);
      }
    };
  return (
    <div className="container">
      <h1>Liste des étudiants</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Filière</th>
            <th>Matière</th>
            <th>Note</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {etudiants.map(etudiant => (
            <tr key={etudiant._id}>
              <td>{etudiant.nom}</td>
              <td>{etudiant.prenom}</td>
              <td>{etudiant.email}</td>
              <td>{etudiant.filiere}</td>
              <td>{etudiant.matiere}</td>
              <td>{etudiant.note}</td>
              <td>
                <button onClick={() => handleDelete(etudiant._id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Etudiant;
