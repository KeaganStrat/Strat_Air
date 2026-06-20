const QRCode = require('qrcode');

// The exact URL you want encoded
console.log("HEREE")
const url = 'https://keaganstrat.github.io/Strat_Air/';

// This generates a permanent, static image file right in your project folder
QRCode.toFile('stratair-qr.png', url, {
  width: 500,
  color: {
    dark: '#000000',  // Black dots
    light: '#FFFFFF' // White background
  }
}, function (err) {
  if (err) throw err;
  console.log('Permanent Static QR code saved!');
});