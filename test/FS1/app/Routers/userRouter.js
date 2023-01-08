const { Router } = require('express');
const userRouter = Router();
const {
  createUser,
  userSignIn,
  uploadProfile,
  signOut,
} = require('../Routes/Controllers/userController');

const { isAuth } = require('../Routes/Middlewares/authMiddleWare');

const {
  validateUserSignUp,
  userValidation,
  validateUserSignIn,
} = require('../Routes/Middlewares/userValidation');

const multer = require('multer');

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};

const uploads = multer({ storage, fileFilter });

userRouter.post('/sign-up', validateUserSignUp, userValidation, createUser);
userRouter.post('/sign-in', validateUserSignIn, userValidation, userSignIn);
userRouter.post('/sign-out', isAuth, signOut);
userRouter.post('/upload-profile', isAuth, uploads.single('profile'), uploadProfile);

module.exports = userRouter;