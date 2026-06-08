import {
  IGetEmailSubscriptionsResponseDto,
  ISaveEmailSubscriptionsRequestDto,
} from '@repo/highland-hosts-api-client';
import { IsBoolean } from 'class-validator';

export class SaveEmailSubscriptionsRequestDto implements ISaveEmailSubscriptionsRequestDto {
  @IsBoolean()
  subscribedToNewsViaEmail: boolean;
}

export class GetEmailSubscriptionsResponseDto implements IGetEmailSubscriptionsResponseDto {
  subscribedToNewsViaEmail: boolean;
}
