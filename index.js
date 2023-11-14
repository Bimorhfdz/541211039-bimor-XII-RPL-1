const express = require('express') //menggunakan modul express
const app = express() //instance express disimpan di var app
const userrouter = require('./router/users') //import userrouter
const connectDB = require('./config/db') //menggunakan function connectdb
const port = 3000 //menetapkan port


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => { 
  res.send('Hello Bimo')
}) //rute utama dalam permintaan get, jika berhasil maka muncul pesan "hello bimo"

app.use(userrouter) // app menggunakan userrouter

connectDB() //memanggil connectdb untuk menghubungkan ke DB

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})
//menjalankan dengan method app.listen pada port yg ditentukan
