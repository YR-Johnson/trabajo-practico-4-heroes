const express = require('express');
const app = express();
const port = 3030;

// RUTAS

app.get('/',(req,res)=>res.send('Welcome a HOME')); //home

app.listen(port,()=>console.log(`Servidor corriendo en http://localhost:${port}`));