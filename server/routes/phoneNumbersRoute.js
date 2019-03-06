import express from 'express';
import phoneNumberController from '../controllers/phoneNumberController';

const phoneNumbersRoute = express.Router();

phoneNumbersRoute.get('/phone-numbers', phoneNumberController.getPhoneNumbers);
phoneNumbersRoute.post('/phone-numbers', phoneNumberController.createPhoneNumber);

export default phoneNumbersRoute;
