import { SortOrder } from "../../util/SortOrder";

export type PhotoRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  photoUrl?: SortOrder;
  resultUrl?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
