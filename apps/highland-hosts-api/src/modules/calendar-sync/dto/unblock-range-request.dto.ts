import type { IUnblockRangeRequestDto } from '@repo/highland-hosts-api-client';
import { IsDateString, Validate } from 'class-validator';
import { IsBeforeEndDate } from './is-before-end-date.validator';

export class UnblockRangeRequestDto implements IUnblockRangeRequestDto {
  @IsDateString()
  @Validate(IsBeforeEndDate)
  startDate: string;

  @IsDateString()
  endDate: string;
}
