const { Router } = require('express');

const router = Router();

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const connection = require('./conf');

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

// Test récupération de tous les albums
router.get('/api/album', (req, res) => {
  connection.query('SELECT * FROM album', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération de tous les albums');
    } else {
      res.json(results);
    }
  });
});

// Consulter un album en renseignant son id dans l'url
router.get('/api/album/:id', (req, res) => {
  const idAlbum = req.params.id;
  connection.query('SELECT * FROM album WHERE id = ?', [idAlbum], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération d'un album");
    } else {
      res.json(results);
    }
  });
});

// Créer un album
router.post('/api/album/new', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO album SET ?',
    formData, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la sauvegarde d'un album");
      } else {
        res.sendStatus(200);
      }
    });
});

// Modifier un album
router.put('/api/album/:id', (req, res) => {
  const idAlbum = req.params.id;
  const formData = req.body;
  connection.query('UPDATE album SET ? WHERE id = ?', [formData, idAlbum], (err) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'un album");
    } else {
      res.sendStatus(200);
    }
  });
});

//  Supprimer un album
router.delete('/api/album/:id', (req, res) => {
  const idAlbum = req.params.id;
  connection.query('DELETE FROM album WHERE id = ?', [idAlbum], (err) => {
    if (err) {
      res.status(500).send("Erreur lors de la supression d'un album");
    } else {
      res.sendStatus(200);
    }
  });
});


module.exports = router;
