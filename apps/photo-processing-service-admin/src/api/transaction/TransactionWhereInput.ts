import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  plan?: PlanWhereUniqueInput;
  status?: "Option1";
  transactionDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
