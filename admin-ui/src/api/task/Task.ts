import { User } from "../user/User";

export type Task = {
  completed: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: Array<User>;
};
