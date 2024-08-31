import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoRequestUpdateInput = {
  photoUrl?: InputJsonValue;
  resultUrl?: InputJsonValue;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
