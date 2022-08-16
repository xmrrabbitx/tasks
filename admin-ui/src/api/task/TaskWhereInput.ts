import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TaskWhereInput = {
  completed?: StringFilter;
  id?: StringFilter;
  user?: UserListRelationFilter;
};
