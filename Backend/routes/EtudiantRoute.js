const express = require('express');
const router = express.Router();
const etudiantController = require('../controller/EtudiantController');

router.get('/', etudiantController.getListeEtudiants);
router.delete('/:id', etudiantController.deleteEtudiantById);

module.exports = router;
