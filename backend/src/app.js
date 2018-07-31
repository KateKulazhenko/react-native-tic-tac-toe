import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import config from '../config/env';
import errorHandler from './utils/errors';
import passport from 'passport';
import cors from 'cors';

import authRouter from './Auth/routers';

import { bearer, bearerWithUser, local } from './Auth/passport';

mongoose.connect(config.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

const app = express();
const router = express.Router();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

passport.use(bearer);
passport.use(local);
passport.use('bearerWithUser', bearerWithUser);

router.use('/auth', authRouter);

app.use('/', router);
app.use(errorHandler);

module.exports = app;
