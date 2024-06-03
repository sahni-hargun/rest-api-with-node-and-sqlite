var express = require('express');
var bodyParser = require("body-parser");
const agents = require('./agents');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET ALL
app.get("/agents", async function(req, res) {
    const allAgents = await agents.getAgents();
    res.send(allAgents);
});

// GET
app.get("/agent/:id", async function(req, res) {
    const agent = await agents.getAgentById(req.params.id);
    res.send(agent);
});

// POST
app.post("/agent", async function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    await agents.addAgent(firstName, lastName);
    res.send({"message": "Success"});
});

// PUT
app.put("/agent/:id", async function(req, res) {
    const id = req.params.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    await agents.editAgent(id,firstName,lastName);
    res.send({"message": "Success"});
});

// DELETE
app.delete("/agent/:id", async function(req, res) {
    await agents.deleteAgent(req.params.id);
    res.send({"message": "Success"});
});

app.listen(process.env.PORT || 3000,function(req,res){
    console.log("Server Started!");
});