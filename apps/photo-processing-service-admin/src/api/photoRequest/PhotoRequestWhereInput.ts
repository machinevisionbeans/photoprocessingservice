import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoRequestWhereInput = {
  id?: StringFilter;
  photoUrl?: JsonFilter;
  resultUrl?: JsonFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
