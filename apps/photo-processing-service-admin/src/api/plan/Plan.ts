import { Transaction } from "../transaction/Transaction";

export type Plan = {
  createdAt: Date;
  description: string | null;
  id: string;
  isPaidPlan: boolean | null;
  name: string | null;
  price: number | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
