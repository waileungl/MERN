const PersonController = require("../controllers/person.controller")

module.exports = app => {
    app.get('/api', PersonController.findAll);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people/:id', PersonController.getOneById);
    app.put('/api/people/:id', PersonController.updatePerson);
    app.delete('/api/people/:id', PersonController.deletePerson);
}