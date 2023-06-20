import mongoose from "mongoose"
const url = 'mongodb://127.0.0.1:27017/MernDrones'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=>{ console.log("¡Conectado a MongoDB!")} )
db.on('error', ()=>{ console.log("¡Error al conectar a MongoDB!")} )

export default db


