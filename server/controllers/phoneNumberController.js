import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../phone-numbers.txt');

exports.getPhoneNumbers = (req, res) => {
  fs.readFile(filePath, (err, data) => {
    if(!err) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end();
      return data + '\n'
    } else {
      return err;
    }
  });
}