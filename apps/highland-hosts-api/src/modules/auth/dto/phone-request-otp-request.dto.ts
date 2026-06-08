import type { IPhoneRequestOtpRequestDto } from '@repo/highland-hosts-api-client';
import { IsString } from 'class-validator';

export class PhoneRequestOtpRequestDto implements IPhoneRequestOtpRequestDto {
  @IsString()
  phoneNumber: string;
}
