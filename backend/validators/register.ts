import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Set email')
    .isEmail()
    .withMessage('wrong email')
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage('wrong email length'),
  body('fullname', 'Set fullname')
    .isString()
    .withMessage('wrong email')
    .isLength({
      min: 2,
      max: 20,
    })
    .withMessage('wrong fullname length'),
  body('username', 'Set login')
    .isString()
    .withMessage('wrong email')
    .isLength({
      min: 2,
      max: 20,
    })
    .withMessage('wrong username length'),
  body('password', 'Set password')
    .isString()
    .withMessage('wrong email')
    .isLength({
      min: 6,
    })
    .withMessage('password length min 6 symbols')
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error('password does not match');
      } else {
        return value;
      }
    }),
];
