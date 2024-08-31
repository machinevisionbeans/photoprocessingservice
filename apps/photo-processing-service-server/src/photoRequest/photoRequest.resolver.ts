import * as graphql from "@nestjs/graphql";
import { PhotoRequestResolverBase } from "./base/photoRequest.resolver.base";
import { PhotoRequest } from "./base/PhotoRequest";
import { PhotoRequestService } from "./photoRequest.service";

@graphql.Resolver(() => PhotoRequest)
export class PhotoRequestResolver extends PhotoRequestResolverBase {
  constructor(protected readonly service: PhotoRequestService) {
    super(service);
  }
}
