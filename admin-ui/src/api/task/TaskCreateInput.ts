import { UserCreateNestedManyWithoutTasksInput } from "./UserCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  completed: string;
  user?: UserCreateNestedManyWithoutTasksInput;
};
