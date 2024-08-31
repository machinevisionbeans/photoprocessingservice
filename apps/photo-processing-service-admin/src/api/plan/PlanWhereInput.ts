import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type PlanWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isPaidPlan?: BooleanNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  transactions?: TransactionListRelationFilter;
};
