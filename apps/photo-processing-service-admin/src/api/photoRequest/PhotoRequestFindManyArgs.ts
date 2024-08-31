import { PhotoRequestWhereInput } from "./PhotoRequestWhereInput";
import { PhotoRequestOrderByInput } from "./PhotoRequestOrderByInput";

export type PhotoRequestFindManyArgs = {
  where?: PhotoRequestWhereInput;
  orderBy?: Array<PhotoRequestOrderByInput>;
  skip?: number;
  take?: number;
};
