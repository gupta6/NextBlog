import { MongoClient } from 'mongodb';

async function handler(req, res){
    if(req.method === 'POST'){
        const { email, name, msg } = req.body;
        
        if(!email || !email.includes('@') || !name || name.trim() === '' || !msg || msg.trim() === '' ){
            res.status(422).json({ message: 'Inavlid Data' });
        }

        let client;

        const connecttionString =  `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.hzibf2w.mongodb.net/`

        try{
            client = await MongoClient.connect(connecttionString);
        }
        catch(err){
            res.status(500).json({ message: 'Internal server error.' });
            return;
        }

        const newMessage = {
            email: email,
            name: name,
            msg: msg
        }

        const db = client?.db(process.env.mongodb_database);

        try{
            const res = await db?.collection('messages').insertOne(newMessage);
        }
        catch(err){
            client.close();
            res.status(500).json({ message: 'Internal server error.' });
            return;
        }

        res.status(200).send({
            message: 'Successfully stored'
        });
    }
}

export default handler;