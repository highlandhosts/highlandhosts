import type { IUpdateAccountPrivacyResponseDto } from '@repo/highland-hosts-api-client';

export class UpdateAccountPrivacyResponseDto implements IUpdateAccountPrivacyResponseDto {
  searchEngineIndexingEnabled: boolean;
}
