import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PhotoRequestListRelationFilter } from "../photoRequest/PhotoRequestListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  photoRequests?: PhotoRequestListRelationFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
