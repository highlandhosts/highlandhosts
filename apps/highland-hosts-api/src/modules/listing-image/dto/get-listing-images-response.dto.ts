import type {
  IGetListingImagesResponseDto,
  IListingImageDto,
} from '@repo/highland-hosts-api-client';

export class GetListingImagesResponseDto implements IGetListingImagesResponseDto {
  images: IListingImageDto[];
}
