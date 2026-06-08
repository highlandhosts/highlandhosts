import type { IEmailRequestOtpRequestDto } from '@repo/highland-hosts-api-client';
import { IsEmail } from 'class-validator';

export class EmailRequestOtpRequestDto implements IEmailRequestOtpRequestDto {
  @IsEmail()
  email: string;
}
