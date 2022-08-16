import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
