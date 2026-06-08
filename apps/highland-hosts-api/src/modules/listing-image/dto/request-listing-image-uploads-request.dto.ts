import type { IRequestListingImageUploadsRequestDto } from '@repo/highland-hosts-api-client';
import { IsInt, IsNumberString, Max, Min } from 'class-validator';

export class RequestListingImageUploadsRequestDto implements IRequestListingImageUploadsRequestDto {
  @IsNumberString()
  listingId: string;

  @IsInt()
  @Min(1)
  @Max(20)
  count: number;
}
