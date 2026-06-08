import type { OffsetUnit, TriggerType } from '@repo/highland-hosts-api-client';
import {
  ITemplateTriggerInputDto,
  OFFSET_UNITS,
  TRIGGER_TYPES,
} from '@repo/highland-hosts-api-client';
import { IsBoolean, IsIn, IsNumber, Min } from 'class-validator';

export class TemplateTriggerInputDto implements ITemplateTriggerInputDto {
  @IsIn(TRIGGER_TYPES)
  triggerType: TriggerType;

  @IsNumber()
  @Min(0)
  offsetValue: number;

  @IsIn(OFFSET_UNITS)
  offsetUnit: OffsetUnit;

  @IsBoolean()
  allowMultiplePerBooking: boolean;

  @IsBoolean()
  sendIfPast: boolean;
}
