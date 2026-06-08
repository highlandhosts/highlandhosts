import type { IConfirmListingImageUploadRequestDto } from '@repo/highland-hosts-api-client';
import { IsUUID } from 'class-validator';

export class ConfirmListingImageUploadRequestDto implements IConfirmListingImageUploadRequestDto {
  @IsUUID()
  imageId: string;
}
