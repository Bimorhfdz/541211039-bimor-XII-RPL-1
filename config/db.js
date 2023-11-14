// getting-started.js
const mongoose = require('mongoose'); //menggunakan module mongoose, berinteraksi dengan mongodb

const mongoDB = async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/praktikumkk4c'); //koneksi ke database
    console.log('db Connected') // pesan jika koneksi berhasil
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = mongoDB