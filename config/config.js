const { MongoClient } = require('mongodb');
const { Client } = require ('pg');

// mongodb connection setup
const mongodbURI = 'mongodb://127.0.0.1:27017/'
const mongoClient = new MongoClient(mongodbURI);

export const connectToMongoDb = async () => {
    try {
        await mongoClient.connect();
        // establish and verify connection
        await mongoClient.db('admin').command({ ping: 1 })
        console.log('Successfully connectd to db server!')
    } catch (err) {
        console.dir(err)
    } finally {
        // Ensures that the client will close when you finish or error
        await mongoClient.close();
    }
}

// postgresql connection setup
export const connectToPgDb = async () => {
    const client = new Client({
        host: 'my.database-server.com',
        port: 5334,
        user: 'database-user',
        password: 'secretpassword!!',
    });

    try {
        await client.connect();
        console.log('Successfully connected to PostgreSQL db server!')
    } catch (err) {
        console.dir(err)
    } finally {
       await client.end()
    }
}

