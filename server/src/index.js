import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

const PORT=process.env.PORT || 3000;

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(app.listen(PORT, () => {
        console.log(`Port is listening on port ${PORT}!`)
    }))
})
.catch((error) => {
    console.log("Error while listening to app!", { error })
})