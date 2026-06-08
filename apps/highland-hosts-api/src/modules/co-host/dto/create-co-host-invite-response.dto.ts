import type { ICreateCoHostInviteResponseDto } from '@repo/highland-hosts-api-client';

export class CreateCoHostInviteResponseDto implements ICreateCoHostInviteResponseDto {
  inviteId: number;
  inviteLink: string;
}
