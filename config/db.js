import mongoose from 'mongoose';

const connectToDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`connect to database ${conn.connection.name}`);
    } catch (error) {
        console.log(e);
        
    }
}

export default connectToDb