import { TransactionCreateNestedManyWithoutPlansInput } from "./TransactionCreateNestedManyWithoutPlansInput";

export type PlanCreateInput = {
  description?: string | null;
  isPaidPlan?: boolean | null;
  name?: string | null;
  price?: number | null;
  transactions?: TransactionCreateNestedManyWithoutPlansInput;
};
