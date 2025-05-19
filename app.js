const express = require('express');
const app = express();
const BossRoutes = require('./src/routes/BossRoutes');

//usar json
app.use(express.json());
//caminho vai ser /api
app.use('/api', BossRoutes);
//exportando o app
module.exports = app;