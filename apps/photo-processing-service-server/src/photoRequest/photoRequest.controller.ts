import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PhotoRequestService } from "./photoRequest.service";
import { PhotoRequestControllerBase } from "./base/photoRequest.controller.base";

@swagger.ApiTags("photoRequests")
@common.Controller("photoRequests")
export class PhotoRequestController extends PhotoRequestControllerBase {
  constructor(protected readonly service: PhotoRequestService) {
    super(service);
  }
}
