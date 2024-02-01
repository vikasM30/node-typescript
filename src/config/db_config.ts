import mongoose, { ConnectOptions } from 'mongoose';

class MongoDBConfiguration {

    private uri = process.env.MONGOURI!;
    private credentials = process.env.MONGOCRED;
    private clientOptions = {
        tlsCertificateKeyFile: this.credentials,
        serverApi: { version: '1', strict: true, deprecationErrors: true }
    };

    public async run() {
        try {
            // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
            await mongoose.connect(this.uri, this.clientOptions as ConnectOptions);
            await mongoose.connection.db.admin().command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        } finally {
            // Ensures that the client will close when you finish/error
            await mongoose.disconnect();
        }
    }
}

export default MongoDBConfiguration;