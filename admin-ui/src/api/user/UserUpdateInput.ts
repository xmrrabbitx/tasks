import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  task?: TaskWhereUniqueInput | null;
  username?: string;
};
