import type { ICreateListingResponseDto } from '@repo/highland-hosts-api-client';

export class CreateListingResponseDto implements ICreateListingResponseDto {
  id: number;
  createdAt: Date;
}
