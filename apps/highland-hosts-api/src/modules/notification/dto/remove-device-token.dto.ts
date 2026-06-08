import type { IRemoveDeviceTokenRequestDto } from '@repo/highland-hosts-api-client';
import { IsString } from 'class-validator';

export class RemoveDeviceTokenRequestDto implements IRemoveDeviceTokenRequestDto {
  @IsString()
  token: string;
}
