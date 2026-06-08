import type { IRequestListingImageUploadRequestDto } from '@repo/highland-hosts-api-client';
import { IsNumberString } from 'class-validator';

export class RequestListingImageUploadRequestDto implements IRequestListingImageUploadRequestDto {
  @IsNumberString()
  listingId: string;
}
