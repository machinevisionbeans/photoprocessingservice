import { Module } from "@nestjs/common";
import { PhotoRequestModuleBase } from "./base/photoRequest.module.base";
import { PhotoRequestService } from "./photoRequest.service";
import { PhotoRequestController } from "./photoRequest.controller";
import { PhotoRequestResolver } from "./photoRequest.resolver";

@Module({
  imports: [PhotoRequestModuleBase],
  controllers: [PhotoRequestController],
  providers: [PhotoRequestService, PhotoRequestResolver],
  exports: [PhotoRequestService],
})
export class PhotoRequestModule {}
