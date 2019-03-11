import fs from 'fs';
import path from 'path';
import randomize from 'randomatic'; 

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
  const phoneNumber = '0' + randomize('0', 9);
  fs.appendFile(filePath, phoneNumber +',' , (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
    } else {
      res.writeHead(201, {'Content-Type': 'text/plain'});
      res.write('Saved', data);
      res.end();
    }
  });
};
