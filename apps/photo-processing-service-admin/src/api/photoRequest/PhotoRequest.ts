import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type PhotoRequest = {
  createdAt: Date;
  id: string;
  photoUrl: JsonValue;
  resultUrl: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
