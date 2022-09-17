const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL).then(() =>{
  console.log("MongoDB connected!");
});

const ProvinciaSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
});

const LocalidadSchema = new mongoose.Schema({
  id: Number,
  descripcion: String,
  provincia: ProvinciaSchema,
});

const DomicilioSchema = new mongoose.Schema({
  id: Number,
  codint: Number,
  domicilio: String,
  cp: String,
  localidad: LocalidadSchema,
  urlGoogle: String,
  latitud: Number,
  longitud: Number,
});

const EspecialidadDetailSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
});

const EspecialidadSchema = new mongoose.Schema({
  id: Number,
  codEsp: Number,
  primaria: String,
  especialidad: EspecialidadDetailSchema,
});

const ProviderSchema = new mongoose.Schema({
  id: Number,
  numPres: String,
  nombre: String,
  telat: String,
  horarios: String,
  listaDomicilios: [DomicilioSchema],
  listaEspecialidades: [EspecialidadSchema],
  idLong: Number,
}, {collection: 'providers'});

const Provider = mongoose.model('Provider', ProviderSchema);

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.post('/api/providers', async (req, res) => {
  const providers = await Provider.find({
    "listaEspecialidades.especialidad.id": req.body.especialidad,
  });
  res.status(200).send({
    documents: providers,
  });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}...`);
});
