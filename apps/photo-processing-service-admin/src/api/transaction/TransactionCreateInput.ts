import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  plan?: PlanWhereUniqueInput | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
