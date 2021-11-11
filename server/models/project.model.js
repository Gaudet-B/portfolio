const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    title: {type: String},
    myRole: {type: String},
    technologies: {type: Array},
    summary: {type: Array},
    demo: {type: Array},
    github: {type: String}
}, { timestamps: true })

module.exports.Admin = mongoose.model("Admin", AdminSchema)