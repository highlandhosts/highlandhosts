import type { IPhoneLookupRequestDto } from '@repo/highland-hosts-api-client';
import { IsString } from 'class-validator';

export class PhoneLookupRequestDto implements IPhoneLookupRequestDto {
  @IsString()
  phoneNumber: string;
}
