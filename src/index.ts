import express from 'express';
import protectedRoutes from './server/routes/index';
import unprotectedRoutes from './server/routes/user';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {protect} from '@middlewares';

dotenv.config();
const port = 5000;

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("static"));

app.use('/api', unprotectedRoutes);
app.use('/api',protect, protectedRoutes);


app.listen(port,()=>{console.log("app is running on port 5000")});
