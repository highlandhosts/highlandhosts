import type { IRefreshTokenRequestDto } from '@repo/highland-hosts-api-client';
import { IsString } from 'class-validator';

export class RefreshTokenRequestDto implements IRefreshTokenRequestDto {
  @IsString()
  refreshToken: string;
}
