const express = require('express');
const path = require('path')
const app = express();
const port = 3030;

// RUTAS

//app.get('/',(req,res)=>res.send('Welcome a HOME')); //home
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html'))); //home
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','detalle.html'))); //detalle
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','registro.html'))); //registro
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','login.html'))); //login
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','carrito.html'))); //carrito

app.listen(port,()=>console.log(`Servidor corriendo en http://localhost:${port}`));