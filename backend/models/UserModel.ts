import { Schema, model, Document } from 'mongoose';

export interface UserModelInterface {
  email: string;
  username: string;
  fullname: string;
  password: string;
  confirmed?: boolean;
  confirmHash?: string;
  location?: string;
  about?: string;
  website?: string;
}

type UserModelModelDocument = UserModelInterface & Document;

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
  fullname: {
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
  confirmHash: {
    required: true,
    type: String,
  },
  location: String,
  about: String,
  website: String,
});

export const UserModel = model('User', UserSchema);
