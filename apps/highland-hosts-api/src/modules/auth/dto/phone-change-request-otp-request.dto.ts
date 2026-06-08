import type { IAccountPhoneRequestOtpRequestDto } from '@repo/highland-hosts-api-client';
import { IsString } from 'class-validator';

export class PhoneChangeRequestOtpRequestDto implements IAccountPhoneRequestOtpRequestDto {
  @IsString()
  phoneNumber: string;
}
