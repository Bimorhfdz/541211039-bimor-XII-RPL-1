let users = [
    {id : 1, nama : "Bimo", email : "bimorhfdz@Gmail.com"},
    {id : 2, nama : "rahman", email : "rahman@Gmail.com"},
    {id : 3, nama : "hafidz", email : "hafidz@Gmail.com"}
]

module.exports = {
    index: (req, res) => {
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
      },
      store: (req, res) => {
        users.push(req.body)
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message:"data berhasil ditambahkan"
        })
      },
      update: (req, res) => {
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
      },
      delete:  (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message: "data berhasil dihapus"
        })
      }
}