import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "completed";

export const TaskTitle = (record: TTask): string => {
  return record.completed || record.id;
};
