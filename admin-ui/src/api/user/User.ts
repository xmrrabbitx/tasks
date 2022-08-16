import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  task?: Task | null;
  updatedAt: Date;
  username: string;
};
