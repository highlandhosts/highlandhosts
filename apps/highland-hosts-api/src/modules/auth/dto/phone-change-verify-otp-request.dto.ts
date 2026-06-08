import type { IAccountPhoneVerifyOtpRequestDto } from '@repo/highland-hosts-api-client';
import { IsString, Length } from 'class-validator';

export class PhoneChangeVerifyOtpRequestDto implements IAccountPhoneVerifyOtpRequestDto {
  @IsString()
  phoneNumber: string;

  @IsString()
  @Length(6, 6)
  code: string;
}
