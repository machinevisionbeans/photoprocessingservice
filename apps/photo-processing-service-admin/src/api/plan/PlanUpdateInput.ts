import { TransactionUpdateManyWithoutPlansInput } from "./TransactionUpdateManyWithoutPlansInput";

export type PlanUpdateInput = {
  description?: string | null;
  isPaidPlan?: boolean | null;
  name?: string | null;
  price?: number | null;
  transactions?: TransactionUpdateManyWithoutPlansInput;
};
