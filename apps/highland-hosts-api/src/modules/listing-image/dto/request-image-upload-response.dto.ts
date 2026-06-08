import type { IRequestListingImageUploadResponseDto } from '@repo/highland-hosts-api-client';

export class RequestListingImageUploadResponseDto implements IRequestListingImageUploadResponseDto {
  imageId: string;
  uploadUrl: string;
}
