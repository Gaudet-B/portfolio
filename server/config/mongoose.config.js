require('dotenv').config()
const mongoose = require('mongoose')
// const crypto = require('crypto')
// const path = require('path')
// const multer = require('multer')
// const GridFsStorage = require('multer-gridfs-storage')
// const mongoURI = 'mongodb://localhost/portfolio_app_db'
// const connection = mongoose.createConnection(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to portfolio_app_db"))
    .catch(err => console.log("Could not connect to portfolio_app_db", err))

// let gfs
// connection.once("open", () => {
//     gfs = new mongoose.mongo.GridFSBucket(connection.db, {
//         bucketName: "uploads"
//     })
// })

// const storage = new GridFsStorage({
//     url: mongoURI,
//     file: (req, file) => {
//         return new Promise((resolve, reject) => {
//             crypto.randomBytes(16, (err, buf) => {
//                 if (err) {
//                     return reject(err)
//                 }
//                 const filename = buf.toString("hex") + path.extname(file.originalname)
//                 const fileInfo = {
//                     filename: filename,
//                     bucketName: "uploads"
//                 }
//                 resolve(fileInfo)
//             })
//         })
//     }
// })

// const upload = multer({
//     storage
// })