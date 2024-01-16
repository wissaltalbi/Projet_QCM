const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const Quiz = require('./models/Quiz'); // Ajustez le chemin en conséquence
const etudiantRoutes = require('./routes/EtudiantRoute');

//***********************Connection********** */
const { MONGO_URL, MONGO_DB_NAME } = process.env;
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: MONGO_DB_NAME });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
    console.log(`Connecté à MongoDB Atlas ! Base de données : ${MONGO_DB_NAME}`);
});
// const colle = db.collection('etudiants');
// const insert =  colle.insertMany([
//     { nom:'Driham', prenom:'Siham',email:'Siham@gmail.com', filiere: 'ISIL', matiere: 'WEB' , note: 19 }


// ]);
// console.log(`Document inséré => ${insert}`);



const app = express();

app.use(cors()); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
const questionRoutes = require('./routes/questions');
const answerRoutes = require('./routes/answers');
const quizRoutes = require('./routes/quizRouter');

app.use('/api/questions', questionRoutes);
app.use('/api/answers', answerRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/etudiants', etudiantRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
