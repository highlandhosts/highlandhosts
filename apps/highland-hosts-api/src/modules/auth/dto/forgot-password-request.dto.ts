import { IForgotPasswordRequestDto } from '@repo/highland-hosts-api-client';
import { IsEmail } from 'class-validator';

export class ForgotPasswordRequestDto implements IForgotPasswordRequestDto {
  @IsEmail()
  email: string;
}
