const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/portfolio_app_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to portfolio_app_db"))
    .catch(err => console.log("Could not connect to portfolio_app_db", err))