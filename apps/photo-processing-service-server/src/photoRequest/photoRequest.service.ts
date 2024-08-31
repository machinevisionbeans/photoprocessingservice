import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhotoRequestServiceBase } from "./base/photoRequest.service.base";

@Injectable()
export class PhotoRequestService extends PhotoRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
