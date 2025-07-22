const express = require('express');
const app = express();
const filmRoutes = require('./film');

app.use(express.json());
app.use('/film', filmRoutes);

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
