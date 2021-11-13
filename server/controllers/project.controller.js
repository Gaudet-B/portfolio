const { Project } = require('../models/project.model')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

module.exports.create = (req, res) => {
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
        .then(project => res.json(project))
        .catch(err => res.json(err))
}

module.exports.edit = (req, res) => {
    const {id} = req.params
    console.log(id)
    console.log(req.body)
    Project.findOneAndUpdate({ _id: id }, req.body)
        .then(updatedProject => {
            res.json(updatedProject)
            console.log(`UpPJ: ${updatedProject}`)
        })
        .catch(err => res.json(err))
}

module.exports.delete = (req, res) => {
    const {id} = req.params
    Project.deleteOne({ _id: id })
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}