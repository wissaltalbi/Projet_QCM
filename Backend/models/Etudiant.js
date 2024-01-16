const mongoose = require('mongoose');

const etudiantSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  filiere: {
    type: String,
    required: true,
  },
  matiere: {
    type: String,
    required: true,
  },
  note: {
    type: Number,
    required: true,
  },
});

const Etudiant = mongoose.model('Etudiant', etudiantSchema);

module.exports = Etudiant;
