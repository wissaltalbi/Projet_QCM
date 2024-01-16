// EtudiantController.js

const Etudiant = require('../models/Etudiant');

const getListeEtudiants = async (req, res) => {
  try {
    const etudiants = await Etudiant.find();
    res.json(etudiants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEtudiantById = async (req, res) => {
    try {
      const deletedEtudiant = await Etudiant.findByIdAndDelete(req.params.id);
  
      if (!deletedEtudiant) {
        return res.status(404).json({ message: 'Étudiant non trouvé' });
      }
  
      res.json({ message: 'Étudiant supprimé avec succès' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  

module.exports = {
  getListeEtudiants,
  deleteEtudiantById,
};
