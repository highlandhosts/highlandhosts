import { IConfirmPaymentIntentRequestDto } from '@repo/highland-hosts-api-client';

export class ConfirmPaymentIntentRequestDto implements IConfirmPaymentIntentRequestDto {
  paymentIntentId: string;
}
