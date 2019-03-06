import express from 'express';
import bodyParser from 'body-parser';
import phoneNumberRoutes from './server/routes/phoneNumbersRoute';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/vi', phoneNumberRoutes)

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server running on port 3000');
});