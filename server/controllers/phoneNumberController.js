import fs from 'fs';
import path from 'path';
import randomize from 'randomatic'; 

const filePath = path.join(__dirname, '../phone-numbers.txt');

exports.getPhoneNumbers = (req, res) => {
  const data = fs.readFileSync(filePath, 'utf8');
  if (data.length > 0) {
    const phoneNumbers = data.split(',');
    res.status(200).send({
      message: 'Phone Number fetched successfully',
      phoneNumbers,
    });
  } else {
    res.status(200).send({
      message: 'There are no Phone Numbers yet!'
    });
  }
};

exports.createPhoneNumbers = (req, res) => {
  let  phoneNumber = '0' + randomize('0', 9);
  var newLine= ",";
  fs.appendFileSync(filePath, phoneNumber + newLine, 'utf8');

  res.status(201).send({
    message: 'Phone Number generated successfully',
  });
};
