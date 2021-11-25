import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: {
    unique: true,
    required: true,
    type: String,
  },
  username: {
    unique: true,
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmed_hash: {
    required: true,
    type: String,
  },
  location: String,
  about: String,
  website: String,
});

export const UserModel = model('User', UserSchema);
