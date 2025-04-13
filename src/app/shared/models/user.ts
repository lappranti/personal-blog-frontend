import { Project } from './project';

export interface User {
  _id?: string;
  email: string;
  password: string;
  username?: string;
  profilePictureUrl?: string;
  jobTitle?: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
}
