const { MongoClient, ServerApiVersion } = require("mongodb");

export const collectionNameObj = {
    servicesCollection: 'servicesCollection',
};

export default function dbConnect(collectionName) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    if (!uri) {
        throw new Error("Please add your MongoDB URI to .env.local");
    }
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME).collection(collectionName);
};