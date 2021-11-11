const AppController = require('../controllers/app.controller')
const AdminController = require('../controllers/admin.controller')
const ProjectController = require('../controllers/project.controller')

// when using 'authenticate' always send requests from client side with { withCredentials: true }
const { authenticate } = require('../config/jwt.config')


module.exports = app => {

    app.post("/api/contact", AppController.contact)
    
    app.post("/api/loginadmin", AdminController.login)
    app.get("/api/logoutadmin", AdminController.logout)
    app.post("/api/projects/new", authenticate, ProjectController.create)
    app.get("/api/projects", ProjectController.all)
    app.get("/api/projects/all", authenticate, ProjectController.all)
    app.delete("/api/projects/:id", authenticate, ProjectController.delete)
    
    // app.post("/api/registeradmin", AdminController.new)
    // app.get("/api/adminconsole", authenticate, AdminController.findOne)
    // app.get("/api/admins", AdminController.all)
    // app.delete("/api/:id", AdminController.delete)
}