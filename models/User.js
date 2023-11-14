const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({ //memanggil module dan membuat schema
    nama:{
        type: String,
        required:[true, 'silahkan isikan nama'],
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'silahkan isi email valid!'] //aturan validasi sesuai sesuai aturan code untuk memeriksa format
    },
})

module.exports = mongoose.model('User', UserSchema)