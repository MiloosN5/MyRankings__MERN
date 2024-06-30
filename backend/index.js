import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';

// routes
import playersRoutes from './routes/players.js'
import playerRoutes from './routes/player.js'

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from Homepage');
});

app.use('/players', playersRoutes);
app.use('/player', playerRoutes);

mongoose
    .connect(process.env.mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on ${process.env.DOMAIN}:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });


