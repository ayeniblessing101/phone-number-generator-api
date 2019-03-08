import express from 'express';
import phoneNumberController from '../controllers/phoneNumberController';

const phoneNumbersRoute = express.Router();

phoneNumbersRoute.get('/phone-number', phoneNumberController.createPhoneNumbers);
phoneNumbersRoute.get('/phone-numbers', phoneNumberController.getPhoneNumbers);

export default phoneNumbersRoute;
