import { URLController } from './controller/URLController';
import express, { Request, Response } from 'express';
import { MongoConnection } from './database/MongoConnection';

const app = express();

const port = 5000;

app.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController;

app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);

app.get('/test', (req: Request, res: Response) => {
    res.json({success: true})
})

app.listen(port , () => {console.log(`Server running in port: ${port}`)});



