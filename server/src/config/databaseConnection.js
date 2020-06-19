const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {
    const uri = 'mongodb+srv://graphstack1:<password>@graphstack-ndzc3.gcp.mongodb.net/full-stack-server?retryWrites=true&w=majority' // get from mongo site

    MongoClient.connect(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
            mongoDB = client.db('full-stack-server');

            if (err) {
                return callback(err);
            } else {
                return callback('DB OK');
            }
        }
    );
};

const getDB = () => {
    return mongoDB;
};

module.exports = { setupDB, getDB };