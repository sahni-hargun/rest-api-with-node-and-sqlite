const db = require('./db');

function getAgents() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM agentsOfShield', (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function getAgentById(id) {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM agentsOfShield where id=(?)',id, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function addAgent(firstName, lastName) {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO agentsOfShield (firstName, lastName) VALUES (?, ?)', firstName, lastName, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function editAgent(id, firstName, lastName) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE agentsOfShield SET firstName = (?), lastName = (?) where id = (?)', [firstName, lastName, id], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function deleteAgent(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM agentsOfShield WHERE id = (?)', id, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

module.exports = {
    getAgents,
    getAgentById,
    addAgent,
    editAgent,
    deleteAgent
};