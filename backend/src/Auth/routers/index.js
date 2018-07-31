import express from 'express';

import { signin, signup } from '../controllers';
import asyncMiddleware from '../../utils/asyncMiddleware';
import { localPassport } from '../middlewares/authenticate';
import { signinValidation, signupValidation } from '../middlewares/validations';
const router = express.Router();

router.post(
  '/sign-in',
  signinValidation,
  localPassport,
  asyncMiddleware(signin),
);
router.post('/sign-up', signupValidation, asyncMiddleware(signup));

export default router;
