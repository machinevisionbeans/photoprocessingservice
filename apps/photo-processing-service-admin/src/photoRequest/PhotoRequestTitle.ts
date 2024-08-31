import { PhotoRequest as TPhotoRequest } from "../api/photoRequest/PhotoRequest";

export const PHOTOREQUEST_TITLE_FIELD = "id";

export const PhotoRequestTitle = (record: TPhotoRequest): string => {
  return record.id?.toString() || String(record.id);
};
