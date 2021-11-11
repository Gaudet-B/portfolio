const { Admin } = require('../models/admin.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// module.exports.new = (req, res) => {
//     console.log(`REQUEST: ${req.body.username}`)
//     Admin.create(req.body)
//         .then(admin => {
//             const adminToken = jwt.sign({
//                     id: admin._id
//                 }, process.env.JWT_KEY)
//             res
//                 .cookie("admintoken", adminToken, { httpOnly: true })
//                 .json({ msg: "success", admin: admin })
//             console.log(`RES: ${admin}`)
//         })
//         .catch(err => {
//             console.log(`ERR: ${err}`);
//             res.status(400).json(err)
//         })
// }

module.exports.login = async(req, res) => {
    console.log(`controller`)
    const admin = await Admin.findOne({ username: req.body.username })
    console.log(`admin - ${admin}`)
    
    if (admin === null) {
        return res.sendStatus(400)
    }

    const correctPassword = await bcrypt.compare(req.body.password, admin.password)

    if (!correctPassword) {
        return res.sendStatus(400)
    }

    const adminToken = jwt.sign({
        id: admin._id
    }, process.env.JWT_KEY)

    console.log(`token: ${adminToken}`)

    res.cookie("admintoken", adminToken, { httpOnly: true }).json({ msg: "success" })
}

module.exports.logout = (req, res) => {
    res.clearCookie("admintoken")
    res.sendStatus(200)
}

// module.exports.all = (req, res) => {
//     Admin.find()
//         .then(allAdmins => {
//             // console.log(allAdmins)
//             res.json(allAdmins)
//         })
//         .catch(err => res.json(err))
// }

// module.exports.delete = (req, res) => {
//     const {id} = req.params
//     console.log(id)
//     Admin.deleteOne({ _id: id })
//         .then(confirmation => res.json(confirmation))
//         .catch(err => res.status(400).jason(err))
// }