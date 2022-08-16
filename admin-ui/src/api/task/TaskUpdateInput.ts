import { UserUpdateManyWithoutTasksInput } from "./UserUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  completed?: string;
  user?: UserUpdateManyWithoutTasksInput;
};
