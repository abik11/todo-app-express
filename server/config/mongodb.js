const mongodb = require('mongodb');

module.exports = async () => {
    const connection = await mongodb.MongoClient.connect
        ('mongodb+srv://user:pass@cluster.mongodb.net/test?retryWrites=true', 
        { useNewUrlParser: true });
        
    return await connection.db('test-db');
};
