import express from 'express';
import phoneNumberController from '../controllers/phoneNumberController';

const phoneNumbersRoute = express.Router();

phoneNumbersRoute.post('/phone-numbers', phoneNumberController.createPhoneNumbers);
phoneNumbersRoute.get('/phone-numbers', phoneNumberController.getPhoneNumbers);

export default phoneNumbersRoute;
