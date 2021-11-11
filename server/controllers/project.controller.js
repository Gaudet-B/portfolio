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