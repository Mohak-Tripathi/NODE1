const multer= require('multer');
const path = require('path');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(_dirname, "../downloadfile"))
    },
    filename: function (req, file, cb) {
     console.log({file})
        const uniquePrefix = Date.now() + '-' 
      cb(null, uniquePrefix + '-' + file.originalname )
    }
  })
  
  function fileFilter (req, file, cb) {

    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        // To accept the file pass `true`, like so:
        callback(null, true);
      } else {
        // To reject this file pass `false`, like so:
        callback(new Error("Incorrect mime type"), false);
      } 

  }
 

const options = {
    storage,
    fileFilter,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
  };

  const uploads = multer(options);
  module.exports= uploads;