import type { IConfirmProfilePhotoUploadRequestDto } from '@repo/highland-hosts-api-client';
import { IsString } from 'class-validator';

export class ConfirmProfilePhotoUploadRequestDto implements IConfirmProfilePhotoUploadRequestDto {
  @IsString()
  photoKey: string;
}
