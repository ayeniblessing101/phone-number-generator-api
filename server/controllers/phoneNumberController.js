import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../phone-numbers.txt');

exports.getPhoneNumbers = (req, res) => {
  fs.readFile(filePath, (err, data) => {
    if(!err) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(data);
      res.end();
    } else {
      return err;
    }
  });
};

exports.createPhoneNumbers = (req, res) => {
  const phoneNumber = '0' + Math.floor(Math.random() * 1000000000);
  fs.appendFile(filePath, phoneNumber +'\r\n' , (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
    } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Saved', data);
      res.end();
    }
  });
};
