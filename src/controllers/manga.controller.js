import mangaDao from "../dao/manga.dao.js";

const getAll = async (req, res) => {
   mangaDao.getAll()
      //PROMESA
      .then(mangas => {
         if (mangas != null) {
            res.render('../src/views/index', { mangas });
         } else {
            res.json({
               status: "Product not found"
            })
         }
      }).catch(err => {
         res.status(404).json("Error")
      })
}

const getOne = async (req, res) => {
   mangaDao.getOne(req.params.barcode)
      .then((manga) => {
         if (manga != null) {
            res.render('../src/views/edit', { manga });
         }
         else {
            res.json({
               "status": "not found"
            })
         }
      })
      .catch(err => {
         console.log(err.msg)
         res.status(500).json({ "status": "Server unaviable" })
      })
}

const insertOne = async (req, res) => {
   mangaDao.insertOne(req.body)
      .then(result => {
         if (result)
            res.redirect('/api/mangas')
      }).catch(err => {
         res.json({
            status: ""
         })
      })
}

const updateOne = async (req, res) => {
   mangaDao.updateOne(req.params.barcode, req.body)
      .then(result => {
         if (result) {
            res.redirect('/api/mangas');
         }
      })
      .catch(err => {
         res.status(500).json({ "status": "Server unaviable" })
      })
}

const deleteOne = async (req, res) => {
   mangaDao.deleteOne(req.params.barcode)
      .then((manga) => {
         if (manga) {
            res.render('../src/views/eliminar', { manga });
         }
      })
      .catch(err => {
         res.status(500).json({ "status": "Server unaviable" })
      })
}

export { getAll, getOne, insertOne, updateOne, deleteOne }