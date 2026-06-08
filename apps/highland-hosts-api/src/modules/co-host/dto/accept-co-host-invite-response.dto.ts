import type {
  CoHostRole,
  IAcceptCoHostInviteResponseDto,
} from '@repo/highland-hosts-api-client';

export class AcceptCoHostInviteResponseDto implements IAcceptCoHostInviteResponseDto {
  listingId: number;
  role: CoHostRole;
}
