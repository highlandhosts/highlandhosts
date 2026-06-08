import type {
  CoHostRole,
  IGetListingCoHostsResponseDto,
  IListingCoHostDto,
} from '@repo/highland-hosts-api-client';

export class ListingCoHostDto implements IListingCoHostDto {
  id: number;
  accountId: number;
  accountName: string;
  accountEmail: string;
  role: CoHostRole;
  createdAt: Date;
}

export class GetListingCoHostsResponseDto implements IGetListingCoHostsResponseDto {
  coHosts: ListingCoHostDto[];
}
