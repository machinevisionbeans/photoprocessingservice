import { PhotoRequest } from "../photoRequest/PhotoRequest";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  photoRequests?: Array<PhotoRequest>;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
