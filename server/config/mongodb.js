const mongodb = require('mongodb');

module.exports = async () => {
    const connection = await mongodb.MongoClient.connect
        ('mongodb+srv://readwrite:8KxPsqCwyGZ0tSkY@cluster0-vxk3t.mongodb.net/test?retryWrites=true', 
        { useNewUrlParser: true });
        
    return await connection.db('test-db');
};