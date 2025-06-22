// lib/saveData.js
const fs = require('fs');
const path = require('path');

const saveData = (data) => {
  const filePath = path.join(__dirname, '..', 'data.json');
  try {
    console.log('DATA TO SAVE:', data); // <-- DEBUG LINE
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Data saved to data.json');
  } catch (err) {
    console.error('Error writing to data.json:', err);
  }
};

module.exports = saveData;
