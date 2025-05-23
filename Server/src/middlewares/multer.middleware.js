import multer from "multer";
 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp'); // Specify the upload directory
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Rename the file
    }
  });


  export const upload = multer({ storage})