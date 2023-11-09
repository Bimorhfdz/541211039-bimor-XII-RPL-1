const express = require('express')
const router =express.Router()
  

let users = [
    {id : 1, nama : "Bimo", email : "bimorhfdz@Gmail.com"},
    {id : 2, nama : "rahman", email : "rahman@Gmail.com"},
    {id : 3, nama : "hafidz", email : "hafidz@Gmail.com"}
]


  router.get('/users', (req, res) => {
    if(users.length> 0){
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url
      })
    }else{
      res.json({
        status:false,
        message:"data kosong"
      })
    }
    res.json (users)
  })
  
  router.post('/user', (req, res) => {
    users.push(req.body)
    res.json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      message:"data berhasil ditambahkan"
    })
  })
  
  router.put('/user/:id', (req, res) => {
    const id = req.params.id
    users.filter(user => {
        if(user.id == id){
            user.nama = req.body.nama
            user.email = req.body.email
            return user
        }
    })
    res.json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      message:"data berhasil diubah"
    })
  })
  
  router.delete('/user/:id', (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id != id)

    res.json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      message: "data berhasil dihapus"
    })
  })
  

  module.exports = router