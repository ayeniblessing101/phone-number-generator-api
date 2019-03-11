import express from 'express';
import bodyParser from 'body-parser';
import phoneNumbersRoute from './server/routes/phoneNumbersRoute';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api/v1', phoneNumbersRoute);

const port = process.env.PORT || 8080;


if(!module.parent) {
  app.listen(port, () => {
    console.log('Server running on port 8080');
  });
}

module.exports = app;