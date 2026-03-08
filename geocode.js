const fs = require('fs');
const path = require('path');

// Read app.js
const code = fs.readFileSync('app.js', 'utf8');

// Extract modalData object string
const match = code.match(/const\s+modalData\s*=\s*(\{[\s\S]*?\n\s*\});/);
if (!match) {
  console.error("Could not find modalData");
  process.exit(1);
}

// We can eval this safely because it's just a JS object declaration
const modalDataStr = `const modalData = ${match[1]}; module.exports = modalData;`;
fs.writeFileSync('temp_data.js', modalDataStr);
const modalData = require('./temp_data');

const places = [];
for (const [id, data] of Object.entries(modalData)) {
  places.push({ id, title: data.title });
}
console.log(JSON.stringify(places, null, 2));
