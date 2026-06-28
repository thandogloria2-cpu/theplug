const Tesseract = require('tesseract.js');
Tesseract.recognize('https://www.image2url.com/r2/default/images/1780430448425-0b926524-baa9-4958-941e-d554acdec5b6.jpg', 'eng')
  .then(({ data: { text } }) => {
    console.log("OCR RESULT:");
    console.log(text);
  })
  .catch(err => {
    console.error("OCR ERROR:", err);
  });
