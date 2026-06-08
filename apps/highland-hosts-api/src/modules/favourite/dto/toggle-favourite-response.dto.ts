import type { IToggleFavouriteResponseDto } from '@repo/highland-hosts-api-client';

export class ToggleFavouriteResponseDto implements IToggleFavouriteResponseDto {
  isFavourited: boolean;
}
