const { Project } = require('../models/project.model')
const fs = require('fs')
const path = require('path')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// multer
const { upload } = require ('../config/multer.config')


module.exports.create = (req, res, next) => {
    console.log(`headers: ${req.headers["content-type"]}`)
    console.log(`img name: ${req.body.mainImage}`);
    console.log(req.body)

    upload.single(req.body.mainImage)

    // Project.create({
    //     ...req.body,
    //     mainImage: fs.readFileSync(path.join("../client/public/uploads" + req.body.mainImage.name))
    // })
    Project.create(req.body)
        .then(project => {
            // const adminToken = jwt.sign({
            //     id: admin._id
            // }, process.env.JWT_KEY)
        res
            // .cookie("admintoken", adminToken, { httpOnly: true })
            .json({ msg: "success", project: project }) 
        })
        .catch(err => {res.status(400).json(err)})
}

module.exports.all = (req, res) => {
    Project.find()
        .then(allProjects => res.json(allProjects))
        .catch(err => res.json(err))
}

module.exports.one = (req, res) => {
    const {id} = req.params
    Project.findOne({ _id: id })
        .then(project => {
            console.log(project)
            // console.log(project.mainImage)
            res.json(project)
        })
        .catch(err => res.json(err))
}

module.exports.edit = (req, res, next) => {
    const {id} = req.params
    // console.log(req)
    console.log(`headers: ${req.headers["content-type"]}`)
    console.log(`body: ${req.body.mainImage}`)
    console.log(`file: ${req.file}`)
    Project.findOneAndUpdate({ _id: id }, req.body)
        .then(updatedProject => {
            res.json(updatedProject)
            console.log(`UpPJ: ${updatedProject}`)
            console.log(`MainImage: ${updatedProject.mainImage}`)
            next()
        })
        .catch(err => res.json(err))
}

module.exports.delete = (req, res) => {
    const {id} = req.params
    Project.deleteOne({ _id: id })
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}