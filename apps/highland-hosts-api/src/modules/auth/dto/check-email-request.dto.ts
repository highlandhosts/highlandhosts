import type { ICheckEmailRequestDto } from '@repo/highland-hosts-api-client';
import { IsEmail } from 'class-validator';

export class CheckEmailRequestDto implements ICheckEmailRequestDto {
  @IsEmail()
  email: string;
}
