import type { IRequestProfilePhotoUploadResponseDto } from '@repo/highland-hosts-api-client';

export class RequestProfilePhotoUploadResponseDto implements IRequestProfilePhotoUploadResponseDto {
  uploadUrl: string;
  photoKey: string;
}
