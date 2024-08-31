import { Plan } from "../plan/Plan";
import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  plan?: Plan | null;
  status?: "Option1" | null;
  transactionDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
