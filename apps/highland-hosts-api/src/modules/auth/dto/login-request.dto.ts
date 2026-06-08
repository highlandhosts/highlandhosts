import { ILoginRequestDto } from '@repo/highland-hosts-api-client';
import { IsEmail, IsString } from 'class-validator';

export class LoginRequestDto implements ILoginRequestDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
